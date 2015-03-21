var UsersContent = require('../models/UserContent');
var mockData = require('./mockData');



var renderSelectView = function(req, res){
	 UsersContent.find({}, function(err, appDataFromDB){
         	if(err) console.log(err);
        	else {
                //Find the profile image of the loged-in user - if needed
                if(!GLOBAL.prfImagePath){
        		    var numOfUsers = appDataFromDB.length;
        		    for(var i = 0; i < numOfUsers; i++){
        		        if(appDataFromDB[i].name == req.user.name){
                            if(appDataFromDB[i].prfImagePath)
        			           GLOBAL.prfImagePath = appDataFromDB[i].prfImagePath;
                            else GLOBAL.prfImagePath = 'images/defaultPersonImage.png';
        			        break;
        			    }
        		    }
                }
        		res.render('select', { appData: appDataFromDB }); 
        	}
    	}
    );	
};


var renderLoginView = function(req, res){
    res.render('login', {messages: getFlashMessagesFromReq(req)});
};


var renderAskHelpView = function(req, res){
    res.render('askHelp', {messages: getFlashMessagesFromReq(req)});
};


var getFlashMessagesFromReq = function(req){
    return {
        errorsArr: req.flash('error'),
        worningsArr: req.flash('worning'),
        infosArr: req.flash('info')
    }
};

var saveNewFeed = function(req, res){
	console.log(req.body);
    //format the date
    var givenDateArr = req.body.expirationDate.split('-');
    date = givenDateArr[2] + '.' + givenDateArr[1] + '.' + givenDateArr[0];
	new UsersContent({
		creator : req.user.username,    
		expirationDate : req.body.expirationDate,
		takenBy : req.body.assignedTo,
		isDone : 'false',
		title : req.body.title,
		text : req.body.text,
		contact : req.body.phoneNumber
	}).save(saveNewFeedCB); 
};


var saveNewFeedCB = function(err, doc, req, res){
	if(err) res.render('error', {message: 'The Save New Feed was ended with an error!!!', error: err});
	else renderSelectView(null, this);
    //else console.log(this);
};


module.exports.renderSelectView = renderSelectView;
module.exports.renderLoginView = renderLoginView;
module.exports.renderAskHelpView = renderAskHelpView;
module.exports.saveNewFeed = saveNewFeed;