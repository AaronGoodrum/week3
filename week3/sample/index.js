function getDailyGoal(day) {
  
    var enrolled = true;
    var currentCourse = "Intro";
      
  /*  if ( your challenge 1 code here  ) {
     //  Your challenge 2 switch code here 
    }
  */

 if ( enrolled == true && currentCourse == "Intro" )
 switch (day) {
   case 1: 
   case 2:
      return "Study up to 'Basics of Javascript'.";
   case 3: 
      return "Finish through 'Basics of Javascript' today.";
   case 4: 
      return "Finish through 'Handling Data' today.";
   case 5: 
      return "Finish through 'Further Resources' today.";
   case 6: 
      return "It's time for our first JavaScript Workshop!";
   default: 
      return "Start on Week 3 today.";
      
 }
 }
  
  
  
  // You do not need to touch the code below for this challenge.
  // You are welcome to alter it for your own experimental use, however. 
  function getIntroWeek2Schedule() {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesdays", "Thursday", "Friday", "Saturday"];
    var i = 1;
    console.log("Week 2 Schedule:");  
    while (i < 7) {
      console.log(weekdays[i] + ": " + getDailyGoal(i));
      i++;
    }
    console.log(weekdays[0] + ": " + getDailyGoal(0));
  }
  
  getIntroWeek2Schedule();
  