var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema({
							   userid: 'string',
							   password: 'string',
							   username: 'string'});


module.exports = mongoose.model('users', usersSchema);