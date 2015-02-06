var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var usersModel = require('./models/users');


passport.use(new LocalStrategy(
	 function(username, password, done){
	 	usersModel.find({userid: username}, function(err, users){
	 		if(err){
	 			console.log(err);
	 			res.status(500).json({status: 'failure'});
	 		} 
	 		else{
	 			if(users[0] && users[0].password == password){
	 				console.log('My log: ' + users[0].username + ' just loged in.');
	 				return done(null, {userid: users[0].userid, username: users[0].username});
	 			}
	 			return done(null, false);
	 		}
	 	});
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