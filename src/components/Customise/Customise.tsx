import { useEffect, useState } from "react";
import {
  buyBackIfEnoughCoins,
  getAvailableBacks,
  getCurrentBack,
  saveCurrentBack,
} from "../../storage";
import { CardSelect } from "../CardSelect/CardSelect";
import { BackName, GameState } from "../types";
import styles from "./Customise.module.css";
import { Button } from "../Button/Button";
import { backs } from "../constants";
type CustomiseProps = Readonly<{
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
}>;
export const Customise = ({ changeState }: CustomiseProps) => {
  const [boughtBacks, setBoughtBacks] = useState(getAvailableBacks());
  const [currentBack, setCurrentBack] = useState(getCurrentBack());

  useEffect(() => {
    saveCurrentBack(currentBack);
  }, [currentBack]);
  const buyBack = (targetBack: BackName) => {
    buyBackIfEnoughCoins(targetBack);
    setBoughtBacks(getAvailableBacks());
  };
  return (
    <div>
      <ul className={styles.backsList}>
        {backs.map(({ backName, backPrice }) => {
          return (
            <li key={backName}>
              <CardSelect
                back={backName}
                bought={boughtBacks.includes(backName)}
                selected={currentBack === backName}
                buy={() => buyBack(backName)}
                price={backPrice}
                select={() => setCurrentBack(backName)}
              ></CardSelect>
            </li>
          );
        })}
      </ul>
      <Button
        onclick={() => {
          changeState("menu");
        }}
        value="menu"
        size="normal"
      ></Button>
    </div>
  );
};
