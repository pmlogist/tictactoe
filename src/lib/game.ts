// @ts-nocheck
import { GameContext } from "./game-machine";
import { randomNumber } from "./utils";
import type { Board } from "../types";

export type Game = (params: GameContext) => Board;

export const game: Game = (params) => {
  const { board, turns } = params;

  while (turns) {
    const boardCopy = [...board];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (i === lines.length - 1) {
        while (boardCopy.length) {
          const randomTile = randomNumber(9);
          if (boardCopy[randomTile] === null) {
            boardCopy[randomTile] = "cross";
            return boardCopy;
          }
        }
      }

      for (const play of ["cross", "circle"] as Board) {
        if (
          boardCopy[a] === play &&
          boardCopy[b] === null &&
          boardCopy[a] === boardCopy[c]
        ) {
          boardCopy[b] = "cross";
          return boardCopy;
        }

        if (
          boardCopy[a] === play &&
          boardCopy[c] === null &&
          boardCopy[a] === boardCopy[b]
        ) {
          boardCopy[c] = "cross";
          return boardCopy;
        }

        if (
          boardCopy[b] === play &&
          boardCopy[a] === null &&
          boardCopy[c] === boardCopy[b]
        ) {
          boardCopy[a] = "cross";
          return boardCopy;
        }
      }
    }

    return boardCopy;
  }
  return board;
};

export const checkWin = (board: Board) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const isGameFinished = ({ board, turns }: GameContext) =>
  checkWin(board) === "circle" || checkWin(board) === "cross" || !turns;

export const lines = [
  [6, 7, 8],
  [3, 4, 5],
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
];
