var UsersContent = require('../models/UserContent');

//Self executing function to add the mock data to the DB
//on the start of the App (on load of this file). 
(function(){
	UsersContent.remove({password: "admin"}, function(err, fakeFeeds){
		if(err) console.log(err);
		else{
			console.log('GW log: Deletion of old Mock Feeds from mongo DB was completed.');
			createNewFakeFeeds();
		}
	})
})();


var createNewFakeFeeds = function(){
	var newFeeds = [
	{
					email: 'admin',
					name: 'Administrator',
					password: 'admin',
					prfImagePath: '',
					contact: '',
					feeds: []
				 },
	{
	email: 'david@gmail.com',
	name: 'David Zaken',
	password: 'admin',
	prfImagePath: 'images/Nursing_Home_Manager.jpg',
	contact: '03-84592156',
	feeds: [
		{
			title: "מארגן חידון טריוויה",
			text: "אנו בבית אבות אביבים עושים את הכל למען הקשישים החוסים. ועדיין יש דבר אחד שהם ישמחו לקבל דווקא מאנשים צעירים. הקשישים צמאים לחברה, הפעלות ורוח של שימחה. לכן נשמח אם תתרמו כשעה וחצי לפעילות טריוויה.      השאלונים, המקרן, הרמקול והקהל כבר מוכנים !!!",
			expDate: "26.06.2015",
			assignedTo: "Shaham Katan",
			status: "",
			comments: [
				{
					commenterName: "Shaham Katan",
					text: "הי, אשמח להעביר את הפעילות הזו כחלק ממחויבות אישית שלי בתיכון."
				}
			]
		}
	]
},
{
	email: "rinat@gmail.com",
	name: "Rinat Levad",
	password: "admin",
	prfImagePath: "images/Single_Mother.jpg",
	contact: "054-6548965",
	feeds: [
		{
			title: "עזרה בלימודים לתמיד כיתה ד",
			text: "שלום חברים אני רינת אם חד הורית, אשמח לקבל את עזרתכם בהכנה למבחן בחשבון של הבן שלי. קוראים לו שלומי, הוא בכיתה ד והוא ממש חמוד. תודה מראש, נתראה בקרוב.",
			expDate: "11.04.2015",
			assignedTo: "Ben Melumad",
			status: "free",
			comments: []
		}
	]
},
{
	email: "manuel@gmail.com",
	name: "Manuel Feeder",
	password: "admin",
	prfImagePath: "images/Director_of_Soup_Kitchen.jpg",
	contact: "06-6135489",
	feeds: [
		{
			title: "אריזת מזון בבית תמחוי",
			text: "בישראל מתגוררים עשרות אלפי נזקקים, שאין באפשרותם לממן צרכי מחייתם הבסיסיים. חובתנו להבטיח שלא יהלכו ברחובותינו אנשים רעבים.למטרה זו הקימה עמותת 'לשובע' בשנת 1990 מסעדה לנזקקי חדרה, הנמצאת בלב אזור המצוקה העיקרי - שכונת שפירא, בסמיכות לתחנה המרכזית, אזור בו מתגוררים אלפי נזקקים, רבים מהם עולים, קשישים, מובטלים ונכים. אנו צריכים אתכם לאריזת מנות חלוקה, זו פעילות של שעה וחצי שימלאו אותכם בחום, נתינה ואהבה.",
			expDate: "26.04.2015",
			assignedTo: "",
			status: "",
			comments: [
				{
					commenterName: "Ben Melumad",
					text: "ממליץ בחום. במיוחד אם מגיעים עם ילדים. הם לא היו מודעים שיש אנשים שאין להם אוכל בבית."
				}
			]
		}
	]
},
{
	email: "aviv@gmail.com",
	name: "Aviv Shcuna",
	password: "admin",
	prfImagePath: "images/Neighborhood_Social_Activist.jpg",
	contact: "",
	feeds: [
		{
			title: "ביקור משפחות עולים חדשים בשכונת גנים פ.ת",
			text: "השכונה שלנו, שכונת גנים פתח תקוה קלטה לפני כשנה שבע משפחות של עולים חדשים. אנו בוועד השכונה רוצים מאוד לארגן ביקור בבית המשפחות כדי לבדוק את המצב וקשיי הקליטה, להסביר על השכונה ולהביא תמיכה בכל אופן שיזדקקו. לכן אנו נשמח אם תתלוו אלינו לעזור בתרגום  המפגש.  אם אתם דוברי רוסית, אמהרית או ספרדית תעזרו לנו לעזור לאחים שלנו!!!",
			expDate: "13.06.2015",
			assignedTo: "Dan Tafransky",
			status: "",
			comments: [
				{
					commenterName: "Dan Tafransky",
					text: "הי אני סטודנט דובר ספרדית, אשמח להשתתף במסגרת שעות התנדבות של מילגת אוניב."
				}
			]
		}
	]
},
{
	email: "yogev@gmail.com",
	name: "Yogev Ginat",
	password: "admin",
	prfImagePath: "images/Son_of_Holocaust_Survivor.jpg",
	contact: "04-8462517",
	feeds: [
		{
			title: "עזרה לניצול שואה בניסוח בקשת ביטול קנס",
			text: "שלום חברים, סבי הינו ניצול שואה קשיש שמתגורר לבד בדירתו. אנו במשפחה דואגים לכל צרכיו אך אין לנו יכולת לנסח מכתב משפטי לביטול קנס של אלפי שקלים שנצברו לטענת רשות השידור על שם סבי. נשמח להפגש (שעה וחצי) לקבלת עזרה משפטי מעורך דין לניסוח מכתב הבקשה - הקפה עלינו :).",
			expDate: "26.05.2015",
			assignedTo: "Hashuva Meod",
			status: "",
			comments: [
				{
					commenterName: "Hashuva Meod",
					text: "יוגב שלום, אני עורכת דין בהתמחות. אשמח לסייע."
				}
			]
		}
	]
},
{
	email: "nirit@gmail.com",
	name: "Nirit Oved",
	password: "admin",
	prfImagePath: "images/Social_Worker_Hadera.jpg",
	contact: "01-3587462",
	feeds: [
		{
			title: "חונכות לילד במשפחה מוחלשת",
			text: "שלום, אני עובדת סוציאלית של עיריית רעננה. ילד (בן 11) מקסים וביישן ממשפחה נזקקת זקוק לחונך למפגש של שעה וחצי. במהלכו יוכל לדבר בפתיחות, לחלוק קשיים ולצאת מבין חומות הבישנות וההסתגרות.  נשמח למתנדב/ת תיכוניסט/ית. ",
			expDate: "19.05.2015",
			assignedTo: "Shaham Katan",
			status: "",
			comments: []
		}
	]
},
{
	email: "dalia@gmail.com",
	name: "Dalia Fresh",
	password: "admin",
	prfImagePath: "images/Social_Worker_Raanana.jpg",
	contact: "052-48925166",
	feeds: [
		{
			title: "עזרה בהכנת שיעורי בית",
			text: "ילדה (בת 9) חכמה וחמוד בעלת קשיי קשב וריכוז זקוקה לעזרה מסטודנטית. ניתן לביצוע תמורת מלגה מטעם עיריית רעננה.",
			expDate: "21.04.2015",
			assignedTo: "Nadia Tafran",
			status: "free",
			comments: [
				{
					commenterName: "Nadia Tafran",
					text: "שלום אני סטודנטית אשמח לסייע במסגרת מלגת פרח."
				}
			]
		}
	]
},
{
	email: "nadia@gmail.com",
	name: "Nadia Tafran",
	password: "admin",
	prfImagePath: "images/Scholarship_Student_W.jpg",
	contact: "",
	feeds: []
},
{
	email: "shaham@gmail.com",
	name: "Shaham Katan",
	password: "admin",
	prfImagePath: "images/High_School_Student.jpg",
	contact: "",
	feeds: []
},
{
	email: "ben@gmail.com",
	name: "Ben Melumad",
	password: "admin",
	prfImagePath: "images/High_Tech_Worker.jpg",
	contact: "",
	feeds: []
},
{
	email: "dan@gmail.com",
	name: "Dan Tafransky",
	password: "admin",
	prfImagePath: "images/Scholarship_Student_M.jpg",
	contact: "",
	feeds: []
},
{
	email: "hashuva@gmail.com",
	name: "Hashuva Meod",
	password: "admin",
	prfImagePath: "images/Young_Lawyer_Wmn.jpg",
	contact: "",
	feeds: []
},
{
	email: "danny@gmail.com",
	name: "Danny Leviev",
	password: "admin",
	prfImagePath: "images/DannyL.JPG",
	contact: "",
	feeds: []
}
];
UsersContent.create(newFeeds, function(err, feeds){
			if(err) console.log(err);
		});
	console.log('GW log: Addition of new Mock Feeds to mongo DB was completed.');
};
	