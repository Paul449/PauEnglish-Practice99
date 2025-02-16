const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/EnglishDB').then(()=>{ console.log("connection successful")});

module.exports = mongoose.connection;