import { useState } from "react";
import { Gameboard } from "./components/Gameboard/Gameboard";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { GameState } from "./components/types";
export const App = () => {
  const [currState, setCurrState] = useState<GameState>("menu");
  console.log(currState);
  return (
    <div className="App">
      <header className="App-header">
        {currState == "menu" && <Menu changeState={setCurrState} />}
        {currState == "game" && <Gameboard size={2} />}
        {currState == "customise" && <Gameboard size={2} />}
        {currState == "score" && <Gameboard size={2} />}
      </header>
    </div>
  );
};

export default App;
