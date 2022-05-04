const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const AnnonceController = require('../controllers/annonceController');

router.get('/', AnnonceController.allAnnonces);

router.get('/:id', AnnonceController.annonceById)

// router.post('/', authMiddleware , AnnonceController.createAnnonce);

module.exports = router;