import { useEffect, useState } from "react";
import { Gameboard } from "./components/Gameboard/Gameboard";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { GameState, Back } from "./components/types";
import { Game } from "./components/Game/Game";
import { Highscores } from "./components/Highscores/Highscores";
import { getRecentBack } from "./storage";
import { Customise } from "./components/Customise/Customise";
export const App = () => {
  const [currState, setCurrState] = useState<GameState>("menu");
  const [currBack, setCurrBack] = useState<Back>(getRecentBack());

  return (
    <div className="App">
      <header className="App-header">
        {currState == "menu" && <Menu changeState={setCurrState} />}
        {currState == "game" && (
          <Game chosenBack={currBack} changeState={setCurrState} />
        )}
        {currState == "customise" && (
          <Customise
            changeState={setCurrState}
            currBack={currBack}
            setCurrBack={setCurrBack}
          />
        )}
        {currState == "score" && <Highscores changeState={setCurrState} />}
      </header>
    </div>
  );
};

export default App;
