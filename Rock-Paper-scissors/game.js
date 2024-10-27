// Set an array that holds the 3 Words
const gameWords = ["rock", "paper", "scissors"];

// get Computer Choice
function getComputerChoice() {
    // didn't make var to store a random value
    // cause i want a new value every time i call the function
    return gameWords[Math.floor(Math.random() * 3)];
}
// get Human Choice
function getHumanChoice() {
   let unfound = true;
   while (unfound) {
   let humanChoice = prompt("Rock, Paper or Scissors").toLocaleLowerCase();
    for (let i = 0; i < gameWords.length; i++) {
        if (gameWords[i] === humanChoice) {
            unfound = false;
            return humanChoice;
        }

    }
    }
}

// play the entire game
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    function playRound(humanChoice, computerChoice) {
        // rock beats scissors -> beats paper -> beats rock
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                console.log("Congratulations You Wins")
            }
            if (computerChoice === "paper") {
                computerScore++;
                console.log("Computer Wins, Good luck in the next time")
            }
            if (computerChoice === "rock") {
                console.log("play again")
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                console.log("Congratulations You Wins")
            }
            if (computerChoice === "scissors") {
                computerScore++;
                console.log("Computer Wins, Good luck in the next time")
            }
            if (computerChoice === "paper") {
                console.log("play again")
            }
        }
        else {
            if (computerChoice === "paper") {
                humanScore++;
                console.log("Congratulations You Wins")
            }
            if (computerChoice === "rock") {
                computerScore++;
                console.log("Computer Wins, Good luck in the next time")
            }
            if (computerChoice === "scissors") {
                console.log("play again")
            }
        }
    }
    for(i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
        console.log("Your Score:" + humanScore + "\nComputer Score:"
            + computerScore)
    
}
