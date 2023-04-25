import { BackName } from "./types";
import { backNames } from "./constants";

const scoreKey = "score";
const coinsKey = "coins";
const currentBackKey = "currentBack";
const boughtBacksKey = "boughtCovers";

export const initStorage = () => {};
const isBack = (potentialBack: unknown): potentialBack is BackName => {
  return backNames.filter((someBack) => someBack === potentialBack).length > 0;
};

export const addScore = (score: number) => {
  const maxScoresStored = 10;
  const currScores = getScores().concat([score]);
  const bestScores = currScores
    .sort((a, b) => {
      console.log(a);
      console.log(b);
      return a - b;
    })
    .reverse()
    .slice(0, maxScoresStored);
  console.log(bestScores);
  localStorage.setItem(scoreKey, JSON.stringify(bestScores));
};

export const getScores = () => {
  const scoreKey = "score";
  const rawStorage = localStorage.getItem(scoreKey);
  const parsedScores = rawStorage ? JSON.parse(rawStorage) : [];
  if (Array.isArray(parsedScores)) {
    return parsedScores.map(parseFloat).filter((elem) => !isNaN(elem));
  }
  return [];
};

export const getCurrentBack = () => {
  const defaultBack = "yellow";
  const rawBack = localStorage.getItem(currentBackKey);
  const parsedBack = rawBack ? JSON.parse(rawBack) : defaultBack;
  const backCover = isBack(parsedBack);
  return backCover ? parsedBack : defaultBack;
};
export const saveCurrentBack = (recentBack: BackName) => {
  localStorage.setItem(currentBackKey, JSON.stringify(recentBack));
};
export const getAvailableBacks = () => {
  const rawBoughtBacks = localStorage.getItem(boughtBacksKey);
  const parsedBoughtBacks = rawBoughtBacks ? JSON.parse(rawBoughtBacks) : [];
  if (Array.isArray(parsedBoughtBacks)) {
    return parsedBoughtBacks.filter(isBack);
  }
  return [];
};
export const buyBackIfEnoughCoins = (newBack: BackName, price: number = 50) => {
  const currCoins = getCoins();
  if (currCoins - price < 0) {
    alert("too pricy");
    return;
  }
  console.log("xd");
  removeCoins(price);
  addBoughtBack(newBack);
};
const addBoughtBack = (newBack: BackName) => {
  const currBacks = getAvailableBacks();
  localStorage.setItem(
    boughtBacksKey,
    JSON.stringify(currBacks.concat(newBack))
  );
};

export const addCoins = (addedCoins: number) => {
  const currCoins = getCoins();
  localStorage.setItem(coinsKey, JSON.stringify(currCoins + addedCoins));
  window.dispatchEvent(new Event("updated-coins"));
};

export const removeCoins = (removedCoins: number) => {
  const currCoins = getCoins();
  localStorage.setItem(coinsKey, JSON.stringify(currCoins - removedCoins));
  window.dispatchEvent(new Event("updated-coins"));
};
export const getCoins = () => {
  const rawCoins = localStorage.getItem(coinsKey);
  const parsedCoins = rawCoins ? parseInt(rawCoins) : 0;
  return isNaN(parsedCoins) ? 0 : parsedCoins;
};
