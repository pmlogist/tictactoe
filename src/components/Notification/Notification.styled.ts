import { styled } from "@stitches/react";

export type BaseNotificationProps = typeof BaseNotification["defaultProps"];

export const BaseNotification = styled("div", {
  zIndex: 100,
  position: "absolute",
  backgroundColor: "Black",
  color: "WhiteSmoke",
  width: "25%",
  marginTop: 40,
  top: 0,
  borderRadius: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  height: 40,

  variants: {
    variant: {
      draw: { backgroundColor: "LightSalmon" },
      win: { backgroundColor: "LightBlue" },
      loose: { backgroundColor: "Tomato" },
    },
  },
});
