
const Images = require('../models/ImageModel');
const mongoose = require('mongoose');

var fs = require('fs');
var multer = require('multer');


// Get all Images: OK
const viewAllImages = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Images")

    const allImages = await Images.find({}).sort({createdAt: -1});
    res.status(200).json(allImages)

}

const uploadImages = async (req, res)=> {

    const {image} = req.body


    // Add doc to the Mongo DB

    try{
        const Image = await Images.create({image})
        res.status(200).json(Image)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    viewAllImages, uploadImages
}