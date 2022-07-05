import { forwardRef, ReactNode } from "react";
import type { SCProps } from "../../types";
import { BaseNotification, BaseNotificationProps } from "./Notification.styled";

export interface NotificationProps extends SCProps<BaseNotificationProps> {
  children: ReactNode;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const { children } = props;

    const Component = props.as ?? BaseNotification;

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);
