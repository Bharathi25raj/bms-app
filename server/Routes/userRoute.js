const express = require('express');
const route = express.Router();
const User = require('../Models/userModel.js')


route.post('/register', async (request, response) => {

    try{

        const userExists = await User.findOne({email: request.body.email});

        if(userExists){
            response.status(403).send({
                success: false,
                message: "User already exists"
            })

            return;
        }

        const newUser = new User(request.body);
        await newUser.save() ;

        response.status(200).send({
            success: true,
            message: "Registration Successful. Please login!"
        });

    } catch(err) {

        response.status(500).send({
            success: false,
            message: "Something went wrong! Please, try again in sometime."
        })
    }
})

module.exports = route;

