import { backNames } from "./constants";

export type GameState = "menu" | "game" | "customise" | "score";

export type GameMode = "color" | "word" | "number";

export type BackName = typeof backNames[number];
