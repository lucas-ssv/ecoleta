import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      <strong>{text}</strong>
    </button>
  );
}
