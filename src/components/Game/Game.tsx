import { useState } from "react";
import { Gameboard } from "../Gameboard/Gameboard";
import { Back, GameMode, GameState } from "../types";
import "./Game.css";
type GameProps = {
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
  chosenBack: Back;
};
export const Game = ({ changeState, chosenBack }: GameProps) => {
  const minValue = 4;
  const maxValue = 20;
  const gameModes = ["color", "word", "number"] as GameMode[];
  const [cardNumber, setCardNumber] = useState(minValue);
  const [currGameMode, setCurrGameMode] = useState<GameMode>("color");
  const [play, setPlay] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlay(true);
  };
  const gameSettings = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.valueAsNumber)}
      />
      <p>{cardNumber}</p>
      <ul className="gameModesList">
        {gameModes.map((gameMode) => {
          return (
            <li className="gameModeOption" key={gameMode}>
              <label>
                <input
                  name={gameMode}
                  type="radio"
                  value={gameMode}
                  checked={currGameMode === gameMode}
                  onChange={(e) => setCurrGameMode(e.target.value as GameMode)}
                />
                {gameMode}
              </label>
            </li>
          );
        })}
      </ul>
      <button type="submit">PLAY</button>
    </form>
  );
  return (
    <>
      {!play ? (
        gameSettings
      ) : (
        <Gameboard
          chosenBack={chosenBack}
          size={cardNumber}
          difficulty={currGameMode}
          changeState={changeState}
        />
      )}
      <button onClick={() => changeState("menu")}>Menu</button>
    </>
  );
};
