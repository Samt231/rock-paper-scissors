//Computer Choices//
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice
}

//Returns selections and runs game//
var playerSelection;
function choose(choice) {
    playerSelection = choice;
}

function test(click) {
    console.log(playerSelection);
}



//References to HTML//
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors')
const scoreComputer = document.querySelector('.scoreComputer');
const scorePlayer = document.querySelector('.scorePlayer');

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

//Adds scores to computer and player based on who won the match//
let playerScore = 0;
let computerScore = 0;

function game() {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let roundResult = playRound(playerSelection, computerChoice)

    if (roundResult.search('You Win!') > -1) {
        playerScore++;
    } else if (roundResult.search('You Lose!') > -1) {
        computerScore++;
    }

    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;

    if (playerScore >=5 && computerScore <5) {
        alert('Games over You Win')

    }else if (computerScore >=5 && playerScore <5){
        alert('Games over You Lose')
    }

}
console.log(game())
