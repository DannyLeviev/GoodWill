var mongoose = require('mongoose');


//Connection to the db on Azure
//mongoose.connect('mongodb://MyMongoLab:WmwLeRm2FaD_YmuaCTB63HGJC6.UHImV4bXFHy1klog-@ds062797.mongolab.com:62797/MyMongoLab');// My DB on Azure

//Connection to the local db
mongoose.connect('mongodb://localhost/myTestDB');// My local DB

module.exports = mongoose.connection;
