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
  return (
    <div className="card" onClick={onClick}>
      <div className={contentClass}>
        <div className={frontClass} style={{ backgroundColor: color }}>
          {color ? "" : card}
        </div>
        <div className={backClass}></div>
      </div>
    </div>
  );
};
