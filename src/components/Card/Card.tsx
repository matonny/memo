import styles from "./Card.module.css";
import backs from "../../backs.module.css";
import { useContext } from "react";
import { LightModeContext } from "../../hooks/lightModeContext";

type CardProps = Readonly<{
  card: string;
  flipped: boolean;
  onClick: () => void;
  back: string;
  color?: string;
}>;
export const Card = ({ card, flipped, onClick, back, color }: CardProps) => {
  const darkMode = useContext(LightModeContext);

  const contentClass = `${styles.content} ${flipped ? styles.active : ""}`;
  const frontClass = `${styles.cardFront} ${darkMode ? styles.dark : ""}`;
  const backClass = `${styles.cardBack} ${darkMode ? styles.dark : ""} ${
    backs[back]
  }`;

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onClick();
    }
    if (event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };
  return (
    <div
      className={styles.card}
      tabIndex={0}
      aria-pressed={flipped}
      role="button"
      onClick={onClick}
      onKeyDown={(event) => handleOnKeyDown(event)}
    >
      <div className={contentClass}>
        <div className={frontClass} style={{ backgroundColor: color }}>
          {color ? "" : card}
        </div>
        <div className={backClass}></div>
      </div>
    </div>
  );
};
