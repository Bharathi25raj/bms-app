const express = require('express');
const app = express();

require('dotenv').config();
require("./config/dbconfig");

const userRoute = require("./Routes/userRoute.js");

app.use(express.json());

app.use('/', userRoute);

app.listen(8082, () => {
    console.log("Server is listening at port 8082");
});