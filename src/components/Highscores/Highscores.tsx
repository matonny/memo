import { useEffect, useState } from "react";
import { getScores } from "../../storage";
import { GameState } from "../types";
import "./Highscores.css";
type highscoresProps = Readonly<{
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
}>;
export const Highscores = ({ changeState }: highscoresProps) => {
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    setScores(getScores);
  }, []);
  return (
    <div className="container">
      <ol className="highscoresList">
        {scores.map((score, index) => {
          return (
            <li className="highscoresItem" key={index}>
              {score}{" "}
            </li>
          );
        })}
      </ol>
      <button onClick={() => changeState("menu")}>Menu</button>
    </div>
  );
};
