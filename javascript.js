// Variables
let humanScore = 0
let computerScore = 0
let computerChoice = ""
let humanChoice = ""
let rounds = 0

// DOM Stuff
const container = document.getElementById('buttons');
const choices = ['Rock', 'Paper', 'Scissors'];
const scoreboard= document.getElementById('scoreboard');
let score= document.getElementById('score');
let text= document.getElementById('text');

choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
        playRound(choice, rounds);
    });
    container.appendChild(button);
});


// Main Methods
function playRound(humanChoice, rounds) {
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        text.textContent = "It's a tie!"
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore += 1;
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
        text.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore += 1;
    } else {
        text.textContent = "Invalid choices!";
    }
    score.textContent = `You - ${humanScore} Computer - ${computerScore}`;
    rounds += 1;
    if (rounds = 5) {
        if(humanScore > computerScore) {
            score.textContent = "You've won the game!";
        } else if (humanScore < computerScore) {
            score.textContent = "You've lost the game!";
        }
    }
}

function playGame(){
    humanScore = 0
    computerScore = 0
    computerChoice = ""
    humanChoice = ""
    console.log("Let's play 5 rounds of Rock, Paper, Scissors!")
    for(let i=1; i<=5; i++) {
        playRound(i)
    }
}

// Helper Methods
function getComputerChoice() {
    let guess = Math.floor(Math.random()*3)+1
    let output = ""
    switch (guess) {
        case 1:
            output = "Rock";
            break;
        case 2:
            output = "Paper";
            break;
        case 3:
            output = "Scissors";
            break;
        default:
            console.log("Error! Guess is not 1-3! - " + guess);
    }
    return output;
}

function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?").toLowerCase(); // Normalize input to lowercase
    let output = "";

    switch (input) {
        case "rock":
            output = "Rock";
            break;
        case "paper":
            output = "Paper";
            break;
        case "scissors":
            output = "Scissors";
            break;
        default:
            console.log("Error! Input is not rock, paper, or scissors! Input - " + input);
            return ""; 
    }

    return output;
}

