// Variables
let humanScore = 0
let computerScore = 0
let computerChoice = ""
let humanChoice = ""

// Main Methods
function playRound(roundNumber) {
    console.log("Round " + roundNumber + "!")
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    } else {
        console.log("Invalid choices!");
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

// Main
playGame();
