import { styled } from "@stitches/react";

export type BaseScoreboardProps = typeof BaseScoreboard["defaultProps"];

export const BaseScoreboard = styled("div", {
  zIndex: 100,
  position: "absolute",
  backgroundColor: "White",
  height: "100%",
  width: "100%",
  overflow: "unset",
});

export const BaseScoreboardHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderWidth: 1,
  borderBottom: "1px solid WhiteSmoke",
  height: 50,
  position: "fixed",
  width: "100%",
  backgroundColor: "White",
});

export const BaseScoreboardContainer = styled("div", {
  marginTop: 50,
});

export const BaseScoreboardUl = styled("ul", {
  overflow: "scroll",
  backgroundColor: "White",
  listStyle: "none",
});

export const BaseScoreboardLi = styled("li", {
  fontSize: 32,
});

export const BaseScoreboardTitle = styled("div", {
  fontWeight: "bold",
  marginLeft: 10,
  fontSize: 20,
});
