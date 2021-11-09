import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ItemContext } from "../contexts/ItemContext";
import { ModalContext } from "../contexts/ModalContext";
import { Button } from "../components/Button";
import { Items } from "../components/Items";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import styles from "../styles/register.module.scss";
import { Modal } from "../components/Modal";

interface IFormProps {
  entity: string;
  address: string;
  number: number;
  city: string;
  state: string;
  imageUrl: string;
}

const schema = yup.object({
  entity: yup.string().required("Campo entidade obrigatório"),
  address: yup.string().required("Campo endereço obrigatório"),
  number: yup.number().required().typeError("Campo número obrigatório"),
  city: yup.string().required("Campo cidade obrigatório"),
  state: yup.string().required("Campo estado obrigatório"),
  imageUrl: yup.string().required("Campo link da imagem obrigatório"),
});

export function Register() {
  const { items } = useContext(ItemContext);
  const { openModal, closeModal } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit: SubmitHandler<IFormProps> = async (point) => {
    const formattedPoint = {
      entity: point.entity,
      items,
      address: point.address,
      number: point.number,
      city: point.city,
      state: point.state,
      imageUrl: point.imageUrl,
    };

    await api
      .post("points", formattedPoint)
      .then(() => {
        openModal();
        toast.success("Cadastro concluído com sucesso!");

        setTimeout(() => {
          closeModal();
          history.push("/");
        }, 2000);
      })
      .catch(() => {
        toast.error("Occorreu um erro");
      });
  };

  return (
    <>
      <Modal>
        <FiCheckCircle size={54} color="#34cb79" />
        <h3>Cadastro concluído!</h3>
      </Modal>
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

          <form id="formCreatePoint" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Nome da entidade"
              {...register("entity", { required: true })}
              error={errors.entity}
            />
            <div className={styles.address}>
              <Input
                type="text"
                label="Endereço"
                {...register("address")}
                error={errors.address}
              />
              <Input
                type="number"
                label="Número"
                {...register("number")}
                error={errors.number}
              />
            </div>
            <div className={styles.state}>
              <Input
                type="text"
                label="Cidade"
                {...register("city")}
                error={errors.city}
              />
              <Input
                type="text"
                label="Estado"
                {...register("state")}
                error={errors.state}
              />
            </div>
            <Input
              type="text"
              label="Link da imagem"
              {...register("imageUrl")}
              error={errors.imageUrl}
            />
          </form>

          <div className={styles.subtitle}>
            <h2>Itens de coleta</h2>
            <p>Selecione um ou mais itens abaixo</p>
          </div>

          <Items />

          <div className={styles.submitting}>
            <Button
              form="formCreatePoint"
              type="submit"
              text="Cadastrar ponto de coleta"
            />
          </div>
        </section>
      </main>
    </>
  );
}
