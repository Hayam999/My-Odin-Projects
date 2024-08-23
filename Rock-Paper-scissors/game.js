// Set an array that holds the 3 Words
const gameWords = ["Rock", "Paper", "Scissors"];

// get Computer Choice
function getComputerChoice() {
    // didn't make var to store a random value
    // cause i want a new value every time i call the function
    return gameWords[Math.floor(Math.random() * 3)];
}
// get Human Choice
// Compare two Choices and see who wins
// Add Score to the winner
// Declare who wins
