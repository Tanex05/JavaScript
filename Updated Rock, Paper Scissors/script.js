// Retrieve the score from localStorage and parse it. If it doesn't exist, use default values.
let score = JSON.parse(localStorage.getItem("Score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
  counter: 0,
};

// Function to generate the computer's move randomly.
function computerMove() {
  let computerMove = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10.
  if (computerMove <= 3) {
    return "Rock"; // 30% chance of Rock.
  } else if (computerMove > 3 && computerMove <= 6) {
    return "Paper"; // 30% chance of Paper.
  } else {
    return "Scissors"; // 40% chance of Scissors.
  }
}

// Function to determine the result of the game.
function Decider(player, computer) {
  if (player === computer) {
    return "Draw"; // It's a tie if both moves are the same.
  } else if (
    (computer === "Rock" && player === "Scissors") ||
    (computer === "Paper" && player === "Rock") ||
    (computer === "Scissors" && player === "Paper")
  ) {
    return "Lose"; // Player loses if computer's move beats the player's move.
  } else {
    return "Win"; // Player wins if player's move beats the computer's move.
  }
}

// Function to start the game and update the score.
function startGame(player) {
  let computer = computerMove(); // Get the computer's move.
  let result = Decider(player, computer); // Determine the game result.

  // Update the score based on the result.
  score.counter++;
  if (result === "Draw") {
    score.tie += 1;
  } else if (result === "Lose") {
    score.losses += 1;
  } else {
    score.wins += 1;
  }

  // Save the updated score to localStorage.
  localStorage.setItem("Score", JSON.stringify(score));

  // Display the game result and updated scores.
  alert(
    `The Game is Over. The result is: ${result}\nWins: ${score.wins} Losses: ${score.losses} Draws: ${score.tie}\n\nGames Played: ${score.counter}`
  );
}

// Function to reset the score.
function Reset() {
  score = {
    wins: 0,
    losses: 0,
    tie: 0,
    counter: 0,
  }; // Reset score values to zero.

  // Save the reset score to localStorage.
  localStorage.setItem("Score", JSON.stringify(score));
}

// Example usage: startGame("Rock"); // Player chose Rock
