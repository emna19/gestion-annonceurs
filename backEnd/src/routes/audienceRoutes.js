const express = require('express');
const router = express.Router();
const AudienceController = require('../controllers/audienceController');

//create audience
router.post('/', AudienceController.createAudience);
  //get all types of audience
router.get('/', AudienceController.allAudiences);
  //get audience by id 
router.get('/:id', AudienceController.audienceById)

module.exports = router;