//Returns a Computer Choice//
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let result = options[Math.floor(Math.random()*options.length)];
    return result
}

//Users Selection and Runs game on click//
var playerSelection;
function choose(choice) {
    playerSelection = choice;
}

function test(click) {
    console.log(playerSelection);
}

//


//References to HTML//
const scoreComputer = document.querySelector('.scoreComputer');
const scorePlayer = document.querySelector('.scorePlayer');
const selectionComputer = document.querySelector('.selectionComputer');
const selectionPlayer = document.querySelector('.selectionPlayer');
const games = document.querySelector('.games');

//Faces the playerSelection against the random computer choice between rock, paper and scissors//
function playRound(playerSelection, computerChoice) {
    let log = '';

    if (playerSelection == 'rock') {
        if (computerChoice == 'scissors') {
        log = 'You Win! Rock Beats Scissors.';

        } else if (computerChoice == 'paper') {
        log = 'You Lose! Paper Beats Rock';

        } else {
        log = 'Thats a Tie!';
        }

    } else if (playerSelection == 'paper') {
        if (computerChoice == 'rock') {
            log = 'You Win! Paper Beats Rock.';
        } else if (computerChoice == 'scissors') {
            log = 'You Lose! Scissors Beats Rock.';
        } else {
            log = 'Thats a Tie!';
        }
    } else if(playerSelection == 'scissors') {
        if (computerChoice == 'paper') {
            log = 'You Win! Scissors Beats Paper.'
        } else if (computerChoice == 'rock') {
            log = 'You Lose! Rock Beats Scissors';
        } else {
            log = 'Thats a Tie!';
        }
    }

return log
}

function createParagWithText(text) {
    const p = document.createElement('p');
    p.textContent = text;
  
    return p;
  }

//Adds scores to computer and player based on who won the match//
let playerScore = 0;
let computerScore = 0;

function game() {
    let computerChoice = getComputerChoice();
    let roundResult = playRound(playerSelection, computerChoice)

    if (roundResult.search('You Win!') > -1) {
        playerScore++;
    } else if (roundResult.search('You Lose!') > -1) {
        computerScore++;
    }

    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    games.textContent = roundResult

    if (playerScore >=5 && computerScore <5) {
        games.textContent = 'Games over. You Win!';
        document.getElementById('start').disabled = true;
    }else if (computerScore >=5 && playerScore <5){
        games.textContent = 'Games over. You Lose!';
        document.getElementById('start').disabled = true;
    }

}
