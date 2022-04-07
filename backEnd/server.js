require('./src/db/mongoose')
const express = require('express')
// const mongoose = require('./src/db/mongoose')
const User = require("./src/models/user")
const Transaction = require("./src/models/transaction")
const Annonce = require("./src/models/annonce")
const Audience = require('./src/models/audience')
const Impression = require('./src/models/impression')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

  ///testing backend and frontend connectivity
// app.get('/api', function (req, res) {
//   res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
// })


//user api
app.get('/users', async (req,res) => {
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
});

app.get('/user/:id', async(req,res) => {
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
})

app.post('/add_user', async(req,res) => {
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
});


//transaction api
app.get('/transactions', async (req,res) => {
  try {
      await Transaction.find({})
      .then(result => {
              res.status(200).send(result);
      })
  }
  catch (err) {
      console.log(err)
      res.status(404).send(`doesn't exist`)
  }
});

app.get('/transaction/:id', async(req,res) => {
  try {
      await Transaction.findById({_id:req.params.id}).
      then(result => {
        res.status(200).send(result);
      })
  }
  catch (err) {
    console.log(err);
      res.status(404).send(`doesn't exist`);
  }
})

app.post('/add_transaction', async(req,res) => {
  var transaction = req.body
  try {
      let new_transaction = new Transaction({
        date: transaction.date,
        User: transaction.User,
        annonce : transaction.annonce,
        amount : transaction.amount
        });
      await new_transaction.save();
      res.status(201).send('save effectué par succés!');
  }
  catch (err) {
      console.log(err);
      res.status(400).send(`couldn't be created`)
  }
});


//annonce api
app.get('/annonces', async (req,res) => {
  try {
      await Annonce.find({})
      .then(result => {
              res.status(200).send(result);
      })
  }
  catch (err) {
      console.log(err)
      res.status(404).res(`annonces doesn't exist`)
  }
});

app.get('/annonce/:id', async(req,res) => {
  try {
      await Annonce.findById({_id:req.params.id}).
      then(result => {
        res.status(200).send(result);
      })
  }
  catch (err) {
      res.status(404).send(`annonce not found`, err);
  }
})

app.post('/add_annonce', async(req,res) => {
    var annonce= req.body
  try {
      let new_annonce = new Annonce({
        name: annonce.name,
        startDate: annonce.startDate,
        endtDate: annonce.endtDate,
        sector: annonce.sector,
        budget: annonce.budget,
        User: annonce.User,
        audience: annonce.audience,
        clickUrl:annonce.clickUrl,
        sourceUrl:annonce.sourceUrl,
        type : annonce.type,
        isValid : annonce.valid 
        });
      await new_annonce.save();
      res.status(201).send('save effectué par succés!');
  }
  catch (err) {
      console.log(err);
      res.status(400).send("creation failed")
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
  app.get('/audiences', async (req,res) => {
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

  /// Impression API
    //create audience 
  app.post('/add_impression', async(req,res) => {
    var impression = req.body ;
    try {
        let new_impression = new Impression({
          
          date: impression.date,
          annonce : impression.annonce, 
          clientID : impression.clientID,
          country : impression.country,
          age : impression.age
          

        });
        await new_impression.save();
        res.status(201).send('the impression is created!');
    }
    catch (err) {
        console.log(`Something is wrong !!`,err);
        res.status(400).send('creation failed')
    }
  });
  //get all impressions
  app.get('/impressions', async (req,res) => {
    try {
        await Impression.find({})
        .then(result => {
                res.status(200).send(result);
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).send("Impressions not found")
    }
  });
  // //get impression by id 
  app.get('/impression/:id', async(req,res) => {
    try {
        await Impression.findById({_id:req.params.id}).
        then(result => {
          res.status(200).send(result);
        })
    }
    catch (err) {
      console.log(err)
      res.status(404).send("Impression not found")
    }
  })





  






app.listen(5000, () => console.log("Server started on port 5000"))