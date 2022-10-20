//First create a function called getComupterChoice that will 
//randomly return rock paper scissors

const options = ["rock", "paper", "scissors"];
var getComputerChoice = options[Math.floor(Math.random()*options.length)];
const computerSelection = getComputerChoice;
const playerSelection = 'scissors';

//If statement for rock>scissors, paper>rock and scissors>paper

function playRound(playerSelection, computerSelection) {
    
}

console.log(playRound(playerSelection, computerSelection));