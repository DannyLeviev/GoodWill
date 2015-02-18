var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./controllers/routes/index');

var app = express();

//set a favicon
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
    app.use(logger('dev'));
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//This is a work around, TBD: take the pics path from DB !!!
app.locals.userPicPathObj = {
    'i111111' : 'images/Single_Mother.jpg',
    'i222222' : 'images/Nursing_Home_Manager.jpg',
    'i333333' : 'images/Director_of_Soup_Kitchen.jpg',
    'i444444' : 'images/Neighborhood_Social_Activist.jpg',
    'i555555' : 'images/Single_Mother.jpg',
    'i666666' : 'images/Social_Worker_Hadera.jpg',
    'i777777' : 'images/Social_Worker_Raanana.jpg',
    'i888888' : 'images/Son_of_Holocaust_Survivor.jpg',
    'i999999' : 'images/High_School_Student.jpg',           //2,
    'i121212' : 'images/High_Tech_Worker.jpg',              //1,
    'i232323' : 'images/Scholarship_Student_M.jpg',
    'i343434' : 'images/Scholarship_Student_W.jpg',
    'i454545' : 'images/Young_Lawyer_Wmn.jpg',
    'i052846' : 'images/DannyLeviev.JPG'};




module.exports = app;
