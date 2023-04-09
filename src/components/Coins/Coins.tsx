import { useState } from "react";
import { getCoins } from "../../storage";

export const Coins = () => {
  const [coins, setCoins] = useState(getCoins());
  return <p>{coins} 💰</p>;
};
