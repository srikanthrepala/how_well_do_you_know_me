var readlineSync = require('readline-sync');
var chalk = require("chalk");
function welcome(){
  var name = readlineSync.question('Enter your name:');
  console.log("Welcome " + chalk.yellow(name.toUpperCase()));
  console.log("Let's Play how well do you know Srikanth");
}
var questions = [
  {
    question : 'Where does Srikanth live? ',
    answer : 'khammam'
  },
  {
    question : 'Roomate of srikanth in graduation? ',
    answer : 'siddharth'
  },
  {
    question : 'From where does srikanth graduated? ',
    answer : 'GITAM'
  },
  {
    question : 'What is srikanths surname? ',
    answer : 'repala'
  },
  {
    question : 'Does srikanth have any sibilings? ',
    answer : 'yes'
  },
  {
    question : 'Stream selected by srikanth in graduation ',
    answer : 'cse'
  },
]
var score = 0;
var highscores =[
  {
    name:'ravi',
    score:5
  },
  {
    name:'raju',
    score:4
  }
]
function quiz(question,answer){
  var userInput = readlineSync.question(question);
  if(userInput.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Correct Answer"));
    score++;
  }else{
    console.log(chalk.red("Wrong Answer"));
  }
  console.log('your current score '+chalk.blue(score));
  console.log("-------")
}

function game(){
    for(i=0;i<questions.length;i++){
    currentQuestion = questions[i];
    quiz(currentQuestion.question,currentQuestion.answer)
  }
}
function showScores(){
  console.log("Your final score is "+chalk.magenta(score));
  for(i=0;i<highscores.length;i++){
    var currentHighscore = highscores[i];
    console.log('High scores are: '+currentHighscore.name,currentHighscore.score);
  }
  console.log("let me know wether I should add your name in the list")
}

welcome();
game();
showScores();