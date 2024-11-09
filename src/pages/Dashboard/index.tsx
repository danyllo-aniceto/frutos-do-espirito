import { useEffect, useState } from "react";
import { BaseLayout } from "../../Components/BaseLayout";
import { Card } from "../../Components/Card";
import { CardContainer, H1 } from "./style";
import fruits from "../../consts/fruits";
import { StyledLink } from "../FruitContent/style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "../../Components/Carousel";
import { CardGame } from "../../Components/CardGame";

export function Dashboard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BaseLayout>
      <H1>
        &nbsp; "Mas o fruto do Espírito é: amor, alegria, paz, longanimidade,
        benignidade, bondade, fidelidade, mansidão, domínio próprio. Contra
        estas coisas não há lei." - Gálatas 5: 22-23
      </H1>
      {isMobile ? (
        <Carousel cards={fruits} />
      ) : (
        <CardContainer>
          {fruits.map((fruit) => (
            <StyledLink to={`/fruit/${fruit.id}`} key={fruit.id}>
              <Card
                key={fruit.id}
                color={fruit.color}
                description={fruit.description}
                image={fruit.image}
                name={fruit.name}
                id={fruit.id}
                messages={fruit.messages}
              />
            </StyledLink>
          ))}
        </CardContainer>
      )}
      <StyledLink to={"/whatif"}>
        <CardGame />
      </StyledLink>
    </BaseLayout>
  );
}
