import { useState } from "react";
import styles from "./App.module.css";
import { Menu } from "./components/Menu/Menu";
import { GameState } from "./types";
import { Game } from "./components/Game/Game";
import { Highscores } from "./components/Highscores/Highscores";
import { LightModeContext } from "./hooks/lightModeContext";
import { Customise } from "./components/Customise/Customise";
import { Toggle } from "./components/Toggle/Toggle";
import { Coins } from "./components/Coins/Coins";
import { Button } from "./components/Button/Button";
export const App = () => {
  const [currState, setCurrState] = useState<GameState>("menu");
  const [currLightMode, setCurrLightMode] = useState<"light" | "dark">("light");
  const statesWithMenu = (
    <div className={styles.container}>
      {currState === "game" && <Game />}
      {currState === "customise" && <Customise />}
      {currState === "score" && <Highscores />}
      <div className={`${styles.lowerBar} ${styles[currLightMode]}`}>
        <Button
          size="normal"
          value="Menu"
          onclick={() => setCurrState("menu")}
        ></Button>
      </div>
    </div>
  );
  console.log(currState);
  return (
    <div className={`${styles.app} ${styles[currLightMode]}`}>
      <div className={styles.upperBar}>
        <Coins></Coins>
        <Toggle
          label="darkModeToggle"
          onclick={() => {
            currLightMode === "dark"
              ? setCurrLightMode("light")
              : setCurrLightMode("dark");
          }}
        ></Toggle>
      </div>
      <div></div>
      <LightModeContext.Provider value={currLightMode}>
        {currState === "menu" ? (
          <Menu changeState={setCurrState} />
        ) : (
          statesWithMenu
        )}
      </LightModeContext.Provider>
    </div>
  );
};

export default App;
