import { CardPointBody } from "./CardPointBody";
import { CardPointItem } from "./CardPointItem";

interface Point {
  id: string;
  entity: string;
  items: Array<string>;
  address: string;
  number: number;
  city: string;
  state: string;
  imageUrl: string;
}

interface CardPointsProps {
  points: Point[];
}

export function CardPoints({ points }: CardPointsProps) {
  return (
    <CardPointBody>
      {points?.map((point) => (
        <CardPointItem key={point.id} point={point} />
      ))}
    </CardPointBody>
  );
}
