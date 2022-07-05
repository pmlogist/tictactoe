import { styled } from "@stitches/react";

export type BaseBoardProps = typeof BaseBoard["defaultProps"];

export const BaseBoard = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: 5,
  rowGap: 5,
  marginBottom: 10,
});
