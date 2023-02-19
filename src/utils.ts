export const shuffle = (values: string[]) => {
  return values.reduce((acc, currVal, index) => {
    const j = Math.floor(Math.random() * (index + 1));
    return index !== j
      ? [...acc.slice(0, j), currVal, ...acc.slice(j + 1), acc[j]]
      : [...acc, currVal];
  }, [] as string[]);
};

export const addIds = (cards: string[]) => {
  return cards.reduce(
    (prev, curr) => prev.concat([curr + "1", curr + "2"]),
    [] as string[]
  );
};

export const getCardMultiplier = (cardCount: number) => {
  const gradeOneMultiplier = 1;
  const gradeTwoMultiplier = 1.25;
  const gradeThreeMultiplier = 2;
  const gradeFourMultipler = 3;

  if (cardCount < 8) {
    return gradeOneMultiplier;
  } else if (cardCount < 12) {
    return gradeTwoMultiplier;
  } else if (cardCount < 16) {
    return gradeThreeMultiplier;
  } else {
    return gradeFourMultipler;
  }
};
