import { useState } from "react";
import { Card } from "./Card/Card";

type GameboardProps = Readonly<{
  size: number;
}>;

export const Gameboard = ({ size }: GameboardProps) => {
  const correctGuess = () => {
    setGuessedCards(guessedCards.concat(flippedCards));
    incorrectGuess();
  };
  const incorrectGuess = () => {
    setFlippedCards([]);
  };
  const shuffle = (values: string[]) => {};
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [guessedCards, setGuessedCards] = useState<number[]>([]);
  const cards = ["a1", "a2", "b1", "b2", "c1", "c2", "d1", "d2"];
  console.log(flippedCards.length);
  const shuffled = shuffle(cards);
  if (flippedCards.length == 2) {
    setTimeout(incorrectGuess, 1000);
  }
  return (
    <ul>
      {cards.map((card, index) => {
        const currFlipped = flippedCards.includes(index);
        return (
          <li key={card}>
            <Card
              card={card}
              flipped={currFlipped}
              onClick={
                !currFlipped && flippedCards.length < 2
                  ? () => {
                      console.log("huh");
                      setFlippedCards(flippedCards.concat(index));
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
