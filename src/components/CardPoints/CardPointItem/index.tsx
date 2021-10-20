import styles from "./cardPointItem.module.scss";

interface CardPointItemProps {
  point: {
    id: string;
    entity: string;
    items: Array<string>;
    address: string;
    number: number;
    city: string;
    state: string;
    imageUrl: string;
  };
}

export function CardPointItem({ point }: CardPointItemProps) {
  return (
    <div className={styles.cardPointItem}>
      <img src={point.imageUrl} alt={point.entity} />
      <h1>{point.entity}</h1>
      <strong>{point.items.join(", ")}</strong>
      <p>
        {point.city}, {point.state}
      </p>
      <p>{point.address}</p>
      <p>Nº {point.number}</p>
    </div>
  );
}
