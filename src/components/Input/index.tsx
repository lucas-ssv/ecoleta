import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <label className={styles.label} htmlFor={label}>
      {label}
      <input {...rest} />
    </label>
  );
}
