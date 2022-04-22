const mongoose = require("mongoose");

const annonceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: false,
    },
    endtDate: {
        type: Date,
        required: false,
    },
    sector: {
        type: String,
        required: false,
    },
    budget: {
        type: Number,
        required: false,
    },
    audience: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Audience',
        required: false,
    },
    clickUrl:{
        type:String,
        required:false
    },
    sourceUrl:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    },
    isValid:{
        type:Date,
        required:false
    },
    User: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' 
    }
},{timestamps: true});//timestamp for updated at and created at




const Annonce = mongoose.model("annonce", annonceSchema);
module.exports = Annonce;