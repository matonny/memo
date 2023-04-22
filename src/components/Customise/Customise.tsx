import { useEffect, useState } from "react";
import {
  buyBackIfEnoughCoins,
  getAvailableBacks,
  getCurrentBack,
  saveCurrentBack,
} from "../../storage";
import { CardSelect } from "../CardSelect/CardSelect";
import { BackName } from "../types";
import styles from "./Customise.module.css";
import { backs } from "../constants";
export const Customise = () => {
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
    </div>
  );
};
