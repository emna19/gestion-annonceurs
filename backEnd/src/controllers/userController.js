
const User = require("../models/user");
const expressAsyncHandler = require('express-async-handler')
const asynHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const allUsers = async (req, res) => {
  try {
    await User.find({}).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    console.log(err);
    res.status(404).send(`doesn't exist`);
  }
};

const userById = async (req, res) => {
  try {
    await User.findById({ _id: req.params.id }).then((result) => {
      res.status(200).send(result);
    });
  } catch (err) {
    console.log(err);
    res.status(404).send("Not Found");
  }
};



//adding login api find by email and password
const login = asynHandler(async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) return res.status(200).json({ 
      id: user._id,
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
      photo: user.photo,  
      token : generateToken(user._id) ,
    });
    return res.status(404).send({ status: "error", user: false });
  } catch (err) {
    console.log(err);
    res.status(400).send(`couldn't login, Something is wrong`);
  }
});






//create user
const createUser = async (req, res) => {
  var user = req.body;
  try {
    let new_user = new User({
      id: user._id,
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
      photo: user.photo,
    });
    await new_user.save();
    res.status(201).json({ 
      name: new_user.name,
      organistaion: new_user.organistaion,
      email: new_user.email,
      password: new_user.password,
      adress: new_user.adress,
      phone: new_user.phone,
      country: new_user.country,
      city: new_user.city,
      codePostal: new_user.codePostal,
      isAdmin: new_user.isAdmin,
      taxID: new_user.taxID,
      photo: new_user.photo, 
      token : generateToken(new_user._id) ,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(`couldn't be created, Something is wrong`);
  }
};



// Profile
const profile = asynHandler(async (req, res) => {
  // find the logged in user
  const user = await User.findById(req.user._id).populate('annonces');
  try {
    if (user) {
      console.log(user);
      return  res.status(200).json({user});}
    return res.status(404).send({status:'error', user:false});
   
  } catch (err) {
    console.log(err);
  }
  
});

// update user profile 

  const updateProfile = expressAsyncHandler(async (req, res) => {
    //Find the login user by ID
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        token: generateToken(updatedUser._id),
      });
    }
  })




module.exports = {
  allUsers,
  userById,
  createUser,
  login,
  profile,
  updateProfile,
};
