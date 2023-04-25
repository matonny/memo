import { useContext } from "react";
import styles from "./Button.module.css";
import { LightModeContext } from "../../hooks/lightModeContext";

type ButtonProps = Readonly<{
  onclick: () => void;
  value: string;
  size: "small" | "normal" | "big";
  submit?: boolean;
}>;
export const Button = ({ value, onclick, size, submit }: ButtonProps) => {
  const darkMode = useContext(LightModeContext);
  return (
    <button
      name={value}
      type={submit ? "submit" : "button"}
      className={`${styles.button} ${styles[size]} ${
        darkMode ? styles.dark : ""
      }`}
      aria-pressed="false"
      onClick={onclick}
    >
      {value}
    </button>
  );
};
