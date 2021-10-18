import { MutableRefObject, useContext, useRef } from "react";
import { ItemContext } from "../../../contexts/ItemContext";
import styles from "./item.module.scss";

interface ItemProps {
  image: string;
  name: string;
}

export function Item({ image, name }: ItemProps) {
  const { handleSelectItem } = useContext(ItemContext);
  const buttonRef = useRef<HTMLButtonElement>(
    null
  ) as MutableRefObject<HTMLButtonElement>;

  return (
    <button
      className={styles.itemButton}
      onClick={() => handleSelectItem(buttonRef)}
      ref={buttonRef}
    >
      <img src={image} alt={name} />
      <p>{name}</p>
    </button>
  );
}
