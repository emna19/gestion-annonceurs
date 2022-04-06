const mongoose = require('./src/db/mongoose')
const express = require('express')
const User = require('./src/models/userModel')

const app = express()




// app.get('/api', function (req, res) {
//   res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
// })

app.listen(5000, () => console.log("Server started on port 5000"))