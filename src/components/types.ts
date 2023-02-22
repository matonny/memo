export type GameState = "menu" | "game" | "customise" | "score";

export type GameMode = "color" | "word" | "number";

export type storageType = {
  highscores?: string[];
  coins?: number;
  unlocked?: string[];
};
