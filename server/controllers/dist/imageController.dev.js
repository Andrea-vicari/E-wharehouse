"use strict";

var Images = require('../models/imageModel'); // Get all Images: OK


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

module.exports = {
  viewAllImages: viewAllImages
};