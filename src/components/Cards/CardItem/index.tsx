import styles from "./cardItem.module.scss";

export function CardItem() {
  return (
    <div className={styles.cardItem}>
      <img
        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=352&h=198&q=80"
        alt="recycle"
      />
      <h1>Colectoria</h1>
      <strong>Resíduos eletrônicos, Lâmpadas</strong>
      <p>Rio do Sul, Santa Catarina</p>
      <p>Guilherme Gemballa, Jardim América</p>
      <p>Nº 260</p>
    </div>
  );
}
