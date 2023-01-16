import { useState } from "react";
import { Gameboard } from "../Gameboard/Gameboard";
import { Difficulty, GameState } from "../types";
type GameProps = {
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
};
export const Game = ({ changeState }: GameProps) => {
  const difficulties = ["easy", "medium", "hard"] as Difficulty[];
  const [cardNumber, setCardNumber] = useState(8);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [play, setPlay] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlay(true);
  };
  const form = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="range"
        min="8"
        max="40"
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
                  onChange={(e) => setDifficulty(e.target.value as Difficulty)}
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
      {!play ? form : <Gameboard size={cardNumber} changeState={changeState} />}
      <button onClick={() => changeState("menu")}>Menu</button>
    </>
  );
};
