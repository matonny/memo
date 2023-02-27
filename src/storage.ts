
export const addScore = (score: number) => {
  const scoreKey = "score"
  const rawStorage = localStorage.getItem(scoreKey);
  const currScores =  rawStorage ? JSON.parse(rawStorage) as number[] : [] as number[]
  console.log(currScores)
  currScores.push(score)
  console.log(currScores)
  localStorage.setItem(scoreKey, JSON.stringify(currScores))
};

export const addCoins = (newCoins:number) => {
  const coinsKey = "coins"
  const rawStorage = localStorage.getItem(coinsKey)
  const currCoins = rawStorage ? JSON.parse(rawStorage) as number : 0
  localStorage.setItem(coinsKey, JSON.stringify(currCoins+newCoins))
}

