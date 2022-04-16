const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')

router.get('/', UserController.allUsers)
  
router.get('/:id', UserController.userById)
  
router.post('/', UserController.createUser);
//adding login api  route
router.post('/login',UserController.login)
//adding profile api 
router.get('/profile', UserController.profile)

module.exports = router;