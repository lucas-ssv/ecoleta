import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../components/Button";
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import styles from "../styles/register.module.scss";

export function Register() {
  return (
    <main className="container">
      <Header
        Icon={<FiArrowLeft size={24} color="#34cb79" />}
        path="/"
        text="Voltar para home"
      />

      <section className={styles.registerContainer}>
        <h1>Cadastro do ponto de coleta</h1>
        <div className={styles.subtitle}>
          <h2>Dados da entidade</h2>
        </div>

        <form>
          <Input type="text" name="entity" label="Nome da entidade" />
          <div className={styles.address}>
            <Input type="text" name="address" label="Endereço" />
            <Input type="number" name="number" label="Número" />
          </div>
          <div className={styles.state}>
            <Input type="text" name="city" label="Cidade" />
            <Input type="text" name="state" label="Estado" />
          </div>
          <Input type="text" name="image" label="Link da imagem" />
        </form>

        <div className={styles.subtitle}>
          <h2>Itens de coleta</h2>
          <p>Selecione um ou mais itens abaixo</p>
        </div>

        <Cards />

        <div className={styles.submitting}>
          <Button type="button" text="Cadastrar ponto de coleta" />
        </div>
      </section>
    </main>
  );
}
