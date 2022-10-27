//First create a function called getComupterChoice that will 
//randomly return rock paper scissors

//Ignore for now
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const games = document.querySelector('.games');
const scorePlayer = document.querySelector('.scorePlayer');
const scoreComputer = document.querySelector('.scoreComputer');
const selectionPlayer = document.querySelector('.playerSelection');
const selectionComputer = document.querySelector('.computerSelection');
//Ignore for now

const options = ["rock", "paper", "scissors"];
var getComputerChoice = options[Math.floor(Math.random()*options.length)];
const computerSelection = getComputerChoice;

let playerSelection = prompt('Your Play')

let playerScore = 0
let computerScore = 0


//If statement for rock>scissors, paper>rock and scissors>paper

function playRound(playerSelection, computerSelection) {
   let log = '';
   
    if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "rock" && computerSelection == "paper")) {
        log = 'You lose'
    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        log = 'You win';
    } else {
        log = 'Tie';
    }

    return log

}

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);

//New function called game that plays 5 games and returns 
//the winner of all 5 games and keeps score

//Same as number game, using for loops (let i=0; i < 5; i++)

//Save each game result up to 5 games

function game() {
    let roundResult = playRound(playerSelection, computerSelection)

    if (roundResult.search('You win')) {
        playerScore++;
    } else if (roundResult.search('You lose')) {
        computerScore++;
    }

    scorePlayer.textContent = playerScore
    scoreComputer.textContent = computerScore
    games.textContent = roundResult
    
    if (playerScore >=5 && computerScore <5) {
        games.textContent = 'Game Over. You Win!';
    } else if (playerScore < 5 && computerScore >=5) {
        games.textContent = 'Game Over. You Lose!';
    }
}

console.log(game())