import { ReactNode } from "react";
import styles from "./itemBody.module.scss";

interface ItemBodyProps {
  children: ReactNode;
}

export function ItemBody({ children }: ItemBodyProps) {
  return <section className={styles.collectionItems}>{children}</section>;
}
