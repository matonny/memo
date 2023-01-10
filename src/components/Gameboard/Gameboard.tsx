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
    incorrectGuess();
  };
  const correctGuess = () => {
    setGuessedCards(guessedCards.concat(flippedCards));
    setFlippedCards([]);
  };
  const incorrectGuess = () => {
    setFlippedCards([]);
  };
  const shuffle = (values: string[]) => {};
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [guessedCards, setGuessedCards] = useState<string[]>([]);
  const cards = ["a1", "a2", "b1", "b2", "c1", "c2", "d1", "d2"];
  console.log(flippedCards.length);
  const shuffled = shuffle(cards);
  if (flippedCards.length == 2) {
    setTimeout(checkGuess, 1000);
  }
  return (
    <ul>
      {cards.map((card, index) => {
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
                      console.log("huh");
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
