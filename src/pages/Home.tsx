import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { CommonProps } from "react-select";
import { FiLogIn, FiSearch } from "react-icons/fi";
import { api } from "../services/api";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { ModalContext } from "../contexts/ModalContext";
import { AsyncSelect } from "../components/AsyncSelect";
import { Button } from "../components/Button";
import Background from "../assets/Background.svg";
import Pessoas from "../assets/Pessoas.svg";
import styles from "../styles/home.module.scss";
import "../styles/common.scss";
import { toast } from "react-toastify";

interface AsyncSelectProps {
  label: string;
  value: string;
}

interface Points {
  points: {
    city: string;
    state: string;
  }[];
}

export function Home() {
  const [cities, setCities] = useState<AsyncSelectProps[]>([]);
  const [states, setStates] = useState<AsyncSelectProps[]>([]);
  const { openModal, closeModal } = useContext(ModalContext);
  const citiesRef = useRef<CommonProps<AsyncSelectProps, false, any>>(null);
  const statesRef = useRef<CommonProps<AsyncSelectProps, false, any>>(null);
  const history = useHistory();

  useEffect(() => {
    api.get<Points>("points").then((response) => {
      const data = response.data.points;

      data?.forEach((item) => {
        setCities((city) => [...city, { label: item.city, value: item.city }]);
        setStates((state) => [
          ...state,
          { label: item.state, value: item.state },
        ]);
      });
    });
  }, []);

  function handleSearchPoints() {
    const city = citiesRef.current?.getValue();
    const state = statesRef.current?.getValue();

    if (!city?.length || !state?.length) {
      toast.warning("Preencha todos os campos");
      return;
    }

    history.push({
      pathname: "/list",
      state: {
        city: city[0].value,
        state: state[0].value,
      },
    });
    closeModal();
  }

  return (
    <>
      <Modal>
        <h1>Pontos de coleta</h1>

        <AsyncSelect
          items={cities}
          name="city"
          placeholder="Digite a cidade"
          ref={citiesRef}
        />
        <AsyncSelect
          items={states}
          name="state"
          placeholder="Digite o estado"
          ref={statesRef}
        />
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
