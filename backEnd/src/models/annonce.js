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
    },
    audience: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Audience'
    },
    clickUrl:{
        type:String,
        required:true
    },
    sourceUrl:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    valid:{
        type:Date,
        required:false
    }
},{timestamps: true});//timestamp for updated at and created at

const Annonce = mongoose.model("annonce", annonceSchema);
module.exports = Annonce;