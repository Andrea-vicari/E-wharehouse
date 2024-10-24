const express = require('express');
const multer = require('multer');
const path = require('path');
const Images = require('../models/imageModel');
const mongoose = require('mongoose');


const router = express.Router();

const {viewAllImages, uploadImages} = require('../controllers/imageController');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });


router.post('/upload', upload.single('file'),(req, res) => {
      const {image} = req.file
      
	
	console.log("*************")
	console.log("*************")
	console.log("*************")
	console.log("Also sprach Zarathustra")
	console.log(req.file)
	console.log("Minima Moralia")
	    
	
	Images.create({immagine:req.file.filename, idProdotto:req.id})
	.then(result=>res.json(result))
	.catch(error=>console.log(error))
    
});




router.get('/', viewAllImages);

module.exports = router;

