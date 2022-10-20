//First create a function called getComupterChoice that will 
//randomly return rock paper scissors

const options = ["rock", "paper", "scissors"];
var getComputerChoice = options[Math.floor(Math.random()*options.length)];
const computerSelection = getComputerChoice;

let playerSelection = "scissors";


//If statement for rock>scissors, paper>rock and scissors>paper

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "rock" && computerSelection == "paper")) {
        return 'You lose'
    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        return 'You win';
    } else 
        return 'Tie';
}

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);

//New function called game that plays 5 games and returns 
//the winner of all 5 games and keeps score

//Same as number game, using for loops (let i=0; i < 5; i++)