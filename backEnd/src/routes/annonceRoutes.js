const express = require('express');
const router = express.Router();
const AnnonceController = require('../controllers/annonceController');

router.get('/', AnnonceController.allAnnonces);

router.get('/:id', AnnonceController.annonceById)

router.post('/', AnnonceController.createAnnonce);

module.exports = router;