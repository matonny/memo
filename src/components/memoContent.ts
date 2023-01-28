import { Difficulty } from "./types";

const easy = [
  "apple",
  "banana",
  "orange",
  "pear",
  "pineapple",
  "grape",
  "lemon",
  "grapefruit",
];
const medium = ["lol"];
const hard = ["lol1"];
export const getMemoContent = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "easy":
      return easy;
    case "medium":
      return medium;
    case "hard":
      return hard;
  }
};
