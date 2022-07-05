import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import { Board, Button, Tile } from "../components";
import { gameMachine, isGameFinished, randomNumber } from "../lib";
import { useNotification } from "../lib/context";

export default function Game(props: any) {
  const { handleScoreboard } = props;
  const [state, send] = useMachine(gameMachine);
  const { board, turns, winner } = state.context;
  const { setShow, setStatus } = useNotification();

  useEffect(() => {
    if (winner) {
      setStatus(
        winner === "player" ? "win" : winner === "cpu" ? "loose" : "draw"
      );
      setShow(true);
    }
  }, [turns]);

  const handleClick = (tileValue: number) => {
    send("START");
    send("PLAY", { tileValue });
    send("PLAY");
  };

  const handleRestart = () => {
    setShow(false);
    send("CLEAR");
    send("REPLAY");
  };

  return (
    <div style={{ flexDirection: "column" }}>
      <Board>
        {board.map((tile, i) => (
          <Tile
            key={i}
            status={tile}
            onClick={() => handleClick(i)}
            disabled={
              tile !== null ||
              state.value === "cpuPlay" ||
              state.value === "playerPlay"
            }
          />
        ))}
      </Board>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: 10,
        }}
      >
        <Button disabled={state.context.started} onClick={handleRestart}>
          Restart
        </Button>
        <Button onClick={handleScoreboard}>Scoreboard</Button>
      </div>
    </div>
  );
}
