import { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "../../assets/Logo.svg";

interface HeaderProps {
  Icon: ReactElement;
  path: string;
  text: string;
}

export function Header({ Icon, path, text }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="ecoleta" />
      <Link to={`${path}`}>
        <div>
          {Icon}
          <strong>{text}</strong>
        </div>
      </Link>
    </header>
  );
}
