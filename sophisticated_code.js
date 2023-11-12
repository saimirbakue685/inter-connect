/* sophisticated_code.js */

// This code generates a complex and elaborate interactive quiz game.

// Function to create multiple choice questions with options and correct answers
function createQuestion(question, options, correctAnswer) {
  this.question = question;
  this.options = options;
  this.correctAnswer = correctAnswer;
}

// Function to display questions and options
function displayQuestion(question) {
  console.log(question.question);
  for (let i = 0; i < question.options.length; i++) {
    console.log(i + 1 + ". " + question.options[i]);
  }
}

// Array to hold all questions
let questions = [
  new createQuestion("What is the capital of France?", ["Paris", "London", "Madrid"], 0),
  new createQuestion("Who painted the Mona Lisa?", ["Van Gogh", "Da Vinci", "Picasso"], 1),
  new createQuestion("What is the largest planet in our solar system?", ["Jupiter", "Saturn", "Earth"], 0),
  new createQuestion("What year did World War II end?", ["1945", "1918", "1939"], 0),
  new createQuestion("What is the symbol for the chemical element Hydrogen?", ["Hg", "He", "H"], 2)
];

// Function to check if the user's answer is correct
function checkAnswer(question, userAnswer) {
  if (userAnswer === question.correctAnswer) {
    return true;
  } else {
    return false;
  }
}

// Function to start the quiz game
function startQuiz() {
  let totalQuestions = questions.length;
  let totalCorrectAnswers = 0;

  console.log("Welcome to the Quiz Game!");

  // Loop through each question
  for (let i = 0; i < totalQuestions; i++) {
    console.log("Question " + (i + 1) + ":");
    displayQuestion(questions[i]);

    // Prompt the user for an answer
    let userAnswer = prompt("Enter the number of your answer:");

    // Check if the answer is correct
    if (checkAnswer(questions[i], userAnswer - 1)) {
      totalCorrectAnswers++;
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer!");
    }
  }

  console.log("Quiz ended.");
  console.log("You answered " + totalCorrectAnswers + " out of " + totalQuestions + " questions correctly.");
}

// Call the startQuiz function to begin the game
startQuiz();