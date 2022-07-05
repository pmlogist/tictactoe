import { assign, createMachine } from "xstate";
import { Board, GameStatus } from "../types";
import { API } from "./api";
import { checkWin, game, isGameFinished } from "./game";

export interface GameContext {
  board: Board;
  turns: number;
  started: boolean;
  winner: "player" | "cpu" | "draw" | null;
}

export interface GameEvent {
  type: "CLEAR" | "START" | "PLAY" | "REPLAY" | "CHECK";
  tileValue: number;
  gameStatus: GameStatus;
}

const initialContext: GameContext = {
  board: Array(9).fill(null),
  turns: 9,
  started: false,
  winner: null,
};

export const gameMachine = createMachine<GameContext, GameEvent>(
  {
    id: "toggle",
    initial: "idle",
    context: initialContext,

    states: {
      idle: {
        on: { START: "player", CLEAR: "clear" },
      },
      clear: {
        entry: assign({ ...initialContext }),
        on: {
          REPLAY: { target: "idle" },
        },
      },
      player: {
        on: {
          PLAY: {
            target: "cpu",
            actions: ["play", "checkGame", "result"],
            cond: "hasTurns",
          },
          CLEAR: { target: "clear" },
        },
      },
      cpu: {
        on: {
          PLAY: {
            target: "player",
            actions: ["play", "checkGame", "result"],
            cond: "hasTurns",
          },
          CLEAR: { target: "clear" },
        },
      },
    },
  },
  {
    guards: {
      hasGameStarted: ({ started: hasGameStated }) => hasGameStated,
      hasTurns: ({ turns }) => turns > 0,
    },
    actions: {
      checkGame: assign({
        started: (ctx) => (isGameFinished(ctx) ? false : ctx.started),
      }),
      play: assign({
        started: (_) => true,
        board: (ctx, { tileValue }) => {
          let boardCopy = [...ctx.board];

          if (tileValue !== undefined) {
            boardCopy[tileValue] = "circle";
          } else {
            boardCopy = game(ctx);
          }

          return boardCopy;
        },
        turns: ({ turns }) => turns - 1,
      }),
      result: assign({
        winner: ({ board, started }) => {
          const tile = checkWin(board);

          if (tile === "cross") {
            API.SCOREBOARD.POST(board, "loose");
            return "cpu";
          } else if (tile === "circle") {
            API.SCOREBOARD.POST(board, "win");
            return "player";
          } else if (!started && !tile) {
            API.SCOREBOARD.POST(board, "draw");
            return "draw";
          }
          return null;
        },
        turns: (ctx) => (isGameFinished(ctx) ? 0 : ctx.turns),
      }),
    },
  }
);
