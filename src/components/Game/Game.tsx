import { useState } from "react";
import { Gameboard } from "../Gameboard/Gameboard";
import { Back, GameMode, GameState } from "../types";
import "./Game.css";
type GameProps = {
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
};
export const Game = ({ changeState }: GameProps) => {
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
    <form className="gameSettingsForm" onSubmit={(e) => handleSubmit(e)}>
      <p className="promptName">Number of cards:</p>
      <label className="label">
        <span className="labelDesc">{cardNumber}</span>
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.valueAsNumber)}
        />
      </label>
      <p className="promptName">Game mode: </p>
      <ul className="gameModesList">
        {gameModes.map((gameMode) => {
          return (
            <li className="gameModeOption" key={gameMode}>
              <label className="label">
                <input
                  name={gameMode}
                  type="radio"
                  value={gameMode}
                  className="radioInput "
                  checked={currGameMode === gameMode}
                  onChange={(e) => setCurrGameMode(e.target.value as GameMode)}
                />
                <span className="customRadio"></span>
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
          size={cardNumber}
          difficulty={currGameMode}
          changeState={changeState}
        />
      )}
      <button onClick={() => changeState("menu")}>Menu</button>
    </>
  );
};
