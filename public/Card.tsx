import { useState } from "react";

type CardProps = Readonly<{
  card: string;
  flipped: boolean;
}>;
export const Card = ({ card, flipped }: CardProps) => {
  const frontClass = "cardFront " + flipped ? "active" : "";
  const backClass = "cardBack " + !flipped ? "active" : "";
  const [turned, setTurned] = useState(false);
  return (
    <div
      className="card"
      onClick={() => {
        setTurned(!turned);
      }}
    >
      <div className="content">
        <div className={frontClass}>Front</div>
        <div className={backClass}>Back</div>
      </div>
    </div>
  );
};
