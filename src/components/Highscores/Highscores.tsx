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
      {scores.length > 0 ? (
        <ol className={styles.highscoresList}>
          {scores.map((score, index) => {
            return (
              <li className={styles.highscoresItem} key={index}>
                {score}{" "}
              </li>
            );
          })}
        </ol>
      ) : (
        <p>You haven't played yet!</p>
      )}
    </div>
  );
};
