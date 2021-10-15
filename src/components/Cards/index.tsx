import { CardBody } from "./CardBody";
import { CardItem } from "./CardItem";
import Lampadas from "../../assets/collectItems/Lampadas.svg";
import Baterias from "../../assets/collectItems/Baterias.svg";
import Papeis from "../../assets/collectItems/Papeis.svg";
import Eletronicos from "../../assets/collectItems/Eletronicos.svg";
import Organicos from "../../assets/collectItems/Organicos.svg";
import Oleo from "../../assets/collectItems/Oleo.svg";

export function Cards() {
  return (
    <CardBody>
      <CardItem image={Lampadas} name="Lâmpadas" />
      <CardItem image={Baterias} name="Pilhas e Baterias" />
      <CardItem image={Papeis} name="Papéis e Papelão" />
      <CardItem image={Eletronicos} name="Resíduos Eletrônicos" />
      <CardItem image={Organicos} name="Resíduos Orgânicos" />
      <CardItem image={Oleo} name="Óleo de Cozinha" />
    </CardBody>
  );
}
