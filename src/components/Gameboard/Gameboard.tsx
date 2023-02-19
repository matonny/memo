import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { GameMode, GameState } from "../types";
import { getMemoContent } from "../memoContent";
import "./Gameboard.css";
import { Timer } from "../../Timer/Timer";

type GameboardProps = Readonly<{
  size: number;
  difficulty: GameMode;
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
}>;

export const Gameboard = ({
  size,
  changeState,
  difficulty,
}: GameboardProps) => {
  const checkGuess = () => {
    if (flippedCards.length == 2) {
      if (flippedCards[0].slice(0, -1) === flippedCards[1].slice(0, -1)) {
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
  const prepareCards = () => {
    const rawCards = getMemoContent(difficulty);
    const selectedCards = shuffle(rawCards).slice(0, size);
    return shuffle(addIds(selectedCards));
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
  const [secondsPlayed, setSecondsPlayed] = useState(0);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [guessedCards, setGuessedCards] = useState<string[]>([]);
  const [cards, setCards] = useState(prepareCards());
  if (flippedCards.length == 2) {
    checkGuess();
  }
  useEffect(() => {
    if (flippedCards.length == 2) {
      checkGuess();
    }
    if (guessedCards.length == size * 2) {
      changeState("menu");
    }
  }, [flippedCards]);

  return (
    <>
      <Timer updateSecondsPassed={setSecondsPlayed} />
      <ul className="gameboard">
        {cards.map((card) => {
          const currFlipped =
            flippedCards.includes(card) || guessedCards.includes(card);
          const cardWithoutId = card.slice(0, -1);
          return (
            <li key={card}>
              <Card
                card={cardWithoutId}
                color={difficulty == "color" ? cardWithoutId : undefined}
                back="pl"
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
    </>
  );
};
