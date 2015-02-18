var feedsModel = require('../models/feeds');

var renderSelectView = function(res){
	feedsModel.find({}, function(err, allFeeds){
        	if(err) console.log(err);
        	else res.render('select', {feeds: allFeeds}); 
    	});	
};

var renderUsersFeeds = function(res, userId){
	var usersFeeds = {asCreator: [], asTaker: []};
	getUsersFeedsAsCreator(res, userId, usersFeeds);
};
	

var getUsersFeedsAsCreator = function(res, userId, usersFeeds){
	feedsModel.find({creator: userId},function(err, createdFeeds){
		if(err) console.log(err);
		else{ 
			usersFeeds.asCreator = createdFeeds;
			getUsersFeedsAsTaker(res, userId, usersFeeds);
		}
	});
};


var getUsersFeedsAsTaker = function(res, userId, usersFeeds){
	feedsModel.find({takenBy: userId},function(err, takedFeeds){
		if(err) console.log(err);
		else{
			usersFeeds.asTaker = takedFeeds;
			console.log(usersFeeds);
			res.render('select', {feeds: usersFeeds.asCreator}); //Chang this to pass also the 'asTaker' feeds.
		}
	});
};



module.exports.renderSelectView = renderSelectView;
module.exports.renderUsersFeeds = renderUsersFeeds;