import { useEffect, useState } from "react";

type TimerProps = Readonly<{
  updateScore: React.Dispatch<React.SetStateAction<number>>;
  gameOn: boolean;
}>;

export const Timer = ({ updateScore, gameOn }: TimerProps) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      if (!gameOn) {
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
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [gameOn, seconds, updateScore]);

  return (
    <p className="timer">
      {minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </p>
  );
};
