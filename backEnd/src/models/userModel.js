const mongoose = require('mongoose')

//creating User
const userSchema = new mongoose.Schema({
    name : String , 
    age: Number

});

 const User =  new mongoose.model('User',userSchema)
//  module.exports = User

const user = async()=>{
  const result = await User.insertMany([{name: 'beep' , age : 30 },{name: 'boop' , age : 30 }])
  console.log(result);

}


user();



