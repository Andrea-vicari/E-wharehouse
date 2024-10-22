const express = require('express');
const multer = require('multer');
const path = require('path');


const {createNewProdotti, viewAllProdotti, deleteProdotto} = require('../controllers/prodottiController');


const router = express.Router();




// Get
router.get('/', viewAllProdotti);

// Delete
router.delete('/:id', deleteProdotto);


// Post
router.post('/', createNewProdotti);




//router.get('/closed/closedWorks', getClosedWorkout);

module.exports = router;