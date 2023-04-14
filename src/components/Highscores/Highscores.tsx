import { useEffect, useState } from "react";
import { getScores } from "../../storage";
import { GameState } from "../types";
import styles from "./Highscores.module.css";
import { Button } from "../Button/Button";
type highscoresProps = Readonly<{
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
}>;
export const Highscores = ({ changeState }: highscoresProps) => {
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    setScores(getScores);
  }, []);
  return (
    <div className={styles.container}>
      <ol className={styles.highscoresList}>
        {scores.map((score, index) => {
          return (
            <li className={styles.highscoresItem} key={index}>
              {score}{" "}
            </li>
          );
        })}
      </ol>
      <Button
        size="normal"
        value="Menu"
        onclick={() => changeState("menu")}
      ></Button>
    </div>
  );
};
