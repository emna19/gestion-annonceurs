const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    organistaion: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    codePostal: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    taxID: {
        type: Number,
        required:true
    },
    photo:{
        type : String,
        required:false
    }
    //missing photo and one other
},{timestamps: true});//timestamp for updated at and created at

const User = mongoose.model("user", userSchema);
module.exports = User;