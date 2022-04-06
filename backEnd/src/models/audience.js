const mongoose = require('mongoose')

const audienceSchema = mongoose.Schema({
    name : {
        type: String , 
        required : true 
    },
    minAge : {
        type: Number , 
        required : true
    },
    maxAge : {
        type: Number , 
        required : true
    },
    countries : {
        type: [String] , 
        required : true
    },
    keywords : {
        type: [String] , 
        required : true
    },
    videoIDs : {
        type: [Number] , 
        required : true
    },
    
    //timestamp for updated at and created at
},{timestamps: true})

const Audience = mongoose.model('audience',audienceSchema)
module.exports = Audience