import { useContext } from "react";
import backs from "../../backs.module.css";
import { Button } from "../Button/Button";
import styles from "./CardSelect.module.css";
import { LightModeContext } from "../../hooks/lightModeContext";
type CardSelectProps = Readonly<{
  back: string;
  bought: boolean;
  buy: () => void;
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
  const lightMode = useContext(LightModeContext);
  return (
    <div className={`${styles.cardContainer} ${styles[lightMode]}`}>
      {selected && (
        <div className={`${styles.selected} ${styles[lightMode]}`}></div>
      )}
      <div
        className={`${backs[back]} ${styles.box} ${styles[lightMode]}`}
      ></div>

      <p className="">{back}</p>
      {!bought ? (
        <div>
          <p>{price}</p>
          <Button onclick={buy} value="buy" size="small"></Button>
        </div>
      ) : (
        <Button onclick={select} value="select" size="small"></Button>
      )}
    </div>
  );
};
