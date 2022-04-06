const mongoose = require("mongoose");

const annonceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endtDate: {
        type: Date,
        required: true,
    },
    sector: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    User: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' 
    }
    //missing audience
},{timestamps: true});//timestamp for updated at and created at

const Annonce = mongoose.model("annonce", annonceSchema);
module.exports = Annonce;