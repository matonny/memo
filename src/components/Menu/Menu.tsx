import { Button } from "../Button/Button";
import { GameState } from "../types";
import "./Menu.css";
type MenuProps = {
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
};
export const Menu = ({ changeState }: MenuProps) => {
  const values: GameState[] = ["game", "customise", "score"];
  return (
    <form>
      <ul className="menu">
        {values.map((elem) => {
          return (
            <li key={elem}>
              <Button
                onclick={() => {
                  changeState(elem);
                }}
                value={elem}
                size="big"
              />
            </li>
          );
        })}
      </ul>
    </form>
  );
};
