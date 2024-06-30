import { useEffect, useState } from "react";
import { BaseLayout } from "../../Components/BaseLayout";
import { Card } from "../../Components/Card";
//import Carrossel from "../../Components/Carrossel";
//import { Carrossel } from "../../Components/Carrossel2";
//import items from "./items";
import { CardContainer, CarrosselContainer, H1 } from "./style";
import fruits from "../../consts/fruits";
import { StyledLink } from "../FruitContent/style";
//import { CardCarousel } from "../../Components/CardCarrossel";

export function Dashboard() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 750);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BaseLayout>
      <H1>
        &nbsp; "Mas o fruto do Espírito é: amor, alegria, paz, longanimidade,
        benignidade, bondade, fidelidade, mansidão, domínio próprio. Contra
        estas coisas não há lei." - Gálatas 5: 22-23
      </H1>

      {isWideScreen ? (
        <CardContainer>
          {/* {items.map((item, index) => (
            <Card
              key={index}
              color={item.cor}
              description={item.descricao}
              imageUrl={item.imagemUrl}
              title={item.titulo}
            />
          ))} */}
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
      ) : (
        <CarrosselContainer>
          {/* <Carrossel items={fruits} /> */}
          {/* <CardCarousel items={items} /> */}
        </CarrosselContainer>
      )}
    </BaseLayout>
  );
}
