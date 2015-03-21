var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userContentSchema = new mongoose.Schema({
							   			email: String,
										name: String,
										password: String,
										prfImagePath: String,
										contact: String,
										feeds: [{
											title: String,
											text: String,
											expDate: String,
											assignedTo: String,
											status: String,
											comments: [{
												commenterName: String,
												text: String
											}]
										}]
							   		});


module.exports = mongoose.model('Users_Content', userContentSchema);