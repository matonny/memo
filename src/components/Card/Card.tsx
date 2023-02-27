import "./Card.css";

type CardProps = Readonly<{
  card: string;
  flipped: boolean;
  onClick: () => void;
  back: string;
  color?: string;
}>;
export const Card = ({ card, flipped, onClick, back, color }: CardProps) => {
  const contentClass = "content " + (flipped ? "active" : "");
  const frontClass = "cardFront";
  const backClass = "cardBack " + back;

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter") {
      onClick();
    }
    if (event.key == " ") {
      event.preventDefault();
      onClick();
    }
  };
  return (
    <div
      className="card"
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
        <div className={backClass}>{color}</div>
      </div>
    </div>
  );
};
