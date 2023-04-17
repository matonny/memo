import { useCallback, useContext, useMemo, useState } from "react";
import { Card } from "../Card/Card";
import { GameMode } from "../types";
import { getMemoContent } from "../memoContent";
import { Timer } from "../Timer/Timer";
import { addIds, getCardMultiplier, shuffle } from "../../utils";
import { addCoins, addScore, getCurrentBack } from "../../storage";

import styles from "./Gameboard.module.css";
import Confetti from "react-confetti";
import { LightModeContext } from "../../hooks/lightModeContext";

type GameboardProps = Readonly<{
  size: number;
  difficulty: GameMode;
}>;

export const Gameboard = ({ size, difficulty }: GameboardProps) => {
  const checkGuess = (guess: string[]) => {
    console.log(guess.length);
    if (guess.length === 2) {
      if (guess[0].slice(0, -1) === guess[1].slice(0, -1)) {
        correctGuess(guess);
        return;
      }
    }
    console.log("hello");
    setTimeout(incorrectGuess, 1000);
  };

  const finishGame = (finishScore: number) => {
    setGameOn(false);
    if (score > 0) {
      addScore(finishScore);
      const coins = Math.floor(score / 10);
      addCoins(coins);
    }
  };

  const correctGuess = (guess: string[]) => {
    const currGuessedCards = guessedCards.concat(guess);
    setGuessedCards(currGuessedCards);
    setFlippedCards([]);
    const rawGuessPoints = 50;
    const boostedGuessPoints =
      rawGuessPoints * Math.pow(2, combo) * getCardMultiplier(size);
    setCombo((prevCombo) => prevCombo + 1);
    const currScore = score + boostedGuessPoints;
    setScore(currScore);
    if (currGuessedCards.length === size * 2) {
      finishGame(currScore);
    }
  };

  const incorrectGuess = () => {
    const penalty = 20;
    setFlippedCards([]);
    setCombo(0);
    setScore((prevScore) => prevScore - penalty);
  };

  const prepareCards = useCallback(() => {
    const rawCards = getMemoContent(difficulty);
    const selectedCards = shuffle(rawCards).slice(0, size);
    return shuffle(addIds(selectedCards));
  }, [difficulty, size]);

  const handleClick = (isFlipped: boolean, card: string) => {
    if (!isFlipped && flippedCards.length < 2) {
      const currFliped = flippedCards.concat([card]);
      setFlippedCards(currFliped);
      if (currFliped.length === 2) {
        checkGuess(currFliped);
      }
    }
  };
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [guessedCards, setGuessedCards] = useState<string[]>([]);

  const cards = useMemo(() => prepareCards(), [prepareCards]);
  const currentBack = getCurrentBack();
  const lightMode = useContext(LightModeContext);

  const [gameOn, setGameOn] = useState(true);

  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <>
      <div className={`${styles.infoBoard} ${styles[lightMode]}`}>
        <div className={styles.infoLine}>
          <Timer updateScore={setScore} gameOn={gameOn} />
          <p className={styles.text}>{score}</p>
        </div>
        <p className={styles.text}>{gameOn ? " " : "You win!"}</p>
      </div>
      <ul className={styles.gameboard}>
        {cards.map((card) => {
          const currFlipped =
            flippedCards.includes(card) || guessedCards.includes(card);
          const cardWithoutId = card.slice(0, -1);
          return (
            <li key={card}>
              <Card
                card={cardWithoutId}
                color={difficulty === "color" ? cardWithoutId : undefined}
                back={currentBack}
                flipped={currFlipped}
                onClick={() => {
                  handleClick(currFlipped, card);
                }}
              />
            </li>
          );
        })}
      </ul>
      {!gameOn && <Confetti />}
    </>
  );
};
