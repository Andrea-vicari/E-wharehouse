"use strict";

var Images = require('../models/imageModel');

var mongoose = require('mongoose');

var fs = require('fs');

var multer = require('multer'); // Get all Images: OK


var viewAllImages = function viewAllImages(req, res) {
  var allImages;
  return regeneratorRuntime.async(function viewAllImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Req from /");
          console.log("View all Images");
          _context.next = 4;
          return regeneratorRuntime.awrap(Images.find({}).sort({
            createdAt: -1
          }));

        case 4:
          allImages = _context.sent;
          res.status(200).json(allImages);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var uploadImages = function uploadImages(req, res) {
  var image, Image;
  return regeneratorRuntime.async(function uploadImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          image = req.body.image; // Add doc to the Mongo DB

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Images.create({
            image: image
          }));

        case 4:
          Image = _context2.sent;
          console.log("BELLA!!");
          res.status(200).json(Image);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          res.status(400).json({
            error: _context2.t0.message
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

module.exports = {
  viewAllImages: viewAllImages,
  uploadImages: uploadImages
};