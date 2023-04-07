import { useState } from "react";
import { buyBackIfEnoughCoins, getAvailableBacks } from "../../storage";
import { CardSelect } from "../CardSelect/CardSelect";
import { Back, GameState, backs } from "../types";
import "./Customise.css";
type CustomiseProps = Readonly<{
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
  setCurrBack: React.Dispatch<React.SetStateAction<Back>>;
  currBack: Back;
}>;
export const Customise = ({
  changeState,
  setCurrBack,
  currBack,
}: CustomiseProps) => {
  const [boughtBacks, setBoughtBacks] = useState(getAvailableBacks());

  const buyBack = (targetBack: Back) => {
    buyBackIfEnoughCoins(targetBack);
    setBoughtBacks(getAvailableBacks());
  };
  return (
    <div>
      <ul className="backsList">
        {backs.map((back) => {
          return (
            <li key={back}>
              <CardSelect
                back={back}
                bought={boughtBacks.includes(back)}
                selected={currBack === back}
                buy={() => buyBack(back)}
                select={() => setCurrBack(back)}
              ></CardSelect>
            </li>
          );
        })}
      </ul>
      <button onClick={() => changeState("menu")}>Menu</button>
    </div>
  );
};
