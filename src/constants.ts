import { GameMode } from "./types";

const colors = [
  "#A1A1A1",
  "#E79B7D",
  "#F5C990",
  "#FDF8A3",
  "#C9DEA1",
  "#93C89E",
  "#8ECAC7",
  "#86A5D6",
  "#8681BA",
  "#E69EBF",
  "#383838",
  "#87513E",
  "#907047",
  "#999354",
  "#69774C",
  "#416248",
  "#406462",
  "#3D5271",
  "#3A355F",
  "#8F5A72",
];
const words = [
  "apple",
  "chair",
  "table",
  "desk",
  "lamp",
  "turtle",
  "vile",
  "despicable",
  "dance",
  "spider",
  "laptop",
  "candy",
  "biscuit",
  "bassoon",
  "twilight",
  "rift",
  "note",
  "book",
  "pear",
  "slay",
];
const cardCount = 20;
const numbers = Array.from({ length: cardCount }, (_, i) => i + 1).map(
  (elem) => {
    const binaryNumber = elem.toString(2);
    const missingZeros = cardCount.toString(2).length - binaryNumber.length;
    return "0".repeat(missingZeros) + binaryNumber;
  }
);

export const getMemoContent = (gameMode: GameMode) => {
  switch (gameMode) {
    case "color":
      return colors;
    case "word":
      return words;
    case "number":
      return numbers;
  }
};

export const backNames = ["liliac", "yellow", "grey", "pl"] as const;

const backPrices = [50, 50, 50, 100];

export const backs = backNames.map((elem, index) => {
  return { backName: elem, backPrice: backPrices[index] };
});
