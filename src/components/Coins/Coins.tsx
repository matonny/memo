import { getCoins } from "../../storage";
import styles from "./Coins.module.css";

export const Coins = () => {
  const coins = getCoins();
  return <p className={styles.coins}>{coins} 💰</p>;
};
