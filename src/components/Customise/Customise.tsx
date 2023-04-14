import { useEffect, useState } from "react";
import {
  buyBackIfEnoughCoins,
  getAvailableBacks,
  getCurrentBack,
  saveCurrentBack,
} from "../../storage";
import { CardSelect } from "../CardSelect/CardSelect";
import { Back, GameState, backs } from "../types";
import styles from "./Customise.module.css";
import { Coins } from "../Coins/Coins";
import { Button } from "../Button/Button";
type CustomiseProps = Readonly<{
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
}>;
export const Customise = ({ changeState }: CustomiseProps) => {
  const [boughtBacks, setBoughtBacks] = useState(getAvailableBacks());
  const [currentBack, setCurrentBack] = useState(getCurrentBack());

  useEffect(() => {
    saveCurrentBack(currentBack);
  }, [currentBack]);
  const buyBack = (targetBack: Back) => {
    buyBackIfEnoughCoins(targetBack);
    setBoughtBacks(getAvailableBacks());
  };
  return (
    <div>
      <ul className={styles.backsList}>
        {backs.map((back) => {
          return (
            <li key={back}>
              <CardSelect
                back={back}
                bought={boughtBacks.includes(back)}
                selected={currentBack === back}
                buy={() => buyBack(back)}
                select={() => setCurrentBack(back)}
              ></CardSelect>
            </li>
          );
        })}
      </ul>
      <Coins></Coins>
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
