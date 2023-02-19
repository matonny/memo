import { useEffect, useState } from "react";

type TimerProps = Readonly<{
  updateScore: React.Dispatch<React.SetStateAction<number>>;
}>;

export const Timer = ({ updateScore }: TimerProps) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTimer = () => {
    setSeconds((prevSeconds) => prevSeconds + 1);
    if (seconds >= 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
    const timePenalty = 1;
    updateScore((prevScore) => prevScore - timePenalty);
  };
  useEffect(() => {
    const timeoutId = setTimeout(updateTimer, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [seconds]);
  return (
    <p className="timer">
      {minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </p>
  );
};
