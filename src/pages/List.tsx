import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../components/Header";
import { Cards } from "../components/Cards";
import styles from "../styles/list.module.scss";
import "../styles/common.scss";

export function List() {
  return (
    <section className={styles.listContainer}>
      <main className="container">
        <Header
          Icon={<FiArrowLeft size={24} color="#34cb79" />}
          path="/"
          text="Voltar para home"
        />
        <div className={styles.foundPoints}>
          <strong>2 pontos </strong>
          <span>encontrados</span>
        </div>
      </main>
      <article>
        <Cards />
      </article>
    </section>
  );
}
