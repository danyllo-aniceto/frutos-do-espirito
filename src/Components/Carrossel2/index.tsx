import { useEffect, useState } from "react";
import { Card } from "../Card";
import {
  BotaoNavegacao,
  CarrosselContent,
  CarrosselItemWrapper,
} from "./style";
import { ICarrosselProps } from "./types";

export function Carrossel({ items }: ICarrosselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (animation.includes("In")) {
      setTimeout(() => setAnimation(""), 500);
    }
  }, [animation]);

  const handlePrevious = () => {
    setAnimation("slideOutPrev");
    setTimeout(() => {
      const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setAnimation("slideInPrev");
    }, 500);
  };

  const handleNext = () => {
    setAnimation("slideOutNext");
    setTimeout(() => {
      const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setAnimation("slideInNext");
    }, 500);
  };

  return (
    <CarrosselContent>
      <BotaoNavegacao className="anterior" onClick={handlePrevious}>
        &#10094;
      </BotaoNavegacao>
      <CarrosselItemWrapper animation={animation}>
        <Card
          color={items[currentIndex].cor}
          description={items[currentIndex].descricao}
          imageUrl={items[currentIndex].imagemUrl}
          title={items[currentIndex].titulo}
        />
      </CarrosselItemWrapper>
      <BotaoNavegacao className="proximo" onClick={handleNext}>
        &#10095;
      </BotaoNavegacao>
    </CarrosselContent>
  );
}
