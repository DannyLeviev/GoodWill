var goodWillModel = require('../models/feeds');
var mockData = require('./mockData');



var renderSelectView = function(req, res){
	 goodWillModel.find({}, function(err, appDataFromDB){
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


var saveNewFeed = function(req, res){
	//console.log(req.body);

	new feedsModel({
		creator : req.user.username,    //TBD: Check if it should be user name or user ID !!!!
		expirationDate : req.body.expirationDate,
		takenBy : req.body.assignedTo,
		isDone : 'false',
		title : req.body.title,
		text : req.body.text,
		contact : req.body.phoneNumber
	}).save(function (err, doc) {res.render('hitMe')}); //saveNewFeedCB);
};


var saveNewFeedCB = function(err, doc){
	if(err) res.render('error', {message: 'The Save New Feed was ended with an error!!!', error: err});
	else res.render('askHelp');
};


module.exports.renderSelectView = renderSelectView;
module.exports.saveNewFeed = saveNewFeed;