var feedsModel = require('../models/feeds');

var getAllFeeds = function(res){
	feedsModel.find({}, function(err, allFeeds){
		if(err) console.log(err);
		else renderSelectPage(res, allFeeds);  
	})
};


var renderSelectPage = function(res, allFeeds){
	//console.log(allFeeds);
	res.render('select',{allFeedsCollection: allFeeds});
};


var getUsersFeeds = function(userId){
	feedsModel.find({userid : userId},function(err, allFeeds){
		if(err) console.log(err);
		else{
			var usersFeeds = {
				asCreator : [],
				asTaker : []
			};
			for(i=0;i<allFeeds.lenght;i++){
				if(allFeeds[i].creator==userId)
					usersFeeds.asCreator.push(allFeeds[i]);
			}
			for(i=0;i<allFeeds.lenght;i++){
				if(allFeeds[i].takenBy==userId)
					usersFeeds.asTaker.push(allFeeds[i]);
			}
			return usersFeeds;
		}
	});
};

module.exports.getAllFeeds = getAllFeeds;
module.exports.getUsersFeeds = getUsersFeeds;