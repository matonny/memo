import { useEffect, useState } from "react";

type TimerProps = Readonly<{
  updateScore: React.Dispatch<React.SetStateAction<number>>;
  gameOn: boolean;
}>;

export const Timer = ({ updateScore, gameOn }: TimerProps) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currTimeout, setCurrTimeout] = useState<NodeJS.Timeout>();

  const updateTimer = () => {
    if (!gameOn) {
      clearTimeout(currTimeout);
      return;
    }
    const timePenalty = 1;
    setSeconds((prevSeconds) => prevSeconds + 1);
    if (seconds >= 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }

    updateScore((prevScore) => prevScore - timePenalty);
  };
  useEffect(() => {
    const timeoutId = setTimeout(updateTimer, 1000);
    setCurrTimeout(timeoutId);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [seconds, gameOn]);
  return (
    <p className="timer">
      {minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </p>
  );
};
