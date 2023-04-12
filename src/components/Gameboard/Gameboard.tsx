import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { GameMode, GameState } from "../types";
import { getMemoContent } from "../memoContent";
import { Timer } from "../Timer/Timer";
import { addIds, getCardMultiplier, shuffle } from "../../utils";
import { addCoins, addScore, getCurrentBack } from "../../storage";
import "./Gameboard.css";
import Confetti from "react-confetti";

type GameboardProps = Readonly<{
  size: number;
  difficulty: GameMode;
}>;

export const Gameboard = ({ size, difficulty }: GameboardProps) => {
  const checkGuess = () => {
    if (flippedCards.length == 2) {
      if (flippedCards[0].slice(0, -1) === flippedCards[1].slice(0, -1)) {
        correctGuess();
        return;
      }
    }
    setTimeout(incorrectGuess, 1000);
  };

  const finishGame = () => {
    setGameOn(false);
    if (score > 0) {
      addScore(score);
      const coins = Math.floor(score / 10);
      addCoins(coins);
    }
  };

  const correctGuess = () => {
    setGuessedCards(guessedCards.concat(flippedCards));
    setFlippedCards([]);
    const rawGuessPoints = 50;
    const boostedGuessPoints =
      rawGuessPoints * Math.pow(2, combo) * getCardMultiplier(size);
    console.log(boostedGuessPoints);
    console.log(combo);
    console.log(getCardMultiplier(size));
    setCombo((prevCombo) => prevCombo + 1);
    setScore((prevScore) => prevScore + boostedGuessPoints);
  };

  const incorrectGuess = () => {
    console.log(score);
    const penalty = 20;
    setFlippedCards([]);
    setCombo(0);
    setScore((prevScore) => prevScore - penalty);
  };

  const prepareCards = () => {
    const rawCards = getMemoContent(difficulty);
    const selectedCards = shuffle(rawCards).slice(0, size);
    return shuffle(addIds(selectedCards));
  };

  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [guessedCards, setGuessedCards] = useState<string[]>([]);
  const [currentBack, setCurrentBack] = useState(getCurrentBack);
  const [cards, setCards] = useState(prepareCards());
  const [gameOn, setGameOn] = useState(true);

  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (flippedCards.length == 2) {
      checkGuess();
    }
    if (guessedCards.length == size * 2) {
      finishGame();
    }
  }, [flippedCards]);
  return (
    <>
      <Timer updateScore={setScore} gameOn={gameOn} />
      <p className="text">{gameOn ? " " : "You win!"}</p>
      <p className="text">{score}</p>
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
                back={currentBack}
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
