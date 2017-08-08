/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio={
   "name": "Lokesh Reddyvari",
   "role": "Software Engineer",
   "contacts": {
     "mobile": "(669) 258-6855",
     "email": "lokeshreddyvari5@gmail.com",
     "github": "https://github.com/lokesh-reddyvari",
     "twitter": "https://twitter.com/Im_loke",
     "location": "San Jose, CA"
   },
   "welcomeMessage": "",
   "skills": [],
   "biopic": "",
   "display": function(){
     $('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
     $('#header').prepend(HTMLheaderName.replace("%data%", bio.name));
     $('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
     $('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
     $('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
     $('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
     $('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
   }
 };

 var education= {
   "schools":[{
     "name": "San Jose State University",
     "location": "San Jose",
     "degree": "Master of Science",
     "majors": ["Computer Engineering"],
     "dates": "2015 - 2017",
     "url": "http://www.sjsu.edu/"
    },
    {
     "name": "Jawaharlal Nehru Technological University",
     "location": "India",
     "degree": "Bachelor of Science",
     "majors": ["Computer Engineering"],
     "dates": "2009 - 2013",
     "url": "http://jntua.ac.in/"
   }],
   "onlineCourses": [{
     "title": "Front End Developer",
     "school": "Udacity",
     "dates": "2017 - 2017",
     "url": "udacity.com"
   },
   {
     "title": "Front End Developer",
     "school": "Free Code Camp",
     "dates": "2017 - 2017",
     "url": "freecodecamp.com"
   }],
   "display": function(){

   }
 };

 var work={
   "jobs": [{
     "employer": "Tech Mahindra",
     "title": "Software Engineer",
     "location": "Hyderabad, India",
     "dates": "2013 - 2015",
     "description": ""
   }],
   "display": function(){
     
   }
 };

 var projects={
   "projects": [{
     "title": "eHealth Web Application",
     "dates": "2016-2017",
     "description": "",
     "images": []
   },
   {
     "title": "Reading List Web Application",
     "dates": "2017-2017",
     "description": "",
     "images": []
   },
   {
     "title": "Steel Plant Database",
     "dates": "2015-2015",
     "description": "",
     "images": []
   },
   {
     "title": "CPU Design",
     "dates": "2016-2017",
     "description": "",
     "images": []
   },
   {
     "title": "Video Streaming Server",
     "dates": "2015-2016",
     "description": "",
     "images": []
   }],
   display: function(){

   }
 };

 bio.display();
