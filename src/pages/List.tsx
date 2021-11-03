import { useEffect, useMemo, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../components/Header";
import { CardPoints } from "../components/CardPoints";
import styles from "../styles/list.module.scss";
import "../styles/common.scss";
import { api } from "../services/api";

interface Point {
  points: [];
}

export function List() {
  const [points, setPoints] = useState([]);
  const sizePoints = useMemo(() => points.length, [points]);

  useEffect(() => {
    api
      .get<Point>("points")
      .then((response) => setPoints(response.data.points));
  }, []);

  return (
    <section className={styles.listContainer}>
      <main className="container">
        <Header
          Icon={<FiArrowLeft size={24} color="#34cb79" />}
          path="/"
          text="Voltar para home"
        />
        <div className={styles.foundPoints}>
          <strong>{sizePoints} pontos </strong>
          <span>encontrados</span>
        </div>
      </main>
      <article>
        <CardPoints points={points} />
      </article>
    </section>
  );
}
