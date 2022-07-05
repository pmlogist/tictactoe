import { useState } from "react";
import { BasePage, Scoreboard } from "../components";
import Game from "./Game";

export default function App() {
  const [showScoreboard, setShowScoreboard] = useState(false);

  const handleScoreboard = () => {
    setShowScoreboard(!showScoreboard);
  };

  return (
    <BasePage>
      {showScoreboard && (
        <Scoreboard setOpen={() => setShowScoreboard(!showScoreboard)} />
      )}
      <Game handleScoreboard={handleScoreboard} />
    </BasePage>
  );
}
