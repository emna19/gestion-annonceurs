const express = require('express');
const router = express.Router();
const ImpressionController = require('../controllers/impressionController');

//create audience 
router.post('/', ImpressionController.createImpression)
//get all impressions
router.get('/', ImpressionController.allImpressions)
// //get impression by id 
router.get('/:id', ImpressionController.impressionById)

module.exports = router;