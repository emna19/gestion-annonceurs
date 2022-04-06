const express = require('express')
const mongoose = require('mongoose')
const User = require("./models/user")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.get('/api', function (req, res) {
  res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
})

app.post('/add_user', async(req,res) => {
  try {
      let new_user = new User({
        name: req.body.name,
        organistaion: req.body.organistaion,
        email: req.body.email,
        password: req.body.password,
        adress: req.body.adress,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        codePostal: req.body.codePostal,
        isAdmin: req.body.isAdmin
      });
      await new_user.save();
      res.send('save effectué par succés!');
  }
  catch (err) {
      console.log(err);
  }
});

mongoose.connect("mongodb://localhost:27017/gestion-annonceurs", (err, done) => {
    if (err) console.log(err);
    if (done) console.log('base de données connecté avec succes !');
});

app.listen(5000, () => console.log("Server started on port 5000"))