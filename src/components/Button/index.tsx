import { ButtonHTMLAttributes, memo } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function ButtonComponent({ text, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      <strong>{text}</strong>
    </button>
  );
}

export const Button = memo(ButtonComponent);
