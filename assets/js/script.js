var introEl= document.querySelector("intro")
var qaViewEl= document.querySelector("#qa-view")
var timerEl= document.querySelector("#timer")

var startQuizBtn= document.querySelector("#start-quiz")


/*
step 1. displays start page - title and paragraph
start button -  (triggers the quiz game and displays timer and question page)
​
step 2. displays question page and hides start page - timer will start when the start button is clicked from start page, display question and show 4 four answer buttons,  
When you click one of the answer button, show correct or wrong. . Total remaining is 75 seconds for 5 questions. total = number of Questions * 15 seconds.
​
When you get a wrong answer, your time gets deducted by 15 sec off the clock and it needs to show wrong message. If you get it right, no penalty off clock but you need to show Correct message.
​
step 3. Once you answer all the questions, you will be presented with the score and input text to enter your initial and a submit button. The timer should stop
and time left becomes your score. When you click the submit, it store your initial and score in localstorage
​
step 4:
Show a dashboard of all the highscores 
*/ 



var secondsLeft = 75;


var question= [{
title:"new question 1",
answer:[ "answer1", "answer 2", "answer 3", "answer 4"]
}]



function startGame (){
    qaViewEl.classList.remove("hide");
    // introEl.classList.add("hide");
    
  
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;
    
        if(secondsLeft <= 0) {
         
          clearInterval(timerInterval);
  
          // link to scoreboard at the end, when scoreboard functiin is created 
          // sendMessage();
        }
    
      }, 1000);
    

}

startQuizBtn.addEventListener("click", startGame)






// function setTime() {
//     // Sets interval in variable
// //     var timerInterval = setInterval(function() {
// //       secondsLeft--;
// //       timerEl.textContent = "Time" + secondsLeft;
  
// //       if(secondsLeft === 0) {
// //         // Stops execution of action at set interval
// //         clearInterval(timerInterval);

// //         // link to scoreboard at the end, when scoreboard functiin is created 
// //         // sendMessage();
// //       }
  
// //     }, 1000);
// //   }



