import { useEffect, useState } from "react";
import { getScores } from "../../storage";
import styles from "./Highscores.module.css";
export const Highscores = () => {
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
    </div>
  );
};
