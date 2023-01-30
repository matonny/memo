import { useState } from "react";
import { Gameboard } from "../Gameboard/Gameboard";
import { GameMode, GameState } from "../types";
type GameProps = {
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
};
export const Game = ({ changeState }: GameProps) => {
  const minValue = 4;
  const maxValue = 20;
  const difficulties = ["color", "word", "number"] as GameMode[];
  const [cardNumber, setCardNumber] = useState(minValue);
  const [difficulty, setDifficulty] = useState<GameMode>("color");
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
      <ul>
        {difficulties.map((elem) => {
          return (
            <div key={elem}>
              <label>
                <input
                  type="radio"
                  value={elem}
                  checked={difficulty === elem}
                  onChange={(e) => setDifficulty(e.target.value as GameMode)}
                />
                {elem}
              </label>
            </div>
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
          difficulty={difficulty}
          changeState={changeState}
        />
      )}
      <button onClick={() => changeState("menu")}>Menu</button>
    </>
  );
};
