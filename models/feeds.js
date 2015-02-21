var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var feedsSchema = new Schema({
							   creator:"string",
							   expirationDate:"string",
						       takenBy:"string",
						       isDone:"string",
						       title:"string",
						       text:"string",
						       contact:"string"});


module.exports = mongoose.model('feeds', feedsSchema);