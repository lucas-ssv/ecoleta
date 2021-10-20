import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
}

export const Input = forwardRef(
  ({ label, error, ...rest }: InputProps, ref: any) => {
    return (
      <label className={styles.label} htmlFor={label} ref={ref}>
        {label}
        <input {...rest} />
        {error && (
          <FiAlertCircle size={20} color="#e91e63" title={error.message} />
        )}
      </label>
    );
  }
);
