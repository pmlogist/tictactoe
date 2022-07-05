import { ReactElement } from "react";

export type Tile = "circle" | "cross" | null;
export type GameStatus = "pending" | "start" | "win" | "loose" | "draw";
export type Board = Tile[];
export interface Scoreboard {
  board: Board;
  gameStatus: GameStatus;
}

export type As<T> = (props: T) => ReactElement;
export type SCProps<T> = T & { as?: As<T> };
