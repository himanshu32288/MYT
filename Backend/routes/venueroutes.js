const express = require('express');
const venueController = require('../controllers/venuecontroller');
const router = express.Router();

router.get('/:id', venueController.getVenueByID)
router.post('/newvenue', venueController.createNewVenue);
router.patch('/update/:id', venueController.updateVenue);


module.exports = router;