import { GameMode } from "./types";

const easy = [
  "#846ee7",
  "#e14141",
  "#807e78",
  "#afa8ae",
  "#c76fe5",
  "#cde470",
  "#e8c36d",
  "#de4587",
  "#ec36d4",
  "#68e33f",
  "#368bed",
  "#2ed0f5",
  "#35eec9",
  "#7f4847",
  "#10b63c",
  "#9f7a1b",
  "#1e9d5b",
  "#1f2223",
  "#eef0f0",
  "#ffe6df",
];
const medium = ["lol"];
const hard = ["lol1"];
export const getMemoContent = (difficulty: GameMode) => {
  switch (difficulty) {
    case "color":
      return easy;
    case "word":
      return medium;
    case "number":
      return hard;
  }
};
