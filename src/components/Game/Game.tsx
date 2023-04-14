import { useContext, useState } from "react";
import { Gameboard } from "../Gameboard/Gameboard";
import { GameMode, GameState } from "../types";
import styles from "./Game.module.css";
import { Button } from "../Button/Button";
import { LightModeContext } from "../../hooks/lightModeContext";
type GameProps = {
  changeState: React.Dispatch<React.SetStateAction<GameState>>;
};
export const Game = ({ changeState }: GameProps) => {
  const minValue = 4;
  const maxValue = 20;
  const gameModes = ["color", "word", "number"] as GameMode[];
  const [cardNumber, setCardNumber] = useState(minValue);
  const [currGameMode, setCurrGameMode] = useState<GameMode>("color");
  const [play, setPlay] = useState(false);
  const lightMode = useContext(LightModeContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlay(true);
  };
  const gameSettings = (
    <form
      className={`${styles.gameSettingsForm} ${styles[lightMode]}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className={styles.promptName}>Number of cards:</p>
      <label className={styles.label}>
        <span className={styles.labelDesc}>{cardNumber}</span>
        <input
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
                  className={`${styles.customRadio} ${styles[lightMode]}`}
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
      <Button
        onclick={() => changeState("menu")}
        size="normal"
        value="menu"
      ></Button>
    </>
  );
};
