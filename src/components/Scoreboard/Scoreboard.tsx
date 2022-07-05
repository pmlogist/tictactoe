import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { IconX } from "@tabler/icons";
import type { Scoreboard as ScoreboardType, SCProps } from "../../types";
import {
  BaseScoreboard,
  BaseScoreboardContainer,
  BaseScoreboardHeader,
  BaseScoreboardTitle,
  BaseScoreboardProps,
  BaseScoreboardUl,
  BaseScoreboardLi,
} from "./Scoreboard.styled";
import { API } from "../../lib";

export interface ScoreboardProps extends SCProps<BaseScoreboardProps> {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Scoreboard: FC<ScoreboardProps> = (props) => {
  const { as, setOpen } = props;
  const [scoreboard, setScoreboard] = useState<ScoreboardType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await API.SCOREBOARD.GET();
      if (data) {
        setScoreboard(data);
      }
    })();
  }, []);

  const handleClick = () => {
    setOpen(false);
  };

  const Component = as ?? BaseScoreboard;

  return (
    <Component>
      <BaseScoreboardHeader>
        <BaseScoreboardTitle>Scoreboard</BaseScoreboardTitle>
        <IconX style={{ cursor: "pointer" }} size={36} onClick={handleClick} />
      </BaseScoreboardHeader>

      <BaseScoreboardContainer>
        {!scoreboard ? (
          "loading"
        ) : (
          <BaseScoreboardUl>
            {scoreboard.map((score, i) => (
              <BaseScoreboardLi key={i}>
                {`Game ${i} – ${score.gameStatus}`}
              </BaseScoreboardLi>
            ))}
          </BaseScoreboardUl>
        )}
      </BaseScoreboardContainer>
    </Component>
  );
};
