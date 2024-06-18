let counter = 0;

let score = {
  wins: 0,
  losses: 0,
  tie: 0,
  counter: 0,
};

function computerMove() {
  let computerMove = Math.floor(Math.random() * 10) + 1;
  if (computerMove <= 3) {
    return "Rock";
  } else if (computerMove > 3 && computerMove <= 6) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
function Decider(player, computer) {
  if (player === computer) {
    return "Draw";
  } else if (
    (computer === "Rock" && player === "Scissor") ||
    (computer === "Paper" && player === "Rock") ||
    (computer == "Scissor" && player === "Paper")
  ) {
    return "Lose";
  } else {
    return "Win";
  }
}

function startGame(player) {
  let computer = computerMove();
  let start = Decider(player, computer);

  score.counter++;
  if (start === "Draw") {
    score.tie += 1;
  } else if (start === "Lose") {
    score.losses += 1;
  } else {
    score.wins += 1;
  }

  alert(`The Game is Over the results = ${start}\nWins: ${score.wins} Losses: ${score.losses} Draw: ${score.tie} \n\nGames Played: ${score.counter}
    `);
}

function Reset() {
  score.counter = 0;
  score.tie = 0;
  score.wins = 0;
  score.losses = 0;
}
