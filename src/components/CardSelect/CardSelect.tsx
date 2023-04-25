import { useContext } from "react";
import backs from "../../backs.module.css";
import { Button } from "../Button/Button";
import styles from "./CardSelect.module.css";
import { LightModeContext } from "../../hooks/lightModeContext";
type CardSelectProps = Readonly<{
  back: string;
  bought: boolean;
  buy: () => boolean;
  select: () => void;
  price: number;
  selected: boolean;
}>;

export const CardSelect = ({
  back,
  bought,
  buy,
  select,
  price,
  selected,
}: CardSelectProps) => {
  const darkMode = useContext(LightModeContext);
  return (
    <div className={`${styles.cardContainer} ${darkMode ? styles.dark : ""}`}>
      {selected && (
        <div
          className={`${styles.selected} ${darkMode ? styles.dark : ""}`}
        ></div>
      )}
      <div
        className={`${backs[back]} ${styles.box} ${
          darkMode ? styles.dark : ""
        }`}
      ></div>

      <div className={styles.selectContent}>
        {!bought ? (
          <>
            <p className={styles.text}>{price}</p>
            <Button
              onclick={() => {
                if (buy()) {
                  select();
                }
              }}
              value="unlock"
              size="small"
            ></Button>
          </>
        ) : (
          <>
            <Button onclick={select} value="select" size="small"></Button>
          </>
        )}
      </div>
    </div>
  );
};
