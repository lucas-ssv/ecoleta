import { ItemBody } from "./ItemBody";
import { Item } from "./Item";
import Lampadas from "../../assets/collectItems/Lampadas.svg";
import Baterias from "../../assets/collectItems/Baterias.svg";
import Papeis from "../../assets/collectItems/Papeis.svg";
import Eletronicos from "../../assets/collectItems/Eletronicos.svg";
import Organicos from "../../assets/collectItems/Organicos.svg";
import Oleo from "../../assets/collectItems/Oleo.svg";

export function Items() {
  return (
    <ItemBody>
      <Item image={Lampadas} name="Lâmpadas" />
      <Item image={Baterias} name="Pilhas e Baterias" />
      <Item image={Papeis} name="Papéis e Papelão" />
      <Item image={Eletronicos} name="Resíduos Eletrônicos" />
      <Item image={Organicos} name="Resíduos Orgânicos" />
      <Item image={Oleo} name="Óleo de Cozinha" />
    </ItemBody>
  );
}
