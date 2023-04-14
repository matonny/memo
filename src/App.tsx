import { useState } from "react";
import styles from "./App.module.css";
import { Menu } from "./components/Menu/Menu";
import { GameState } from "./components/types";
import { Game } from "./components/Game/Game";
import { Highscores } from "./components/Highscores/Highscores";
import { LightModeContext } from "./hooks/lightModeContext";
import { Customise } from "./components/Customise/Customise";
export const App = () => {
  const [currState, setCurrState] = useState<GameState>("menu");
  const [currLightMode, setCurrLightMode] = useState<"light" | "dark">("light");
  console.log(currState);
  return (
    <div className={`${styles.app} ${styles[currLightMode]}`}>
      <button
        onClick={() => {
          currLightMode === "dark"
            ? setCurrLightMode("light")
            : setCurrLightMode("dark");
        }}
      >
        switch
      </button>
      <LightModeContext.Provider value={currLightMode}>
        {currState === "menu" && <Menu changeState={setCurrState} />}
        {currState === "game" && <Game changeState={setCurrState} />}
        {currState === "customise" && <Customise changeState={setCurrState} />}
        {currState === "score" && <Highscores changeState={setCurrState} />}
      </LightModeContext.Provider>
    </div>
  );
};

export default App;
