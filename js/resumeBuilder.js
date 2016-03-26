(function () {
'use strict';
// this function is strict...
}());

/*
This is empty on purpose! Your code to build the resume will go here.
 */

// DATA
var bio = {
  "name": "Andrew Kim",
  "role": "Web Developer",
  "contacts": {
    "mobile": "123-456-7890",
    "email": "andiskim@gmail.com",
    "github": "github.com/andiskim",
    "twitter": "twitter.com/andiskim",
    "location": "San Francisco"
  },
  "welcomeMessage": "Lorum Ipsum blah blah blah",
  "skills": [
    "HTML", "CSS", "Javascript"
  ],
  "biopic": "images/fry.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", "Andrew Kim");
    var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

    // name and contacts
    $("#header").prepend(formattedName,formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLemail.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);

    // picture and welcome message
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#about").append(formattedBiopic,formattedWelcome);

    // Skill Start
    $("#about").append(HTMLskillsStart);

    // loop skils array
    for (var skill = 0; skill < bio.skills.length; skill++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills:last").append(formattedSkills);
    }

    //footer contact information
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);

    $("#main").append(internationalizeButton);
  }
};



var education = {
  "schools": [{
    "name": "UCLA",
    "location": "Los Angeles",
    "degree": "Bachelor of Science",
    "majors": ["Chemical Engineering", "Computer Science"],
    "dates": "2008-2013",
    "url": "images/ucla.jpg"
  }, {
    "name": "UC Berkeley",
    "location": "Berkeley",
    "degree": "Bachelor of Science",
    "majors": ["Chemistry", "Computer Science"],
    "dates": "2008-2013",
    "url": "images/ucberkeley.jpg"
  }],
  "onlineCourses": [{
    "title": "Frontend web dev",
    "school": "Udacity",
    "date": "2015-2015",
    "url": "www.udacity.com"
  },
  {
    "title": "Frontend web dev 2",
    "school": "Udacity",
    "date": "2016-2016",
    "url": "www.udacity.com"
  }],
  display: function() {
    //school loop first
    for (var school=0; school < education.schools.length; school++) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedNameDegree = formattedName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var temp = "";
      for (var i=0; i < education.schools[school].majors.length; i++) {
        if (education.schools[school].majors[i] == education.schools[school].majors[0]) {
          temp = education.schools[school].majors[0];
        }
        else {
          temp = temp + ", " + education.schools[school].majors[i];
        }
      }
      var formattedMajor = HTMLschoolMajor.replace("%data%", temp);

      $(".education-entry:last").append(formattedNameDegree,formattedDates,formattedLocation,formattedMajor);
    }

    // Add Online Education header
    var formattedClass = HTMLonlineClasses;
    $("#education").append(formattedClass);

    // online course loop
    for (var course=0; course < education.onlineCourses.length; course++) {
      // enclose online course under education
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var titleSchool = formattedTitle + formattedSchool;
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

      $(".education-entry:last").append(titleSchool,formattedDate,formattedUrl);
    }
  }
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
  }],
  display: function() {
    for (var job=0; job < work.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployerTitle,formattedLocation,formattedDates,formattedDescription);
    }
  }
};

var projects = {
  "projects": [{
    "title": "Apple",
    "dates": "2011-2012",
    "description": "Made a website about apples",
    "image": ["http://fnsweb01.edc.usda.gov/food-groups/food_library/fruit/food_images/apples.gif", "http://fnsweb01.edc.usda.gov/food-groups/food_library/fruit/food_images/apples.gif"]
  },{
    "title": "Orange",
    "dates": "2012-2013",
    "description": "Made a website about oranges",
    "image": ["http://www.solarjuice.com.au/wp-content/uploads/2013/06/small-orange2.png", "http://www.solarjuice.com.au/wp-content/uploads/2013/06/small-orange2.png"]
  }],
  display: function() {
    for (var project=0; project<projects.projects.length; project++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);


      $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
      for (var i=0; i < projects.projects[project].image.length; i++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[i]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

 // function inName(name) {
 //   var splitName = name.split(" ");
 //   var firstName = splitName[0];
 //   var lastName = splitName[1];
 //
 //   firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
 //   lastName = lastName.toUpperCase();
 //   return firstName + " " + lastName
 // }


// invoke methods to display bio, education, work, project
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
