var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema({
							   email: 'string',
							   password: 'string',
							   name: 'string'});


module.exports = mongoose.model('goodWill', usersSchema);