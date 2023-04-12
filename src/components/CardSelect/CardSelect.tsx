import "../../backs.css";
import { Button } from "../Button/Button";
import { Back } from "../types";
import "./CardSelect.css";
type CardSelectProps = Readonly<{
  back: string;
  bought: boolean;
  buy: () => void;
  select: () => void;
  selected: boolean;
}>;

export const CardSelect = ({
  back,
  bought,
  buy,
  select,
  selected,
}: CardSelectProps) => {
  return (
    <div className="cardContainer">
      {selected && <div className="selected"></div>}
      <div className={`${back} box`}></div>

      <p className="cardName">{back}</p>
      {!bought ? (
        <Button onclick={buy} value="buy" size="small"></Button>
      ) : (
        <Button onclick={select} value="select" size="small"></Button>
      )}
    </div>
  );
};
