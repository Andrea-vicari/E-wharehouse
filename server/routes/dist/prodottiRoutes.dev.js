"use strict";

var express = require('express');

var _require = require('../controllers/prodottiController'),
    createNewProdotti = _require.createNewProdotti,
    viewAllProdotti = _require.viewAllProdotti,
    deleteProdotto = _require.deleteProdotto;

var router = express.Router(); // Get

router.get('/', viewAllProdotti); // Delete

router["delete"]('/:id', deleteProdotto); // Post

router.post('/', createNewProdotti);
module.exports = router;