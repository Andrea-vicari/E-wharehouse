const express = require('express');



const {createNewProdotti, viewAllProdotti, deleteProdotto} = require('../controllers/prodottiController');


const router = express.Router();




// Get
router.get('/', viewAllProdotti);

// Delete
router.delete('/:id', deleteProdotto);


// Post
router.post('/', createNewProdotti);

module.exports = router;