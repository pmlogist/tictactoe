import { forwardRef, ReactNode } from "react";
import { BaseButton, BaseButtonProps } from "./Button.styled";
import type { SCProps } from "../../types";

export interface ButtonProps extends SCProps<BaseButtonProps> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children } = props;

    const Component = props.as ?? BaseButton;

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);
