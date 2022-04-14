const Audience = require('../models/audience');

const allAudiences = async (req,res) => {
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
}

const audienceById = async(req,res) => {
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
}

const createAudience = async(req,res) => {
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
}

module.exports = {
    allAudiences,
    audienceById,
    createAudience
}