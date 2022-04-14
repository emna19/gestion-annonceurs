const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')

router.get('/', UserController.allUsers)
  
router.get('/:id', UserController.userById)
  
router.post('/', UserController.createUser);
//adding login api 
router.post('/login',async(req,res) => {
    
       const user= await User.findOne({
            email : req.body.email,
            password : req.body.password,
        })

        if (user) {
          return  res.status(200).send({status:'ok' , user:true});
        }else{
            res.status(404).send({status:'error', user:false});
        }
  })

module.exports = router;