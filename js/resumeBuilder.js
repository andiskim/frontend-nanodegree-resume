/*
This is empty on purpose! Your code to build the resume will go here.
 */
// DATA
var bio = {
  "name": "Andrew Kim",
  "role": "Web Developer",
  "contacts": {
    "mobile": "123-456-7890",
    "email": "andiskim@gmail.com"
  },
  "welcomeMessages": "Lorum Ipsum blah blah blah",
  "skills": [
    "HTML", "CSS", "Javascript"
  ],
  "bioPic": "images/fry.jpg"
};

var work = {
  "jobs": [{
    "title": "Web Developer",
    "employer": "Independent",
    "dates": "2008-2013",
    "location": "Los Angeles",
    "description": "Work description 1"
  },{
    "title": "Web Developer 2",
    "employer": "Independent 2",
    "dates": "2014-2016",
    "location": "New York",
    "description": "Work description 2"
  }]
};

var projects = {
  "projects": [{
    "title": "Apple",
    "dates": "2011-2012",
    "description": "Made a website about apples",
    "image": "http://fnsweb01.edc.usda.gov/food-groups/food_library/fruit/food_images/apples.gif"
  },{
    "title": "Orange",
    "dates": "2012-2013",
    "description": "Made a website about oranges",
    "image": "http://www.solarjuice.com.au/wp-content/uploads/2013/06/small-orange2.png"
  }]
};

var education = {};
education["name"] = "UCLA";
education["years"] = "2008 - 2013";
education["city"] = "Los Angeles";

// FUNCTIONS
 function displayWork() {
   for (job in work.jobs) {
     $("#workExperience").append(HTMLworkStart);

     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle;

     var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

     $(".work-entry:last").append(formattedEmployerTitle);
     $(".work-entry:last").append(formattedLocation);
     $(".work-entry:last").append(formattedDates);
     $(".work-entry:last").append(formattedDescription);
   }
 }

 function inName(name) {
   var splitName = name.split(" ");
   var firstName = splitName[0];
   var lastName = splitName[1];

   firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
   lastName = lastName.toUpperCase();
   return firstName + " " + lastName
 }

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImage);
  }
}
// HELPER FUNCTION
var formattedName = HTMLheaderName.replace("%data%", "Andrew Kim");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(internationalizeButton);

displayWork();
projects.display();

$("#mapDiv").append(googleMap);
