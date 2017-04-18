/*
1. boolean
2. dry programing
3. strict equality operator
4. modulus
5. concatenation
*/

console.log("Program Begins");

/*
Prompts user with introduction 
to quiz and the option to 
decline quiz
*/
var testConfirm = prompt("Would you like to take a quick quiz on some JavaScript basics?");
var correctAnswers= 0;
console.log(correctAnswers + " correct answers total.");
if (testConfirm.toLowerCase() === "yes" || testConfirm.toLowerCase() === "y") {
 playQuiz();
} else if (testConfirm.toLowerCase() === "no" || testConfirm.toLowerCase() === "n"){
    alert("Okay thanks anyway. Have a nice day!");
} else {
    alert("Please enter a valid statement either \"Yes\" or \"No\".");
     location.reload();
      console.log("Program Ends");
}

/*
Produces questions and records
if correct via correctAnswers variable
*/
function playQuiz (){
  var firstAnswer = prompt("What JavaScript condition can only be \"True\" or \"False\"?");
    if (firstAnswer.toLowerCase() === "boolean" || firstAnswer.toLowerCase() === "booleans"){
      correctAnswers += 1;
  }
  console.log(correctAnswers + " correct answers total.");
  var secondAnswer = prompt("What is it called when you shouldn't repeat the same line of code twice?");
  if (secondAnswer.toLowerCase() === "dry programming") {
    correctAnswers += 1; 
  }
  console.log(correctAnswers + " correct answers total.");
  var thirdAnswer = prompt("What is this operator called \" === \"?");
  if (thirdAnswer.toLowerCase() === "strict equality operator"){
    correctAnswers += 1; 
  }
  console.log(correctAnswers + " correct answers total.");
  var fourthAnswer= prompt("What is this operator called \" % \"?");
  if (fourthAnswer.toLowerCase() === "modulus") {
    correctAnswers += 1; 
  }
  console.log(correctAnswers + " correct answers total.");
  var fifthAnswer= prompt("What is it called when you add multiple variables or strings together?");
  if (fifthAnswer.toLowerCase() === "concatenation"){
    correctAnswers += 1; 
  }
}
console.log(correctAnswers + " correct answers total.");

/*
determines ammount of
correct answers and
rewards user accordingly
*/
if (correctAnswers === 5){
  document.write("<p>Congratulations! You got " + correctAnswers + " out of 5 questions right! You have earned the Gold Medal!</p>");
} else if (correctAnswers >= 3){
  document.write("<p> Good job! You got " + correctAnswers + " out of 5 questions right! You have earned the Silver Meadl!</p>");
} else if (correctAnswers >= 1){
  document.write("<p> You got " + correctAnswers + " out of 5 questions right. You have earned the Bronze Meadal.</p>");
} else{
 document.write("<p>You got " + correctAnswers + " out of 5 questions right. Maybe you should study up then come try again!</p>");
}

console.log("Program Ends"); 