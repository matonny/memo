import { useEffect, useState } from "react";
import { getScores } from "../../storage";

export const Highscores = () => {
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    setScores(getScores);
  }, []);
  return (
    <ol>
      {scores.map((score, index) => {
        return <li key={index}>{score}</li>;
      })}
    </ol>
  );
};
