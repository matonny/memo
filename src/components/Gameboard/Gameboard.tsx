import { useState } from "react";
import { Card } from "../Card/Card";

type GameboardProps = Readonly<{
  size: number;
}>;

export const Gameboard = ({ size }: GameboardProps) => {
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
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [guessedCards, setGuessedCards] = useState<string[]>([]);
  const [cards, setCards] = useState(
    shuffle(["a1", "a2", "b1", "b2", "c1", "c2", "d1", "d2"])
  );
  if (flippedCards.length == 2) {
    checkGuess();
  }
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
