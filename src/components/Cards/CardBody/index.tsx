import { ReactNode } from "react";
import styles from "./cardBody.module.scss";

interface CardBodyProps {
  children: ReactNode;
}

export function CardBody({ children }: CardBodyProps) {
  return <section className={styles.collectionItems}>{children}</section>;
}
