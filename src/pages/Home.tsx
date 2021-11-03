import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FiLogIn, FiSearch } from "react-icons/fi";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { ModalContext } from "../contexts/ModalContext";
import { AsyncSelect } from "../components/AsyncSelect";
import { Button } from "../components/Button";
import Background from "../assets/Background.svg";
import Pessoas from "../assets/Pessoas.svg";
import styles from "../styles/home.module.scss";
import "../styles/common.scss";

export function Home() {
  const { openModal, closeModal } = useContext(ModalContext);
  const history = useHistory();

  function handleSearchPoints() {
    history.push("/list");
    closeModal();
  }

  return (
    <>
      <Modal>
        <h1>Pontos de coleta</h1>

        <AsyncSelect placeholder="Digite a cidade" />
        <AsyncSelect placeholder="Digite a estado" />
        <Button type="button" text="Buscar" onClick={handleSearchPoints} />
      </Modal>

      <main className="homeContainer">
        <Header
          Icon={<FiLogIn size={24} color="#34cb79" />}
          path="/register"
          text="Cadastre um ponto de coleta"
        />
        <section className={styles.homeContent}>
          <img
            src={Background}
            className={styles.background}
            alt="background"
          />

          <div>
            <h1>Seu marketplace de coleta de resíduos.</h1>
            <p>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </p>
            <button type="button" onClick={openModal}>
              <span>
                <FiSearch size={24} color="#fff" />
              </span>
              <strong>Pesquisar pontos de coleta</strong>
            </button>
          </div>

          <img src={Pessoas} alt="pessoas" />
        </section>
      </main>
    </>
  );
}
