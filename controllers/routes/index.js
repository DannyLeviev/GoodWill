var express = require('express');
var router = express.Router();
//for authentication settings
var passport = require('../authentication');
//for server-side storage of user IDs
var expressSession = require('express-session'); 
//establishing the connection to mongoDB.
var db = require('../db_connection'); 


router.use(expressSession({
    secret: process.env.SESSION_SECRET || 'Adel',
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());

//Starting poin.
router.get('/', function(req, res) {
	//check if the user is already logged-in
	if(req.user && req.user.username){
		console.log('My log: ' + GLOBAL.userName + ' is still logged in.');
		res.redirect('hitMe');
	}
	//else load the login page
    else res.render('login');
});

//Will be called on submit of the login form.
router.post('/', passport.authenticate('local', {
	failureRedirect: '/',
	successRedirect: 'hitMe'
}));

//Will be called if the user authenticated.
router.get('/hitMe', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.username){
		GLOBAL.userName = req.user.username;
		console.log('My log: ' + GLOBAL.userName + ' has entered the Hit Me page.');
		res.render('hitMe');
	}
	//else load the login page
    else res.render('login');
});


router.get('/select', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.username){
		GLOBAL.userName = req.user.username;
		console.log('My log: ' + GLOBAL.userName + ' has entered the Select page.');
		res.render('select');
	}
	//else load the login page
    else res.render('login');
});


router.get('/askHelp', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.username){
		GLOBAL.userName = req.user.username;
		console.log('My log: ' + GLOBAL.userName + ' has entered the Ask Help page.');
		res.render('askHelp');
	}
	//else load the login page
    else res.render('login');
});


router.get('/yourProfile', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.username){
		GLOBAL.userName = req.user.username;
		console.log('My log: ' + GLOBAL.userName + ' has entered the Your Profile page.');
		res.render('yourProfile');
	}
	//else load the login page
    else res.render('login');
});

module.exports = router;
