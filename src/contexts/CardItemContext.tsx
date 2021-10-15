import { createContext, MutableRefObject, ReactNode, useState } from "react";
import styles from "../components/Cards/CardItem/cardItem.module.scss";

type CardItemContextProps = {
  items: Array<string>;
  handleSelectItem: (buttonRef: MutableRefObject<HTMLButtonElement>) => void;
};

type CardItemProviderProps = {
  children: ReactNode;
};

export const CardItemContext = createContext({} as CardItemContextProps);

export function CardItemProvider({ children }: CardItemProviderProps) {
  const [items, setItems] = useState<string[]>([]);

  function handleSelectItem(buttonRef: MutableRefObject<HTMLButtonElement>) {
    const itemName = buttonRef.current.textContent || "";
    buttonRef.current.classList.toggle(styles.actived);

    const itemIndex = items.findIndex((item) => item === itemName);

    if (itemIndex >= 0) {
      items.splice(itemIndex, 1);
      setItems([...items]);
      return;
    }

    setItems([...items, itemName]);
  }

  return (
    <CardItemContext.Provider value={{ handleSelectItem, items }}>
      {children}
    </CardItemContext.Provider>
  );
}
