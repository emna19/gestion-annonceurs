




var mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true , UseUnifiedTopology:true} , (error)=>{
    if (!error) {
        console.log(`DATABASE CONNECTED`)
    } else {
        console.log(`DATABASE NOT CONNECTED` , error)
    }
})



    
    


