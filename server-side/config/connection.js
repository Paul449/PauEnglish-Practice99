const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EnglishDB').then(()=>{ console.log("connection successful")});

module.exports = mongoose.connection;