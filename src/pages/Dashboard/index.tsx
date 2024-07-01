import { BaseLayout } from "../../Components/BaseLayout";
import { Card } from "../../Components/Card";
import { CardContainer, H1 } from "./style";
import fruits from "../../consts/fruits";
import { StyledLink } from "../FruitContent/style";

export function Dashboard() {
  return (
    <BaseLayout>
      <H1>
        &nbsp; "Mas o fruto do Espírito é: amor, alegria, paz, longanimidade,
        benignidade, bondade, fidelidade, mansidão, domínio próprio. Contra
        estas coisas não há lei." - Gálatas 5: 22-23
      </H1>
      <CardContainer>
        {fruits.map((fruit) => (
          <StyledLink to={`/fruit/${fruit.id}`} key={fruit.id}>
            <Card
              key={fruit.id}
              color={fruit.color}
              description={fruit.description}
              imageUrl={fruit.image}
              title={fruit.name}
            />
          </StyledLink>
        ))}
      </CardContainer>
    </BaseLayout>
  );
}
