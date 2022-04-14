const Annonce = require('../models/annonce');

const allAnnonces = async (req,res) => {
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
}

const annonceById = async(req,res) => {
    try {
        await Annonce.findById({_id:req.params.id}).
        then(result => {
          res.status(200).send(result);
        })
    }
    catch (err) {
        res.status(404).send(`annonce not found`, err);
    }
}

const createAnnonce = async(req,res) => {
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
}

module.exports = {
    allAnnonces,
    annonceById,
    createAnnonce
}