var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var goodWillSchema = require('../models/goodWillCollection');

var utils = require('./utils');    //TBD: Delete this after the DB access issue will be solved!!!


passport.use(new LocalStrategy(
	 function(username, password, done){
	 	// goodWillSchema.find({}, function(err, users){ 
	 	// 	if(err){
	 	// 		console.log(err);
	 	// 		res.status(500).json({status: 'failure'});
	 	// 	} 
	 	// 	else{
	 	// 		if(users[0] && users[0].password == password){
	 	// 			console.log('My log: ' + users[0].username + ' authenticated.');
	 	// 			return done(null, {userid: users[0].userid, username: users[0].username});
	 	// 		}
	 	// 	return done(null, false);
	 	// 	}
	 	// });
		var userObj = {};
		for(i = 0; i < utils.goodWillArr.length; i++){
			if(utils.goodWillArr[i].email == username){
				GLOBAL.userName = utils.goodWillArr[i].name;
				GLOBAL.userEmail = utils.goodWillArr[i].email;
				GLOBAL.userPicPath = utils.goodWillArr[i].prfImagePath;
				userObj = utils.goodWillArr[i];
				console.log('My log: UserId = ' + utils.goodWillArr[i].email + 'userName is: ' + utils.goodWillArr[i].name + ' is authenticated.');
	 	 		return done(null, {userid: utils.goodWillArr[i].email, username: utils.goodWillArr[i].name});
	 	 	}
		}
		console.log('My log: Login Failed !!!');
		return done(null, false);
	 }
));

/*in our case user will be called with the properties: userid and username
  as returned from LocalStrategy function.*/
passport.serializeUser(function(user, done){
	done(null, user.username);
});

passport.deserializeUser(function(username, done){
	done(null, {username: username});
});

module.exports = passport;