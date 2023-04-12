import "./Button.css";

type ButtonProps = Readonly<{
  onclick: () => void;
  value: string;
  size: "small" | "normal" | "big";
}>;
export const Button = ({ value, onclick, size }: ButtonProps) => {
  return (
    <button
      name={value}
      type="button"
      role="button"
      className={`button ${size}`}
      aria-pressed="false"
      onClick={onclick}
    >
      {value}
    </button>
  );
};
