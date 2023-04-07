import "../../backs.css";
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
      <div className={`${back} box`}></div>
      <h1>SIEMA</h1>
      {!bought ? (
        <button onClick={buy}>Buy</button>
      ) : (
        <button onClick={select} disabled={selected}>
          Select
        </button>
      )}
    </div>
  );
};
