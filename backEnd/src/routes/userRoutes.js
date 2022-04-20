const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const authMiddleware = require('../middlewares/authMiddleware');
const asynHandler = require('express-async-handler');



router.get('/', UserController.allUsers)
  
router.get('/:id', UserController.userById)
  
router.post('/', UserController.createUser);
//adding login api  route
router.post('/login',UserController.login)
//adding profile api 
router.get('/profile', authMiddleware , UserController.profile  )

module.exports = router;