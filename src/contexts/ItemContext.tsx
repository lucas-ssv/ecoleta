import { createContext, MutableRefObject, ReactNode, useState } from "react";
import styles from "../components/Items/Item/item.module.scss";

type ItemContextProps = {
  items: Array<string>;
  handleSelectItem: (buttonRef: MutableRefObject<HTMLButtonElement>) => void;
};

type ItemProviderProps = {
  children: ReactNode;
};

export const ItemContext = createContext({} as ItemContextProps);

export function ItemProvider({ children }: ItemProviderProps) {
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
    <ItemContext.Provider value={{ handleSelectItem, items }}>
      {children}
    </ItemContext.Provider>
  );
}
