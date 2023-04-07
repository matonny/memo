import { backs, Back } from "./components/types";

const scoreKey = "score";
const coinsKey = "coins";
const recentBackKey = "recentBack";
const boughtBacksKey = "boughtCovers";

export const initStorage = () => {};
const isBack = (potentialBack: unknown): potentialBack is Back => {
  return backs.filter((someBack) => someBack == potentialBack).length > 0;
};

export const addScore = (score: number) => {
  const maxScoresStored = 10;
  const currScores = getScores();
  console.log(addElemToSortedArrayWithCap(currScores, score, maxScoresStored));
  localStorage.setItem(
    scoreKey,
    JSON.stringify(
      addElemToSortedArrayWithCap(currScores, score, maxScoresStored)
    )
  );
};

export const getScores = () => {
  const scoreKey = "score";
  const rawStorage = localStorage.getItem(scoreKey);
  const parsedScores = rawStorage
    ? (JSON.parse(rawStorage) as number[])
    : ([] as number[]);
  return parsedScores;
};

export const getRecentBack = () => {
  const defaultBack = "yellow";
  const rawBack = localStorage.getItem(recentBackKey);
  const parsedBack = rawBack ? JSON.parse(rawBack) : defaultBack;
  const backCover = isBack(parsedBack);
  return backCover ? parsedBack : defaultBack;
};
export const saveRecentBack = (recentBack: Back) => {
  localStorage.setItem(coinsKey, JSON.stringify(recentBack));
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

const addElemToSortedArrayWithCap = (
  sortedArray: number[],
  numberToAdd: number,
  cap: number
) => {
  if (sortedArray.length === 0) {
    return [numberToAdd];
  }
  return sortedArray.reduce<number[]>((acc, currVal, index) => {
    if (index + 1 >= cap) {
      return acc;
    }
    if (
      (currVal >= numberToAdd && sortedArray[index + 1] < numberToAdd) ||
      (acc.length === sortedArray.length - 1 &&
        index === sortedArray.length - 1)
    ) {
      return acc.concat([currVal, numberToAdd]);
    }
    return acc.concat([currVal]);
  }, []);
};
