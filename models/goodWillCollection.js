var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var commentsSchema = new Schema({
									commenterName: String,
									text: String
								});


var feedsSchema = new Schema({
								title: String,
								text: String,
								expDate: String,
								assignedTo: String,
								status: String,
								comments: [commentsSchema]
							});


var goodWillSchema = new Schema({
							   		email: String,
									name: String,
									password: String,
									prfImagePath: String,
									contact: String,
									feeds: [feedsSchema]
								});


module.exports = mongoose.model('goodWill', goodWillSchema);