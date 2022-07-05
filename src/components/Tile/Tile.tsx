import { forwardRef } from "react";
import { IconCircle, IconX } from "@tabler/icons";
import { BaseTile, BaseTileProps } from "./Tile.styled";
import type { SCProps, Tile as TileType } from "../../types";

export interface TileProps extends SCProps<BaseTileProps> {
  status: TileType;
  size?: number;
}

export const Tile = forwardRef<HTMLButtonElement, TileProps>((props, ref) => {
  const { size = 80, status } = props;

  const variant = status !== null ? "disabled" : undefined;

  return (
    <BaseTile ref={ref} variant={variant} {...props}>
      {status === "circle" && <IconCircle size={size} color={"lightblue"} />}
      {status === "cross" && <IconX size={size} color={"tomato"} />}
    </BaseTile>
  );
});
