const express = require('express');


const {viewAllImages} = require('../controllers/imageController');
const {uploadImages} = require('../controllers/imageController');

const router = express.Router();

router.get('/', viewAllImages);
router.post('/', uploadImages);


module.exports = router