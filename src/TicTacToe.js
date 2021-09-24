import _ from "lodash";
import { useState } from "react";
import * as Game from "./game";

export default function TicTacToe(props) {
  const [board, setBoard] = useState(Game.createEmptyBoard());
  const [player, setPlayer] = useState("X");

  function startNewGame() {
    setBoard(Game.createEmptyBoard());
  }

  return (
    <>
      <Status board={board} player={player} startNewGame={startNewGame} />

      <GameArea
        board={board}
        setBoard={setBoard}
        player={player}
        setPlayer={setPlayer}
        active={!Game.isWinner(board, Game.nextPlayer(player))}
      />
    </>
  );
}

function Status({ board, player, startNewGame }) {
  if (Game.isWinner(board, Game.nextPlayer(player))) {
    return (
      <p>
        Player {Game.nextPlayer(player)} Won!
        <button onClick={startNewGame}>New Game</button>
      </p>
    );
  }

  return <p>It's player {player} turn</p>;
}

function GameArea({ board, player, setBoard, setPlayer, active }) {
  function play(row, column) {
    if (!active) {
      return;
    }

    const nextBoard = Game.playerClickedOnSquare(board, player, row, column);
    if (nextBoard !== board) {
      setBoard(nextBoard);
      setPlayer(Game.nextPlayer(player));
    }
  }

  return (
    <div className="container">
      {_.range(3).map((row) =>
        _.range(3).map((column) => (
          <div className="square" onClick={play.bind(null, row, column)}>
            {Game.getCellContents(board, row, column)}
          </div>
        ))
      )}
    </div>
  );
}
