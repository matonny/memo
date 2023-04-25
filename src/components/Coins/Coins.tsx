import { useEffect, useState } from "react";
import { getCoins } from "../../storage";
import styles from "./Coins.module.css";

export const Coins = () => {
  const [coins, setCoins] = useState(getCoins());

  useEffect(() => {
    const updateCoins = () => {
      setCoins(getCoins());
    };
    window.addEventListener("updated-coins", updateCoins);

    return () => {
      window.removeEventListener("updated-coins", updateCoins);
    };
  });

  return <p className={styles.coins}>{coins} 💰</p>;
};
