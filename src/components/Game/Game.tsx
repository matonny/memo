import { useContext, useState } from "react";
import { Gameboard } from "../Gameboard/Gameboard";
import { GameMode } from "../../types";
import styles from "./Game.module.css";
import { Button } from "../Button/Button";
import { LightModeContext } from "../../hooks/lightModeContext";
export const Game = () => {
  const minValue = 4;
  const maxValue = 20;
  const gameModes = ["color", "word", "number"] as GameMode[];
  const [cardNumber, setCardNumber] = useState(minValue);
  const [currGameMode, setCurrGameMode] = useState<GameMode>("color");
  const [play, setPlay] = useState(false);
  const darkMode = useContext(LightModeContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlay(true);
  };
  const gameSettings = (
    <form
      className={`${styles.gameSettingsForm} ${darkMode ? styles.dark : ""}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className={styles.promptName}>Number of cards:</p>
      <label className={styles.label}>
        <span className={styles.labelDesc}>{cardNumber}</span>
        <input
          className={`${styles.slider} ${darkMode ? styles.dark : ""}`}
          type="range"
          min={minValue}
          max={maxValue}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.valueAsNumber)}
        />
      </label>
      <p className={styles.promptName}>Game mode: </p>
      <ul className={styles.gameModesList}>
        {gameModes.map((gameMode) => {
          return (
            <li className={styles.gameModeOption} key={gameMode}>
              <label className={styles.label}>
                <input
                  name={gameMode}
                  type="radio"
                  value={gameMode}
                  id={gameMode}
                  className={styles.radioInput}
                  checked={currGameMode === gameMode}
                  onChange={(e) => setCurrGameMode(e.target.value as GameMode)}
                />
                <span
                  className={`${styles.customRadio} ${
                    darkMode ? styles.dark : ""
                  }`}
                ></span>
                {gameMode}
              </label>
            </li>
          );
        })}
      </ul>
      <Button onclick={() => {}} submit size="small" value="submit"></Button>
    </form>
  );
  return (
    <>
      {!play ? (
        gameSettings
      ) : (
        <Gameboard size={cardNumber} difficulty={currGameMode} />
      )}
    </>
  );
};
