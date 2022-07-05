import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Notification } from "../../components";

type Status = "win" | "loose" | "draw" | undefined;

export interface NotificationContextProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setStatus: Dispatch<SetStateAction<Status>>;
}

export const NotificationContext = createContext<
  NotificationContextProps | undefined
>(undefined);

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<Status>(undefined);

  return (
    <NotificationContext.Provider value={{ show, setShow, setStatus }}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {show && (
          <Notification variant={status}>
            {status === "win"
              ? "Victory"
              : status === "loose"
              ? "Defeat"
              : "Draw"}
          </Notification>
        )}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

// export const useNotification = () => useContext(NotificationContext);

export function useNotification() {
  const postsContext = useContext(NotificationContext);
  if (!postsContext) {
    throw new Error(
      "usePostsContext must be used within the PostsContext.Provider"
    );
  }
  return postsContext;
}
