import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Difficulty, GameState } from "../types";
import { getMemoContent } from "../memoContent";

type GameboardProps = Readonly<{
  size: number;
  difficulty: Difficulty;
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
}>;

export const Gameboard = ({
  size,
  changeState,
  difficulty,
}: GameboardProps) => {
  const checkGuess = () => {
    if (flippedCards.length == 2) {
      console.log(flippedCards);
      if (flippedCards[0].charAt(0) == flippedCards[1].charAt(0)) {
        correctGuess();
        return;
      }
    }
    setTimeout(incorrectGuess, 1000);
  };

  const correctGuess = () => {
    setGuessedCards(guessedCards.concat(flippedCards));
    setFlippedCards([]);
  };

  const incorrectGuess = () => {
    setFlippedCards([]);
  };

  const shuffle = (values: string[]) => {
    return values.reduce((acc, currVal, index) => {
      const j = Math.floor(Math.random() * (index + 1));
      return index !== j
        ? [...acc.slice(0, j), currVal, ...acc.slice(j + 1), acc[j]]
        : [...acc, currVal];
    }, [] as string[]);
  };
  const addIds = (cards: string[]) => {
    return cards.reduce(
      (prev, curr) => prev.concat([curr + "1", curr + "2"]),
      [] as string[]
    );
  };
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [guessedCards, setGuessedCards] = useState<string[]>([]);
  const [cards, setCards] = useState(
    shuffle(addIds(getMemoContent(difficulty)))
  );
  if (flippedCards.length == 2) {
    checkGuess();
  }
  useEffect(() => {
    if (flippedCards.length == 2) {
      checkGuess();
    }
    if (guessedCards.length == size) {
      changeState("menu");
    }
  }, [flippedCards]);

  return (
    <ul>
      {cards.map((card) => {
        const currFlipped =
          flippedCards.includes(card) || guessedCards.includes(card);
        return (
          <li key={card}>
            <Card
              card={card}
              flipped={currFlipped}
              onClick={
                !currFlipped && flippedCards.length < 2
                  ? () => {
                      setFlippedCards(flippedCards.concat(card));
                    }
                  : () => {}
              }
            />
          </li>
        );
      })}
    </ul>
  );
};
