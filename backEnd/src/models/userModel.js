const mongoose = require('mongoose')

//creating User schema
const userSchema = new mongoose.Schema({
    name : String , 
    age: Number

});
// creating user model 
 const User =  new mongoose.model('User',userSchema)
//checking connectivity to db with a model 
const user = async()=>{
  const result = await User.insertMany([{name: 'beep' , age : 30 },{name: 'boop' , age : 30 }])
  console.log(result);

}


user();
//  module.exports = User




