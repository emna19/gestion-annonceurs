require('./src/db/mongoose')
const express = require('express')
// const mongoose = require('./src/db/mongoose')
const User = require("./src/models/user")
const Transaction = require("./src/models/transaction")
const Annonce = require("./src/models/annonce")
const Audience = require('./src/models/audience')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.get('/api', function (req, res) {
  res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
})


//user api
app.get('/users', async (req,res) => {
  try {
      await User.find({})
      .then(result => {
              res.send(result);
      })
  }
  catch (err) {
      console.log(err)
  }
});

app.get('/user/:id', async(req,res) => {
  try {
      await User.findById({_id:req.params.id}).
      then(result => {
        res.send(result);
      })
  }
  catch (err) {
      res.send(err);
  }
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


//transaction api
app.get('/transactions', async (req,res) => {
  try {
      await Transaction.find({})
      .then(result => {
              res.send(result);
      })
  }
  catch (err) {
      console.log(err)
  }
});

app.get('/transaction/:id', async(req,res) => {
  try {
      await Transaction.findById({_id:req.params.id}).
      then(result => {
        res.send(result);
      })
  }
  catch (err) {
      res.send(err);
  }
})

app.post('/add_transaction', async(req,res) => {
  try {
      let new_transaction = new Transaction({
        date: req.body.date,
        User: req.body.User,
        });
      await new_transaction.save();
      res.send('save effectué par succés!');
  }
  catch (err) {
      console.log(err);
  }
});


//annonce api
app.get('/annonces', async (req,res) => {
  try {
      await Annonce.find({})
      .then(result => {
              res.send(result);
      })
  }
  catch (err) {
      console.log(err)
  }
});

app.get('/annonce/:id', async(req,res) => {
  try {
      await Annonce.findById({_id:req.params.id}).
      then(result => {
        res.send(result);
      })
  }
  catch (err) {
      res.send(err);
  }
})

app.post('/add_annonce', async(req,res) => {
  try {
      let new_annonce = new Annonce({
        name: req.body.name,
        startDate: req.body.startDate,
        endtDate: req.body.endtDate,
        sector: req.body.sector,
        budget: req.body.budget,
        User: req.body.User,
        });
      await new_annonce.save();
      res.send('save effectué par succés!');
  }
  catch (err) {
      console.log(err);
  }
});


/// Audience API 
  //create audience 
  app.post('/add_audience', async(req,res) => {
    var audience = req.body ;
    try {
        let new_audience = new Audience({
          
          name: audience.name,
          minAge : audience.minAge, 
          maxAge : audience.maxAge,
          countries : audience.countries,
          keywords : audience.keywords,
          videoIDs : audience.videoIDs

        });
        await new_audience.save();
        res.status(201).send('a type of audience is created!');
    }
    catch (err) {
        console.log(`Something is wrong !!`,err);
        res.status(400).send('creation failed')
    }
  });
  //get all types of audience
  app.get('/audience', async (req,res) => {
    try {
        await Audience.find({})
        .then(result => {
                res.status(200).send(result);
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).send("Audience not found")
    }
  });
  //get audience by id 
  app.get('/audience/:id', async(req,res) => {
    try {
        await Audience.findById({_id:req.params.id}).
        then(result => {
          res.status(200).send(result);
        })
    }
    catch (err) {
      console.log(err)
      res.status(404).send("Audience not found")
    }
  })



  






app.listen(5000, () => console.log("Server started on port 5000"))