export type GameState = "menu" | "game" | "customise" | "score";

export type GameMode = "color" | "word" | "number";

export const backs = ["liliac", "yellow", "pl"] as const;
export type Back = typeof backs[number];
