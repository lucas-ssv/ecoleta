import { MutableRefObject, useContext, useRef } from "react";
import { CardItemContext } from "../../../contexts/CardItemContext";
import styles from "./cardItem.module.scss";

interface CardItemProps {
  image: string;
  name: string;
}

export function CardItem({ image, name }: CardItemProps) {
  const { handleSelectItem } = useContext(CardItemContext);
  const buttonRef = useRef<HTMLButtonElement>(
    null
  ) as MutableRefObject<HTMLButtonElement>;

  return (
    <button
      className={styles.cardButton}
      onClick={() => handleSelectItem(buttonRef)}
      ref={buttonRef}
    >
      <img src={image} alt={name} />
      <p>{name}</p>
    </button>
  );
}
