const scoreKey = "score";
const coinsKey = "coins";

export const addScore = (score: number) => {
  const maxScoresStored = 3;
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

export const addCoins = (newCoins: number) => {
  const currCoins = getCoins();
  localStorage.setItem(coinsKey, JSON.stringify(currCoins + newCoins));
};
export const getCoins = () => {
  const rawStorage = localStorage.getItem(coinsKey);
  const parsedCoins = rawStorage ? (JSON.parse(rawStorage) as number) : 0;
  return parsedCoins;
};
const addElemToSortedArrayWithCap = (
  sortedArray: number[],
  numberToAdd: number,
  cap: number
) => {
  if (sortedArray.length == 0) {
    return [numberToAdd];
  }
  return sortedArray.reduce<number[]>((acc, currVal, index) => {
    if (index + 1 >= cap) {
      return acc;
    }
    if (
      (currVal >= numberToAdd && sortedArray[index + 1] < numberToAdd) ||
      (acc.length == sortedArray.length - 1 && index == sortedArray.length - 1)
    ) {
      return acc.concat([currVal, numberToAdd]);
    }
    return acc.concat([currVal]);
  }, []);
};
