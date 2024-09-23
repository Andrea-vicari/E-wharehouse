const express = require('express');

const {createNewProdotti, viewAllProdotti} = require('../controllers/prodottiController');


const router = express.Router();


router.get('/', viewAllProdotti);


//router.get('/closed/closedWorks', getClosedWorkout);


// Post
router.post('/', createNewProdotti);

// Delete
//router.delete('/:id', deleteWorkout);

// Update
//router.patch('/:id', updateWorkOut);

// Confirm
//router.patch('/close/:id', confirmWorkOut);


module.exports = router;