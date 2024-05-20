const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
require("./config/dbconfig");

const userRoute = require("./Routes/userRoute.js");
const movieRoute = require('./Routes/movieRoute.js');
const theatreRoute = require('./Routes/theatreRoute.js')

app.use(cors());

app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/movie', movieRoute);
app.use('/api/theatre', theatreRoute);

app.listen(8082, () => {
    console.log("Server is listening at port 8082");
});