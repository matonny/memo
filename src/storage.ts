import { storageType } from "./components/types";

export const addScore = (score: number) => {
  const currLocalStorage = localStorage.getItem("game");
};

export const prepareLocalStorage = () => {
  const storage = localStorage.getItem("game");
  if (storage == null) {
    const storageTemplate: storageType = {
      coins: 0,
      unlocked: [],
      highscores: [],
    };
    localStorage.setItem("game", JSON.stringify(storageTemplate));
  }
};
