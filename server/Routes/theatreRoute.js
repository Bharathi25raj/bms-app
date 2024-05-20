const express = require('express');
const Theatre = require('../Models/theatreModel')
const authMiddleware = require('../Middlewares/authMiddleware');
const route = express.Router();


//Create
route.post('/add-theatre', authMiddleware, async (req, res) => {
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();

        res.status(200).send({
            success: true,
            message: 'Theatre added successfully'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Please try again later!'
        })
    }
})


//Read
route.post('/get-all-theatres-by-owner', authMiddleware, async (req, res) => {
    try{
        const theatres = await Theatre.find({ owner: req.body.userId });
        res.status(200).send({
            success: true,
            message: 'Theatres fetched successfully',
            data: theatres,
        })
    } catch(err) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Please try again in sometime!'
        })
    }
})


route.get('/get-all-theatres', authMiddleware, async (req, res) => {
    try{
        const theatres = await Theatre.find();
        res.status(200).send({
            success:true,
            message: 'Theatres fetched successfully',
            data: theatres,
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Please try again in someitme!'
        })
    }
})



//Update
route.put('/update-theatre', authMiddleware, async (req, res) => {
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body)
        res.status(200).send({
            success: true,
            message: 'Theatre updated successfully'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Please try again later!'
        })
    }
})



//Delete
route.delete('/delete-theatre', authMiddleware, async (req, res) => {
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId)
        res.status(200).send({
            success: true,
            message: 'Theatre deleted successfully'
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Please try again later!'
        })
    }
})


module.exports = route;