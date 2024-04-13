const express = require("express");
const route = express.Router();
const User = require("../Models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authMiddleware = require("../Middlewares/authMiddleware.js")


route.post("/register", async (request, response) => {
  try {
    const userExists = await User.findOne({ email: request.body.email });

    if (userExists) {
      response.status(403).send({
        success: false,
        message: "User already exists",
      });

      return;
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    request.body.password = hashedPassword;

    const newUser = new User(request.body);
    await newUser.save();

    response.status(200).send({
      success: true,
      message: "Registration Successful. Please login!",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: "Something went wrong! Please, try again in sometime.",
    });
  }
});

route.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    
    if (!user) {
      response.status(401).send({
        success: false,
        message: "Invalid Credentials",
      });

      return;
    }

    const validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );

    if (!validPassword) {
      response.status(401).send({
        success: false,
        message: "Invalid Credentials",
      });

      return;
    }

    const token = jwt.sign(
      { userId: user._id, emailId: user.email },
      process.env.jwt_secret,
      { expiresIn: "1d" }
    );

    response.status(200).send({
      success: true,
      message: "User Logged in",
      data: token
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: "Something went wrong, Please try again later!",
    });
  }
});

route.get("/get-current-user", authMiddleware, async (req, res) => {
  try{
    const user = await User.findById(req.body.userId).select("-password")
    res.send({
      success: true,
      message: "User details fecthed sucessfully",
      data: user
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Something went wrong"
    })
  }
})

module.exports = route;
