const express = require("express");
const User = require("../models/user");
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



// Profile
const profile = asynHandler(async (req, res) => {
  // find the logged in user
  const user = await User.findById(req.user._id);
  try {
    if (user) {
      console.log(user);
      return  res.status(200).json({user});}
    return res.status(404).send({status:'error', user:false});
   
  } catch (err) {
    console.log(err);
  }
});



//create user
const createUser = async (req, res) => {
  var user = req.body;
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

module.exports = {
  allUsers,
  userById,
  createUser,
  login,
  profile,
};
