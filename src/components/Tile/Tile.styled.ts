import { styled } from "@stitches/react";

export type BaseTileProps = typeof BaseTile["defaultProps"];

export const BaseTile = styled("button", {
  backgroundColor: "white",
  border: "1px solid lightgray",
  minHeight: 100,
  minWidth: 100,
  borderRadius: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    borderColor: "Black",
  },
  "&:disabled": {
    borderColor: "LightGray",
  },
  variants: {
    variant: {
      disabled: {
        backgroundColor: "WhiteSmoke",
      },
    },
  },
});
