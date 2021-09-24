import produce from "immer";

export function createEmptyBoard() {
  return [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];
}

export function getCellContents(board, row, column) {
  return board[row][column];
}

export function playerClickedOnSquare(board, player, row, column) {
  return produce(board, (draft) => {
    if (draft[row][column] === " ") {
      draft[row][column] = player;
    }
  });
}

export function nextPlayer(player = null) {
  switch (player) {
    case "O":
      return "X";
    case "X":
      return "O";
    default:
      return "X";
  }
}

export function isWinner(board, player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][2] === player
    ) {
      return true;
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[2][i] === player
    ) {
      return true;
    }
  }

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[2][2] === player
  ) {
    return true;
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[2][0] === player
  ) {
    return true;
  }
  return false;
}
