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
import { getDarkMode, saveDarkMode } from "./storage";
export const App = () => {
  const [currState, setCurrState] = useState<GameState>("menu");
  const [darkMode, setDarkMode] = useState(getDarkMode());
  const statesWithMenu = (
    <div className={styles.container}>
      {currState === "game" && <Game />}
      {currState === "customise" && <Customise />}
      {currState === "score" && <Highscores />}
      <div className={`${styles.lowerBar} ${darkMode ? styles.dark : ""}`}>
        <Button
          size="normal"
          value="Menu"
          onclick={() => setCurrState("menu")}
        ></Button>
      </div>
    </div>
  );
  return (
    <div className={`${styles.appContainer} ${darkMode ? styles.dark : ""}`}>
      <div className={`${styles.app} ${darkMode ? styles.dark : ""}`}>
        <div className={styles.upperBar}>
          <Coins></Coins>
          <Toggle
            checked={darkMode}
            label="darkModeToggle"
            onclick={() => {
              setDarkMode((prevDarkMode) => !prevDarkMode);
              saveDarkMode(!darkMode);
            }}
          ></Toggle>
        </div>
        <div></div>
        <LightModeContext.Provider value={darkMode}>
          {currState === "menu" ? (
            <Menu changeState={setCurrState} />
          ) : (
            statesWithMenu
          )}
        </LightModeContext.Provider>
      </div>
    </div>
  );
};

export default App;
