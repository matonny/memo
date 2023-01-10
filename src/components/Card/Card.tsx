import { useState } from "react";
import "./Card.css";

type CardProps = Readonly<{
  card: string;
}>;
export const Card = ({ card }: CardProps) => {
  const [turned, setTurned] = useState(false);
  console.log(turned);
  const contentClass = "content " + (turned ? "active" : "");
  const frontClass = "cardFront";
  const backClass = "cardBack";
  return (
    <div
      className="card"
      onClick={() => {
        console.log("huh");
        setTurned(!turned);
      }}
    >
      <div className={contentClass}>
        <div className={frontClass}>Front</div>
        <div className={backClass}>Back</div>
      </div>
    </div>
  );
};
