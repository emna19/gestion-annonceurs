const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/gestion-annonceurs", (err, done) => {
    if (err) console.log(err);
    if (done) console.log('base de données connecté avec succes !');
});