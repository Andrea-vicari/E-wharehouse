"use strict";

var Prodotti = require('../models/prodottiModel');

var mongoose = require('mongoose');

var multer = require('multer');

var path = require('path'); // Get all Prodotti: OK


var viewAllProdotti = function viewAllProdotti(req, res) {
  var allProdotti;
  return regeneratorRuntime.async(function viewAllProdotti$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Req from /");
          console.log("View all Prodotti");
          _context.next = 4;
          return regeneratorRuntime.awrap(Prodotti.find({}).sort({
            createdAt: -1
          }));

        case 4:
          allProdotti = _context.sent;
          res.status(200).json(allProdotti);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Create a NEW Prodotti:


var createNewProdotti = function createNewProdotti(req, res) {
  var nome, prodotti;
  return regeneratorRuntime.async(function createNewProdotti$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          nome = req.body.nome; // Add doc to the Mongo DB

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Prodotti.create({
            nome: nome
          }));

        case 4:
          prodotti = _context2.sent;
          res.status(200).json(prodotti);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log({
            error: _context2.t0.message
          });
          res.status(400).json({
            error: _context2.t0.message
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Delete


var deleteProdotto = function deleteProdotto(req, res) {
  var id, prodotti;
  return regeneratorRuntime.async(function deleteProdotto$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;

          if (mongoose.Types.ObjectId.isValid(id)) {
            _context3.next = 3;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: "Nessun prodotto trovato"
          }));

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(Prodotti.findOneAndDelete({
            _id: id
          }));

        case 5:
          prodotti = _context3.sent;

          if (prodotti) {
            _context3.next = 9;
            break;
          }

          console.log({
            error: error.message
          });
          return _context3.abrupt("return", res.status(400).json({
            error: "Nessun prodotto trovato"
          }));

        case 9:
          res.status(200).json(Prodotti);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  createNewProdotti: createNewProdotti,
  viewAllProdotti: viewAllProdotti,
  deleteProdotto: deleteProdotto
};