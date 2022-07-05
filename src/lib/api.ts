import { Board, GameStatus, Scoreboard } from "../types";

const key = "game-history";
export const API = {
  SCOREBOARD: {
    GET: async () => JSON.parse(localStorage.getItem(key)!) as Scoreboard[],
    POST: async (board: Board, gameStatus: GameStatus) => {
      const key = "game-history";
      const gameHistory = localStorage.getItem(key);

      let result = [];

      if (gameHistory) {
        result.push(...JSON.parse(gameHistory), { board, gameStatus });
      } else {
        result.push({ board, gameStatus });
      }

      localStorage.setItem(key, JSON.stringify(result));
    },
  },
};
