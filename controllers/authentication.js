var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UsersContents = require('../models/UserContent');



passport.use(new LocalStrategy(
	 function(username, password, done){ 
	 	UsersContents.findOne({email: username}, function(err, user){
	 		if(err){
	 			console.log(err);
	 			res.status(500).json({status: 'failure'});
	 		}
	 		else{
	 			if(user && user.password == password){
	 				console.log('GW log: Successful login - ' + user.name + ' was authenticated.');
	 				GLOBAL.userName = user.name;     //Exposing for other Views
	 				GLOBAL.userEmail = user.email;   //Exposing for other Views
	 				return done(null, {id: user.email, name: user.name});
	 			}
	 			return done(null, false);
	 		}
	 	});
	 }
));


/*in our case user will be called with the properties: userid and username
  as returned from LocalStrategy function.*/
passport.serializeUser(function(user, done){
	done(null, user.name);
});


passport.deserializeUser(function(name, done){
	done(null, {name: name});
});


module.exports = passport;