const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }
    //missing annonce and something else
},{timestamps: true});//timestamp for updated at and created at

const Transaction = mongoose.model("transaction", transactionSchema);
module.exports = Transaction;