import { backs, Back } from "./components/types";

const scoreKey = "score";
const coinsKey = "coins";
const currentBackKey = "currentBack";
const boughtBacksKey = "boughtCovers";

export const initStorage = () => {};
const isBack = (potentialBack: unknown): potentialBack is Back => {
  return backs.filter((someBack) => someBack == potentialBack).length > 0;
};

export const addScore = (score: number) => {
  const maxScoresStored = 10;
  const currScores = getScores().concat([score]);
  const bestScores = currScores.sort().reverse().slice(0, maxScoresStored);
  console.log(bestScores);
  localStorage.setItem(scoreKey, JSON.stringify(bestScores));
};

export const getScores = () => {
  const scoreKey = "score";
  const rawStorage = localStorage.getItem(scoreKey);
  const parsedScores = rawStorage
    ? (JSON.parse(rawStorage) as number[])
    : ([] as number[]);
  return parsedScores;
};

export const getCurrentBack = () => {
  const defaultBack = "yellow";
  const rawBack = localStorage.getItem(currentBackKey);
  const parsedBack = rawBack ? JSON.parse(rawBack) : defaultBack;
  const backCover = isBack(parsedBack);
  return backCover ? parsedBack : defaultBack;
};
export const saveCurrentBack = (recentBack: Back) => {
  localStorage.setItem(currentBackKey, JSON.stringify(recentBack));
};
export const getAvailableBacks = () => {
  const rawBoughtBacks = localStorage.getItem(boughtBacksKey);
  const parsedBoughtBacks = rawBoughtBacks ? JSON.parse(rawBoughtBacks) : [];
  if (!Array.isArray(parsedBoughtBacks)) {
    return [];
  }
  return parsedBoughtBacks.filter(isBack);
};
export const buyBackIfEnoughCoins = (newBack: Back, price: number = 50) => {
  const currCoins = getCoins();
  if (currCoins - price < 0) {
    alert("too pricy");
    return;
  }
  console.log("xd");
  removeCoins(price);
  addBoughtBack(newBack);
};
const addBoughtBack = (newBack: Back) => {
  const currBacks = getAvailableBacks();
  localStorage.setItem(
    boughtBacksKey,
    JSON.stringify(currBacks.concat(newBack))
  );
};

export const addCoins = (addedCoins: number) => {
  const currCoins = getCoins();
  localStorage.setItem(coinsKey, JSON.stringify(currCoins + addedCoins));
};

export const removeCoins = (removedCoins: number) => {
  const currCoins = getCoins();
  localStorage.setItem(coinsKey, JSON.stringify(currCoins - removedCoins));
};
export const getCoins = () => {
  const rawCoins = localStorage.getItem(coinsKey);
  const parsedCoins = rawCoins ? parseFloat(rawCoins) : 0;
  return isNaN(parsedCoins) ? 0 : parsedCoins;
};
