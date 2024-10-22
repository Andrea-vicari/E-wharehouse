const express = require('express');

const {viewAllBookings, createNewBooking, viewSingleBooking, updateStatusBooking, viewBookingTBA} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);
router.post('/', createNewBooking);
router.get('/:id', viewSingleBooking)
router.patch('/:id', updateStatusBooking)
router.get('/tba/list', viewBookingTBA)


module.exports = router;