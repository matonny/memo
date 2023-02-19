import { GameState } from "../types";
import "./Button.css";

type ButtonProps = Readonly<{
  onclick: React.Dispatch<React.SetStateAction<GameState>>;
  value: GameState;
}>;
export const Button = ({ value, onclick }: ButtonProps) => {
  return (
    <button
      name={value}
      type="button"
      role="button"
      className="button"
      aria-pressed="false"
      onClick={() => onclick(value)}
    >
      {value}
    </button>
  );
};
