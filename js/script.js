// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:


(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  //loop through all the names
  for (var indx in names) {
    //select lowercase of firt letter from name array
    var firstLetter = names[indx].charAt(0).toLowerCase(); 

    //call byeSpeaker for letters that begin with "j" else call helloSpeaker
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[indx]);
    } else {
      helloSpeaker.speak(names[indx]);
    }
  }

})();

