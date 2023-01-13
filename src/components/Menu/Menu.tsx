import { Button } from "../Button/Button";
import { GameState } from "../types";
type MenuProps = {
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
};
export const Menu = ({ changeState }: MenuProps) => {
  const values: GameState[] = ["game", "customise", "score"];
  return (
    <ul>
      {values.map((elem) => {
        return (
          <li key={elem}>
            <Button onclick={changeState} value={elem} />
          </li>
        );
      })}
    </ul>
  );
};
