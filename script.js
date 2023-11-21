// Rock Paper Scissors
// A simple rock paper scissors game vs a computer which "randomly"
// picks one of the three options.
// Pseudocode:
// An "AI player" function which returns either Rock, Paper or Scissors - Randomly
// A text input which accepts case-insensitve "rock", "paper" or "scissors"
// A function which compares the two inputs and determine who the winner is based on the following conditions:
//// 1. Rock beats Scissors
//// 2. Scissors beats Paper
//// 3. Paper beat Rock
//// 4. All other results are a draw
// Output who the winner is "Computer" or "Player"

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

// Return either 1, 2 or 3.
function getComputerChoice() {
    return Math.floor(Math.random() * (3)) + 1;
}

// Returns 1 if player types Rock
// Returns 2 if player types Paper
// Returns 3 if player types Scissors
// Returns -1 if player inputs a invalid string
function getPlayerSelection(string) {
    let playerMove = string.toLowerCase();
    
    if (playerMove === "rock") { return ROCK; } 
    else if (playerMove === "paper") { return PAPER; } 
    else if (playerMove === "scissors") { return SCISSORS; } 
    else { return -1; }
}

// Returns 1 for a player win
// Returns 2 for a CPU win
// Returns 3 for a Draw
// Returns -1 if player inputs an invalid string
function playRound(playerSelection, computerSelection) {
    let winner;

    if ((playerSelection === ROCK && computerSelection === SCISSORS) ||
                (playerSelection === PAPER && computerSelection === ROCK ) ||
                (playerSelection === SCISSORS && computerSelection === PAPER)) {
        winner = 1;
    } else if ((playerSelection === ROCK && computerSelection === PAPER) || 
                (playerSelection === PAPER && computerSelection === SCISSORS) ||
                (playerSelection === SCISSORS && computerSelection === ROCK)) {
        winner = 2;
    } else if (playerSelection === computerSelection) {
        winner = 3;
    } else if (playerSelection === -1) {
        winner = -1;
    } 
    return winner;
}

function game(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        let winner = playRound(getPlayerSelection(prompt()), getComputerChoice());
        if (winner === 1) {
            console.log("PLAYER WINS! :)");
        } else if (winner === 2) {
            console.log("CPU WINS! :(");
        } else if (winner === 3) {
            console.log("DRAW! :|");
        } else if (winner === -1) {
            console.log("Invalid input -- Please Try Again...");
        }
    }
}

game(0);