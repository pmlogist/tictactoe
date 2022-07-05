import { styled } from "@stitches/react";

export type BaseButtonProps = typeof BaseButton["defaultProps"];

export const BaseButton = styled("button", {
  cursor: "pointer",
  minHeight: 32,
  borderRadius: 5,
  borderColor: "transparent",
  fontWeight: "bold",
  fontSize: 16,
  color: "WhiteSmoke",
  backgroundColor: "Black",
  minWidth: 100,
  padding: "0 8",
  variants: {
    variant: {
      success: {
        backgroundColor: "Teal",
      },
    },
  },
});
