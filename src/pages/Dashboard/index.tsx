import { BaseLayout } from "../../Components/BaseLayout";
import Carrossel from "../../Components/Carrossel";
import items from "./items";

export function Dashboard() {
  return (
    <BaseLayout>
      <p>
        Mas o fruto do Espírito é: amor, alegria, paz, longanimidade,
        benignidade, bondade, fidelidade,mansidão, domínio próprio. Contra estas
        coisas não há lei. - Gálatas 5: 22-23
      </p>
      <Carrossel items={items} />
    </BaseLayout>
  );
}
