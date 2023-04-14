import { getCoins } from "../../storage";

export const Coins = () => {
  const coins = getCoins();
  return <p>{coins} 💰</p>;
};
