let currentPlayer = "X";
let gameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function playerMove(PositionX, PositionY) {
  if (gameState[PositionX][PositionY] === null) {
    gameState[PositionX][PositionY] = currentPlayer;
    document.getElementById(`${PositionX}${PositionY}`).innerHTML =
      currentPlayer;
    setTimeout(CheckCurrentState, 100);

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function CheckCurrentState() {
  if (CheckWin("X")) {
    alert("Player X Wins");
    restartGame();
  } else if (CheckWin("O")) {
    alert("Player O Wins");
    restartGame();
  } else if (CheckDraw()) {
    alert("No Winners Only Two Losers");
    restartGame();
  }
}

function CheckWin(Player) {
  //check for rows
  for (let i = 0; i < 3; i++) {
    if (
      gameState[i][0] === Player &&
      gameState[i][1] === Player &&
      gameState[i][2] === Player
    ) {
      return true;
    }
  }
  // check for columns
  for (let j = 0; j < 3; j++) {
    if (
      gameState[0][j] === Player &&
      gameState[1][j] === Player &&
      gameState[2][j] === Player
    ) {
      return true;
    }
  }
  if (
    (gameState[0][0] === Player &&
      gameState[1][1] === Player &&
      gameState[2][2] === Player) ||
    (gameState[2][0] === Player &&
      gameState[1][1] === Player &&
      gameState[0][2] === Player)
  ) {
    return true;
  } else {
    return false;
  }
}

function CheckDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameState[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}

function restartGame() {
  gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // Clear the board
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.getElementById(`${i}${j}`).innerHTML = "";
    }
  }

  currentPlayer = "X";
}
