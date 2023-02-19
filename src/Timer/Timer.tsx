import { useEffect, useState } from "react";

type TimerProps = Readonly<{
  updateSecondsPassed: React.Dispatch<React.SetStateAction<number>>;
}>;

export const Timer = ({ updateSecondsPassed }: TimerProps) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTimer = () => {
    setSeconds((prevSeconds) => prevSeconds + 1);
    if (seconds >= 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
    updateSecondsPassed(minutes * 60 + seconds);
  };
  useEffect(() => {
    setTimeout(updateTimer, 50);
  }, [seconds]);
  return (
    <p className="timer">
      {minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </p>
  );
};
