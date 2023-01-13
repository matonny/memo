import { GameState } from "../types";

type ButtonProps = Readonly<{
  onclick: React.Dispatch<React.SetStateAction<GameState>>;
  value: GameState;
}>;
export const Button = ({ value, onclick }: ButtonProps) => {
  return <button onClick={() => onclick(value)}>{value}</button>;
};
