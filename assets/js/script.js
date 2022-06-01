/* step 1. displays start page - title and paragraph
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

var introEl = document.querySelector("#intro");
var qaViewEl = document.querySelector("#qa-view");
var timerEl = document.querySelector("#timer");
var questionNumber = 0;

var answer1El = document.querySelector("#answer-1");
var answer2El = document.querySelector("#answer-2");
var answer3El = document.querySelector("#answer-3");
var answer4El = document.querySelector("#answer-4");
var questionTextEl = document.querySelector(".questionText");

var startQuizBtn = document.querySelector("#start-quiz");

startQuizBtn.addEventListener("click", startGame);

answer1El.addEventListener("click", checkAnswer);
answer2El.addEventListener("click", checkAnswer);
answer3El.addEventListener("click", checkAnswer);
answer4El.addEventListener("click", checkAnswer);

var secondsLeft = 75;

// var question= {
// title:"What does HTML stand for?",
// answers:[ "something", "somthing else", "HyperText Markup Language", "nothing"],
// correctAnswer: "HyperText Markup Language"
// };

var question = [
  {
    question:
      "What does HTML stand for?",
    correct_answer: "HyperText Markup Language",
    answers: ["something", "somthing else", "HyperText Markup Language", "nothing"],
  },
  {
    question:
      "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
    correct_answer: "Taiwan",
    answers: [
      "United States",
      "Germany",
      "Taiwan",
      "China (People&#039;s Republic of)",
    ],
  },
  {
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    answers: [".tv", ".tu", ".tt", ".tl"],
  },
  {
    question:
      "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    answers: [
      "&lt;scroll&gt;&lt;/scroll&gt;",
      "&lt;move&gt;&lt;/move&gt;",
      "&lt;marquee&gt;&lt;/marquee&gt;",
      "&lt;slide&gt;&lt;/slide&gt;",
    ],
  },
  {
    question: ".rs is the top-level domain for what country?",
    correct_answer: "Serbia",
    answers: ["Romania", "Serbia", "Russia", "Rwanda"],
  },
  {
    question: "What is known as &quot;the brain&quot; of the Computer?",
    correct_answer: "Central Processing Unit",
    answers: [
      "Motherboard",
      "Graphics Processing Unit",
      "Keyboard",
      "Central Processing Unit",
    ],
  },
  {
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    answers: ["RAID 0", "RAID 1", "RAID 10", "RAID 5"],
  },
  {
    question: "What does the term MIME stand for, in regards to computing?",
    correct_answer: "Multipurpose Internet Mail Extensions",
    answers: [
      "Multipurpose Internet Mail Extensions",
      "Mail Internet Mail Exchange",
      "Multipurpose Interleave Mail Exchange",
      "Mail Interleave Method Exchange",
    ],
  },
  {
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    answers: [
      "Runtime Instance Processes",
      "Regular Interval Processes",
      "Routine Inspection Protocol",
      "Routing Information Protocol",
    ],
  },
  {
    question:
      "How many bits make up the significand portion of a single precision floating point number?",
    correct_answer: "23",
    answers: ["23", "8", "53", "15"],
  },
];

function startGame() {
  qaViewEl.classList.remove("hide");
  introEl.setAttribute("style", "Display: none");

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);

      // link to scoreboard at the end, when scoreboard functiin is created
      // sendMessage();
    }
  }, 1000);

  nextQuestion();
}

function nextQuestion() {
  questionTextEl.innerHTML = question[questionNumber].question;

  answer1El.innerHTML = question[questionNumber].answers[0];
  answer2El.innerHTML = question[questionNumber].answers[1];
  answer3El.innerHTML = question[questionNumber].answers[2];
  answer4El.innerHTML = question[questionNumber].answers[3];
}

function checkAnswer(event) {
  console.log(event.target.innerHTML);
  var userChoice = event.target.innerHTML;
  // check answer to get next question
  // check if the index is = to length of the array then end game otherwise get next question
  // create element for correct or not correct answer
  
  if (userChoice === question[questionNumber].correct_answer) {
    console.log("correct answer");
    

    // create element for correct or not correct answer
  } else {
    secondsLeft = secondsLeft - 10;
    console.log("wrong answer")
  }

  questionNumber++;
  // if question Number is less than total number of question 
  nextQuestion();
}

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
