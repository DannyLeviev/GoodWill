var express = require('express');
var router = express.Router();
//for authentication settings
var passport = require('../auth');
//for server-side storage of user IDs
var expressSession = require('express-session'); 
//establishing the connection to mongoDB.
var db = require('../db/connection'); 


router.use(expressSession({
    secret: process.env.SESSION_SECRET || 'Adel',
    resave: false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());

//Starting poin.
router.get('/', function(req, res) {
	if(req.user && req.user.username) res.render('user', {user: req.user.username});
    else res.render('login');
});

//Will be called on submit of the login form.
router.post('/', passport.authenticate('local', {
	failureRedirect: '/',
	successRedirect: 'user'
}));

//Will be called if the user authenticated.
router.get('/user', function(req, res) {
	console.log('My log: ' + req.user.username + ' has entered his page.');
	res.render('user', {user: req.user.username});
});

module.exports = router;
