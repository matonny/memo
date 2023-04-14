import backs from "../../backs.module.css";
import { Button } from "../Button/Button";
import { Back } from "../types";
import styles from "./CardSelect.module.css";
type CardSelectProps = Readonly<{
  back: string;
  bought: boolean;
  buy: () => void;
  select: () => void;
  selected: boolean;
}>;

export const CardSelect = ({
  back,
  bought,
  buy,
  select,
  selected,
}: CardSelectProps) => {
  return (
    <div className={styles.cardContainer}>
      {selected && <div className={styles.selected}></div>}
      <div className={`${backs[back]} ${styles.box}`}></div>

      <p className="">{back}</p>
      {!bought ? (
        <Button onclick={buy} value="buy" size="small"></Button>
      ) : (
        <Button onclick={select} value="select" size="small"></Button>
      )}
    </div>
  );
};
