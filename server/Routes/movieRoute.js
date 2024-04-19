const express = require('express');
const route = express.Router();
const Movie = require('../Models/movieModel');
const authMiddleware = require('../Middlewares/authMiddleware');


//Create
route.post('/add-movie', authMiddleware, async (req, res) => {
    try{
        const movie = new Movie(req.body);
        await movie.save();
        res.status(200).send({
            success: true,
            message: 'Movie added successfully'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
})


//Read
route.get('/get-all-movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).send({
            success: true,
            message: 'Movies fetched successfully',
            data: movies
        })
    } catch (err){
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
})


//Update
route.put('/update-movie', authMiddleware, async (req, res) => {
    try{
        await Movie.findByIdAndUpdate(req.body.movieId, req.body);
        res.status(200).send({
            success: true,
            message: 'Movie updated successfully'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
})


//Delete
route.delete('/delete-movie', authMiddleware, async (req, res) => {
    try{
        await Movie.findByIdAndDelete(req.query.movieId);
        res.status(200).send({
            success: true,
            message: 'Movie deleted successfully'
        })
    } catch(err) {
        res.status(500).send({
            success: true,
            message: err.message
        })
    }
})


module.exports = route;





