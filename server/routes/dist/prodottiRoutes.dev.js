"use strict";

var express = require('express');

var _require = require('../controllers/prodottiController'),
    createNewProdotti = _require.createNewProdotti,
    viewAllProdotti = _require.viewAllProdotti,
    deleteProdotto = _require.deleteProdotto;

var router = express.Router();
router.get('/', viewAllProdotti); //router.get('/closed/closedWorks', getClosedWorkout);
// Post

router.post('/', createNewProdotti); // Delete

router["delete"]('/:id', deleteProdotto); // Update
//router.patch('/:id', updateWorkOut);
// Confirm
//router.patch('/close/:id', confirmWorkOut);

module.exports = router;