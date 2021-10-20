import { ReactNode } from "react";
import styles from "./cardPointBody.module.scss";

interface CardPointBodyProps {
  children: ReactNode;
}

export function CardPointBody({ children }: CardPointBodyProps) {
  return <section className={styles.cardPointBody}>{children}</section>;
}
