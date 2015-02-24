var goodWillModel = require('../models/goodWillCollection');


var renderSelectView = function(res){
	// goodWillModel.find({}, function(err, appDataFromDB){
 //        	if(err) console.log(err);
 //        	else res.render('select', {appData: appDataFromDB}); 
 //    	});	
	res.render('select', {appData: goodWillArr});
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
			res.render('select', {feeds: usersFeeds.asCreator}); //TBD: Chang this to pass also the 'asTaker' feeds.
		}
	});
};


var saveNewFeed = function(req, res){
	//console.log(req.body);
	new feedsModel({
		creator : req.user.username,                            //TBD: Check if it should be user name or user ID !!!!
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


var goodWillArr = [{
	"email": "david@gmail.com",
	"name": "David Zaken",
	"password": "abc123",
	"prfImagePath": "images/Nursing_Home_Manager.jpg",
	"contact": "03-84592156",
	"feeds": [
		{
			"title": "מארגן חידון טריוויה",
			"text": "אנו בבית אבות אביבים עושים את הכל למען הקשישים החוסים. ועדיין יש דבר אחד שהם ישמחו לקבל דווקא מאנשים צעירים. הקשישים צמאים לחברה, הפעלות ורוח של שימחה. לכן נשמח אם תתרמו כשעה וחצי לפעילות טריוויה.      השאלונים, המקרן, הרמקול והקהל כבר מוכנים !!!",
			"expDate": "26.06.2015",
			"assignedTo": "Shaham Katan",
			"status": "",
			"comments": [
				{
					"commenterName": "Shaham Katan",
					"text": "הי, אשמח להעביר את הפעילות הזו כחלק ממחויבות אישית שלי בתיכון."
				}
			]
		}
	]
},
{
	"email": "rinat@gmail.com",
	"name": "Rinat Levad",
	"password": "abc123",
	"prfImagePath": "images/Single_Mother.jpg",
	"contact": "054-6548965",
	"feeds": [
		{
			"title": "עזרה בלימודים לתמיד כיתה ד",
			"text": "שלום חברים אני רינת אם חד הורית, אשמח לקבל את עזרתכם בהכנה למבחן בחשבון של הבן שלי. קוראים לו שלומי, הוא בכיתה ד והוא ממש חמוד. תודה מראש, נתראה בקרוב.",
			"expDate": "11.04.2015",
			"assignedTo": "Ben Melumad",
			"status": "free",
			"comments": []
		}
	]
},
{
	"email": "manuel@gmail.com",
	"name": "Manuel Feeder",
	"password": "abc123",
	"prfImagePath": "images/Director_of_Soup_Kitchen.jpg",
	"contact": "06-6135489",
	"feeds": [
		{
			"title": "אריזת מזון בבית תמחוי",
			"text": "בישראל מתגוררים עשרות אלפי נזקקים, שאין באפשרותם לממן צרכי מחייתם הבסיסיים. חובתנו להבטיח שלא יהלכו ברחובותינו אנשים רעבים.למטרה זו הקימה עמותת 'לשובע' בשנת 1990 מסעדה לנזקקי חדרה, הנמצאת בלב אזור המצוקה העיקרי - שכונת שפירא, בסמיכות לתחנה המרכזית, אזור בו מתגוררים אלפי נזקקים, רבים מהם עולים, קשישים, מובטלים ונכים. אנו צריכים אתכם לאריזת מנות חלוקה, זו פעילות של שעה וחצי שימלאו אותכם בחום, נתינה ואהבה.",
			"expDate": "26.04.2015",
			"assignedTo": "",
			"status": "",
			"comments": [
				{
					"commenterName": "Ben Melumad",
					"text": "ממליץ בחום. במיוחד אם מגיעים עם ילדים. הם לא היו מודעים שיש אנשים שאין להם אוכל בבית."
				}
			]
		}
	]
},
{
	"email": "aviv@gmail.com",
	"name": "Aviv Shcuna",
	"password": "abc123",
	"prfImagePath": "images/Neighborhood_Social_Activist.jpg",
	"contact": "",
	"feeds": [
		{
			"title": "ביקור משפחות עולים חדשים בשכונת גנים פ.ת",
			"text": "השכונה שלנו, שכונת גנים פתח תקוה קלטה לפני כשנה שבע משפחות של עולים חדשים. אנו בוועד השכונה רוצים מאוד לארגן ביקור בבית המשפחות כדי לבדוק את המצב וקשיי הקליטה, להסביר על השכונה ולהביא תמיכה בכל אופן שיזדקקו. לכן אנו נשמח אם תתלוו אלינו לעזור בתרגום  המפגש.  אם אתם דוברי רוסית, אמהרית או ספרדית תעזרו לנו לעזור לאחים שלנו!!!",
			"expDate": "13.06.2015",
			"assignedTo": "Dan Tafransky",
			"status": "",
			"comments": [
				{
					"commenterName": "Dan Tafransky",
					"text": "הי אני סטודנט דובר ספרדית, אשמח להשתתף במסגרת שעות התנדבות של מילגת אוניב."
				}
			]
		}
	]
},
{
	"email": "yogev@gmail.com",
	"name": "Yogev Ginat",
	"password": "abc123",
	"prfImagePath": "images/Son_of_Holocaust_Survivor.jpg",
	"contact": "04-8462517",
	"feeds": [
		{
			"title": "עזרה לניצול שואה בניסוח בקשת ביטול קנס",
			"text": "שלום חברים, סבי הינו ניצול שואה קשיש שמתגורר לבד בדירתו. אנו במשפחה דואגים לכל צרכיו אך אין לנו יכולת לנסח מכתב משפטי לביטול קנס של אלפי שקלים שנצברו לטענת רשות השידור על שם סבי. נשמח להפגש (שעה וחצי) לקבלת עזרה משפטי מעורך דין לניסוח מכתב הבקשה - הקפה עלינו :).",
			"expDate": "26.05.2015",
			"assignedTo": "Hashuva Meod",
			"status": "",
			"comments": [
				{
					"commenterName": "Hashuva Meod",
					"text": "יוגב שלום, אני עורכת דין בהתמחות. אשמח לסייע."
				}
			]
		}
	]
},
{
	"email": "nirit@gmail.com",
	"name": "Nirit Oved",
	"password": "abc123",
	"prfImagePath": "images/Social_Worker_Hadera.jpg",
	"contact": "01-3587462",
	"feeds": [
		{
			"title": "חונכות לילד במשפחה מוחלשת",
			"text": "שלום, אני עובדת סוציאלית של עיריית רעננה. ילד (בן 11) מקסים וביישן ממשפחה נזקקת זקוק לחונך למפגש של שעה וחצי. במהלכו יוכל לדבר בפתיחות, לחלוק קשיים ולצאת מבין חומות הבישנות וההסתגרות.  נשמח למתנדב/ת תיכוניסט/ית. ",
			"expDate": "19.05.2015",
			"assignedTo": "Shaham Katan",
			"status": "",
			"comments": []
		}
	]
},
{
	"email": "dalia@gmail.com",
	"name": "Dalia Fresh",
	"password": "abc123",
	"prfImagePath": "images/Social_Worker_Raanana.jpg",
	"contact": "052-48925166",
	"feeds": [
		{
			"title": "עזרה בהכנת שיעורי בית",
			"text": "ילדה (בת 9) חכמה וחמוד בעלת קשיי קשב וריכוז זקוקה לעזרה מסטודנטית. ניתן לביצוע תמורת מלגה מטעם עיריית רעננה.",
			"expDate": "21.04.2015",
			"assignedTo": "Nadia Tafran",
			"status": "free",
			"comments": [
				{
					"commenterName": "Nadia Tafran",
					"text": "שלום אני סטודנטית אשמח לסייע במסגרת מלגת פרח."
				}
			]
		}
	]
},
{
	"email": "nadia@gmail.com",
	"name": "Nadia Tafran",
	"password": "abc123",
	"prfImagePath": "images/Scholarship_Student_W.jpg",
	"contact": "",
	"feeds": []
},
{
	"email": "shaham@gmail.com",
	"name": "Shaham Katan",
	"password": "abc123",
	"prfImagePath": "images/High_School_Student.jpg",
	"contact": "",
	"feeds": []
},
{
	"email": "ben@gmail.com",
	"name": "Ben Melumad",
	"password": "abc123",
	"prfImagePath": "images/High_Tech_Worker.jpg",
	"contact": "",
	"feeds": []
},
{
	"email": "dan@gmail.com",
	"name": "Dan Tafransky",
	"password": "abc123",
	"prfImagePath": "images/Scholarship_Student_M.jpg",
	"contact": "",
	"feeds": []
},
{
	"email": "hashuva@gmail.com",
	"name": "Hashuva Meod",
	"password": "abc123",
	"prfImagePath": "images/Young_Lawyer_Wmn.jpg",
	"contact": "",
	"feeds": []
},
{
	"email": "danny@gmail.com",
	"name": "Danny Leviev",
	"password": "abc123",
	"prfImagePath": "images/DannyL.JPG",
	"contact": "",
	"feeds": []
}
];

module.exports.renderSelectView = renderSelectView;
module.exports.renderUsersFeeds = renderUsersFeeds;
module.exports.saveNewFeed = saveNewFeed;
module.exports.goodWillArr = goodWillArr;  //TBD: Delete this after the DB access issue will be solved!!!