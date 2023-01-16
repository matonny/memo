import { useState } from "react";
import { Gameboard } from "./components/Gameboard/Gameboard";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { GameState } from "./components/types";
import { Game } from "./components/Game/Game";
export const App = () => {
  const [currState, setCurrState] = useState<GameState>("menu");
  console.log(currState);
  return (
    <div className="App">
      <header className="App-header">
        {currState == "menu" && <Menu changeState={setCurrState} />}
        {currState == "game" && <Game changeState={setCurrState} />}
        {currState == "customise" && (
          <Gameboard changeState={setCurrState} size={8} />
        )}
        {currState == "score" && (
          <Gameboard changeState={setCurrState} size={8} />
        )}
      </header>
    </div>
  );
};

export default App;
