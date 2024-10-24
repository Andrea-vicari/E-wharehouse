"use strict";

var express = require('express');

var multer = require('multer');

var path = require('path');

var Images = require('../models/imageModel');

var mongoose = require('mongoose');

var router = express.Router();

var _require = require('../controllers/imageController'),
    viewAllImages = _require.viewAllImages,
    uploadImages = _require.uploadImages; // Configure multer storage


var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
});
router.post('/upload', upload.single('file'), function (req, res) {
  var image = req.file.image;
  console.log("*************");
  console.log("*************");
  console.log("*************");
  console.log("Also sprach Zarathustra");
  console.log(req.file);
  console.log("Minima Moralia");
  console.log(req.body);
  Images.create({
    immagine: req.file.filename,
    idProdotto: req.body.idProdotto
  }).then(function (result) {
    return res.json(result);
  })["catch"](function (error) {
    return console.log(error);
  });
});
router.get('/', viewAllImages);
module.exports = router;