const User = require("../models/user")

const allUsers= async (req,res) => {
    try {
        await User.find({})
        .then(result => {
                res.status(200).send(result);
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).send(`doesn't exist`)
    }
  }

  const userById = async(req,res) => {
    try {
        await User.findById({_id:req.params.id}).
        then(result => {
          res.status(200).send(result);
        })
    }
    catch (err) {
      console.log(err);
        res.status(404).send('Not Found');
    }
  }
  //adding login api find by email and password
  const login = async(req,res) => {
    try{
    const user= await User.findOne({
         email : req.body.email,
         password : req.body.password,
     })
    
      if (user) return res.status(200).send({status:'ok' , user:true});
      return res.status(404).send({status:'error', user:false});
    } catch (err) {
        console.log(err);
        res.status(400).send(`couldn't be created, Something is wrong`);
  }
}

  const createUser = async(req,res) => {
    var user = req.body
    try {
        let new_user = new User({
            name: user.name,
            organistaion: user.organistaion,
            email: user.email,
            password: user.password,
            adress: user.adress,
            phone: user.phone,
            country: user.country,
            city: user.city,
            codePostal: user.codePostal,
            isAdmin: user.isAdmin,
            taxID: user.taxID,
            photo:user.photo
        });
        await new_user.save();
        res.status(201).send('save effectué par succés!');
    }
    catch (err) {
        console.log(err);
        res.status(400).send(`couldn't be created, Something is wrong`);
  }
}

  module.exports = {
    allUsers,
    userById,
    createUser,
    login
  }