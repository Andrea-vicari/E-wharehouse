const express = require('express');

const {createNewProdotti, viewAllProdotti, deleteProdotto, aggiungiImmagine} = require('../controllers/prodottiController');


const router = express.Router();


router.get('/', viewAllProdotti);


//router.get('/closed/closedWorks', getClosedWorkout);


// Post
router.post('/', createNewProdotti);

router.post('/', aggiungiImmagine);

// Delete
router.delete('/:id', deleteProdotto);

// Update
//router.patch('/:id', updateWorkOut);

// Confirm
//router.patch('/close/:id', confirmWorkOut);


module.exports = router;