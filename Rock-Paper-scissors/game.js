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


    let computerScore = 0;
    let humanScore = 0;
    function playRound(humanChoice, computerChoice) {
        // rock beats scissors -> beats paper -> beats rock
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                scoreArea.textContent =  "Rock beats Scissors" +
                "\n Your score: " + humanScore + "\n Computer Score: " +
                computerScore;
            }
            if (computerChoice === "paper") {
                computerScore++;
                scoreArea.textContent = "Paper beats Rock" +
                "\n Your score: " + humanScore + "\n Computer Score: " +
                computerScore;
            }
            if (computerChoice === "rock") {
                console.log("play again")
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                scoreArea.textContent = "Paper beats Rock" +
                "\n Your score: " + humanScore + "\n Computer Score: " +
                computerScore;
            }
            if (computerChoice === "scissors") {
                computerScore++;
                scoreArea.textContent = "Scissors beats Rock" +
                "\n Your score: " + humanScore + "\n Computer Score: " +
                computerScore;
            }
            if (computerChoice === "paper") {
                console.log("play again")
            }
        }
        else {
            if (computerChoice === "paper") {
                humanScore++;
                scoreArea.textContent = "Scissors beats Paper" +
                "\n Your score: " + humanScore + "\n Computer Score: " +
                computerScore;
            }
            if (computerChoice === "rock") {
                computerScore++;
                scoreArea.textContent = "Rock beats Scissors" +
                "\n Your score: " + humanScore + "\n Computer Score: " +
                computerScore;
            }
            if (computerChoice === "scissors") {
                console.log("play again")
            }
        }
        if (humanScore >= 5 && (humanScore > computerScore )) {
            winnerArea.textContent = "CONGRATULATIONS! You Are The Winner";  
        }
        else if (computerScore >= 5 && (computerScore > humanScore)) {
            winnerArea.textContent = "The Computer Wins, GOOD LUCK!";
        }
    }



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const scoreArea = document.querySelector("#display-score");

const winnerArea = document.querySelector("#winner-area");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
