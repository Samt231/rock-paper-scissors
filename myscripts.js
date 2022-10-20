//First create a function called getComupterChoice that will 
//randomly return rock paper scissors

const options = ["rock", "paper", "scissors"];
var getComputerChoice = options[Math.floor(Math.random()*options.length)];
const computerSelection = getComputerChoice;
const playerSelection = "paper";

//If statement for rock>scissors, paper>rock and scissors>paper

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "rock" && computerSelection == "paper")) {
        console.log('You lose');
    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        console.log('You win');
    } else 
        console.log('Tie');
}

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);
console.log(playerSelection);