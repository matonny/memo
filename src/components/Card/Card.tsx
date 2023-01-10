import { useState } from "react";
import "./Card.css";

type CardProps = Readonly<{
  card: string;
  flipped: boolean;
  onClick: () => void;
}>;
export const Card = ({ card, flipped, onClick }: CardProps) => {
  const contentClass = "content " + (flipped ? "active" : "");
  const frontClass = "cardFront";
  const backClass = "cardBack";
  return (
    <div className="card" onClick={onClick}>
      <div className={contentClass}>
        <div className={frontClass}>Front</div>
        <div className={backClass}>Back</div>
      </div>
    </div>
  );
};
