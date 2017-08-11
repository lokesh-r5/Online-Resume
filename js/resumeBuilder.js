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
     "location": "San Jose, CA, USA"
   },
   "welcomeMessage": "Thank you for coming here. I'm currently seeking for Front End Developer opportunities in US.",
   "skills": ["JAVA", "JavaScript", "C++", "C", "SQL", "PL/SQL", "No SQL", "HTML5", "CSS3", "Angular JS", "Node JS", "jQuery", "Bootstrap", "AWS", "Oracle RDBMS", "MySQL", "Microsoft SQL Server", "Mongo DB"],
   "biopic": "images/biopic.jpeg",
   "display": function(){
     $('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
     $('#header').prepend(HTMLheaderName.replace("%data%", bio.name));
     $('#topContacts, #footerContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
     $('#topContacts, #footerContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
     $('#topContacts, #footerContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
     $('#topContacts, #footerContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
     $('#topContacts, #footerContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
     $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
     $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
     $('#header').append(HTMLskillsStart);
     bio.skills.forEach(function(skill){
       $('#skills').append(HTMLskills.replace('%data%', skill));
     });
   }
 };

 var education= {
   "schools":[{
     "name": "San Jose State University",
     "location": "San Jose, CA, USA",
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
     $('#education').append(HTMLschoolStart);
     education.schools.forEach(function(school){
       HTMLschoolName= HTMLschoolName.replace('#', school.url);
       $('.education-entry').append(HTMLschoolName.replace('%data%', school.name)+HTMLschoolDegree.replace('%data%', school.degree));
       $('.education-entry').append(HTMLschoolDates.replace("%data%", school.dates));
       $('.education-entry').append(HTMLschoolLocation.replace("%data%", school.location));
       school.majors.forEach(function(major){
         $('.education-entry').append(HTMLschoolMajor.replace("%data%", major));
       });
     });
     //$('.education-entry').insertAfter(HTMLonlineClasses);
     education.onlineCourses.forEach(function(course){
       $('.education-entry').append(HTMLonlineTitle.replace("%data%", course.title)+HTMLonlineSchool.replace("%data%", course.school));
       $('.education-entry').append(HTMLonlineDates.replace("%data%", course.dates));
       $('.education-entry').append(HTMLonlineURL.replace("%data%", course.url));
     });
   }
 };

 var work={
   "jobs": [{
     "employer": "Tech Mahindra",
     "title": "Software Engineer",
     "location": "Hyderabad, India",
     "dates": "2013 - 2015",
     "description": "Performed Requirement Analysis and prepared requirement specifications (SRS) for Retail Application. Practiced Agile SDLC and technical documentation. Designed and developed web application using front end technologies like Bootstrap, AngularJS, HTML, CSS. Used AngularJS to create a Single Page Application which can synchronize data with server. Worked with SQL queries (Sub queries and Join conditions) and PL/SQL (procedures, functions, joins and triggers) to extract and analyze data from large database. Improved application performance by 30% by fine-tuning SQL queries. Worked with large datasets to extract data and fixed issues in the XML messages from Oracle Retail RIB. Received Letter of Appreciation and Pat on Back award for Individual and Team Performance in Tech Mahindra."
   }],
   "display": function(){
     work.jobs.forEach(function(job){
       $('#workExperience').append(HTMLworkStart);
       $('.work-entry').append(HTMLworkEmployer.replace('%data%', job.employer)+HTMLworkTitle.replace('%data%', job.title));
       $('.work-entry').append(HTMLworkDates.replace('%data%', job.dates));
       $('.work-entry').append(HTMLworkLocation.replace('%data%', job.location));
       $('.work-entry').append(HTMLworkDescription.replace('%data%', job.description));
     });
   }
 };

 var projects={
   "projects": [{
     "title": "eHealth Web Application",
     "dates": "2016-2017",
     "description": "Getting data from server and displaying it on the client-side by using custom and built in directives in Angular JS.	Developed dynamic and interactive front-end interfaces using HTML5, CSS and JavaScript.",
     "images": ["images/ehealth1.jpg", "images/ehealth2.png"]
   },
   {
     "title": "Reading List Web Application",
     "dates": "2017-2017",
     "description": "Individual book collection web application by allowing user to organize reading list and submit ratings. Developed application in Agile development methodology using HTML5, CSS3, Bootstrap, JavaScript and AngularJS. Designed User Interface using AngularJS and Bootstrap and implemented the features like user login, registration, account details, sorted book lists, genre list, and average ratings.",
     "images": ["images/list1.png", "images/list2.jpg"]
   },
   {
     "title": "Blood Bank Database Management System",
     "dates": "2015-2015",
     "description": "Monitored and compared the performance on delete, insert, read, and update by 5k, 10k, 20k, 50k and 100k records. Implemented functions to plot data to bar chart and export data to PDF and CSV file",
     "images": ["images/blood1.jpg", "images/blood2.jpeg"]
   },
   {
     "title": "CPU Design",
     "dates": "2016-2017",
     "description": "Designed Instruction Set a simple MIPS architecture with primary memory, registers, decoders, and ALU components.	Encoded the instructions as bits, stored in simulated memory space, and run the program using a variety of special purpose and general purpose registers. Used the instruction set to write a recursive binary search and executed it in the designed CPU.",
     "images": ["images/cpu1.jpg", "images/cpu2.png"]
   },
   {
     "title": "Video Streaming Server",
     "dates": "2015-2016",
     "description": "Designed a video Streaming server using RTP and RTSP for continuous and streaming of the video to the client.",
     "images": ["images/video1.jpg", "images/video2.jpg"]
   }],
   "display": function(){
     var project_id;
     $('#projects').append(HTMLprojectStart);
     projects.projects.forEach(function(project){
       $('.project-entry').append(HTMLprojectTitle.replace('%data%', project.title));
       $('.project-entry').append(HTMLprojectDates.replace('%data%', project.dates));
       $('.project-entry').append(HTMLprojectDescription.replace('%data%', project.description));
       project_id= "project"+projects.projects.indexOf(project);
       $('.project-entry').append('<div class="project-images" id="'+project_id+'">');
       project.images.forEach(function(image){
         $('#'+project_id).append(HTMLprojectImage.replace('%data%', image));
       });
     });
   }
 };

 bio.display();
 work.display();
 projects.display();
 education.display();

 $('#mapDiv').append(googleMap);
