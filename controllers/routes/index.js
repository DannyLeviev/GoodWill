var express = require('express');
var router = express.Router();
//for authentication settings
var passport = require('../authentication');
//for server-side storage of user IDs
var expressSession = require('express-session'); 
//establishing the connection to mongoDB.
var db = require('../db_connection'); 
//use the Utile file
var utils = require('../utils');


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
	if(req.user && req.user.name){
		console.log("GW Log: " + req.user.name + " is still authenticated.");
		res.redirect('select');
	}
	//else load the login page
    else {
    		utils.renderLoginView(req, res);
    }
});

//Will be called on submit of the login form.
router.post('/', passport.authenticate('local', {
	failureRedirect: 'relogin',
	successRedirect: 'select'
}));


router.get('/relogin', function(req, res){
	req.flash('error', 'Incorrect username or password, please try again !');
	req.flash('info', 'this is info !!!');
	res.redirect('/');
});


router.get('/select', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.name){
		console.log('GW Log: ' + req.user.name + ' has entered the Select page.');
		utils.renderSelectView(req, res);
	}
	//else load the login page
    else utils.renderLoginView(req, res);
});


//Will be called if the user authenticated.
router.get('/hitMe', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.name){
		console.log('GW Log: ' + req.user.name + ' has entered the Hit Me page.'); 
		res.render('hitMe');
	}
	//else load the login page
    else utils.renderLoginView(req, res);
});



router.get('/askHelp', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.name){
		console.log('GW Log: ' + req.user.name + ' has entered the Ask Help page.');
		utils.renderAskHelpView(req, res);
	}
	//else load the login page
    else utils.renderLoginView(req, res);
});


//Will be called on submit of the Send button of the Create New Feed form.
router.post('/askHelp', function(req, res){
	utils.saveNewFeed(req, res);
});


router.get('/yourProfile', function(req, res) {
	//check if the user is still authenticated (no session timeout)
	if(req.user && req.user.name){
		console.log('GW Log: ' + req.user.name + ' has entered the Your Profile page.');
		res.render('yourProfile');
	}
	//else load the login page
    else utils.renderLoginView(req, res);
});


module.exports = router;
