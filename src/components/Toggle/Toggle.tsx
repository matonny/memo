import styles from "./Toggle.module.css";

type ToggleProps = Readonly<{
  label: string;
  onclick: () => void;
}>;

export const Toggle = ({ label, onclick }: ToggleProps) => {
  return (
    <>
      <input
        onClick={onclick}
        className={styles.input}
        type="checkbox"
        id={label}
      ></input>
      <label htmlFor={label}></label>
    </>
  );
};
