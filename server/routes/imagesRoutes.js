const express = require('express');


const {viewAllImages} = require('../controllers/imageController');
// const {upload} = require('../controllers/imageController');
const {uploadImages} = require('../controllers/imageController');

const router = express.Router();

router.get('/', viewAllImages);
router.post('/', uploadImages);
// router.post('/', upload);

module.exports = router
