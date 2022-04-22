const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const UserController = require('../controllers/userController');


//adding profile api 
router.get('/profile', authMiddleware , UserController.profile )

router.get('/',  UserController.allUsers)
  
router.get('/:id', UserController.userById)
  
router.post('/', UserController.createUser);
//adding login api  route
router.post('/login',UserController.login)


module.exports = router;