import type { FC, ReactNode } from "react";
import type { SCProps } from "../../types";
import { BaseBoard, BaseBoardProps } from "./Board.styled";

export interface BoardProps extends SCProps<BaseBoardProps> {
  children: ReactNode;
}

export const Board: FC<BoardProps> = (props) => {
  const { children } = props;

  const Component = props.as ?? BaseBoard;
  return <Component>{children}</Component>;
};
