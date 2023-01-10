import { Card } from "./Card/Card";

type GameboardProps = Readonly<{
  size: number;
}>;

export const Gameboard = ({ size }: GameboardProps) => {
  const shuffle = (values: string[]) => {};
  const cards = ["a1", "a2", "b1", "b2", "c1", "c2", "d1", "d2"];
  const shuffled = shuffle(cards);
  return (
    <ul>
      {cards.map((card) => {
        return (
          <li key={card}>
            <Card card={card} />
          </li>
        );
      })}
    </ul>
  );
};
