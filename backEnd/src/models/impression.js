const mongoose = require ('mongoose')

const impressionSchema = mongoose.Schema({

    date:{
        type:Date,
        required :true
    },
    annonce:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Annonce'
    },
    clientID:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required :true
    },
    age:{
        type:Number,
        required :true
    },

},{timestamps: true})

const Impression = mongoose.model('impression',impressionSchema)
module.exports=Impression