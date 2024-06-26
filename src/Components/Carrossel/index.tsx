import React, { useState, useEffect } from "react";
import CarrosselItem from "./Components/CarrosselItem";
import {
  BotaoNavegacao,
  CarrosselContainer,
  CarrosselContent,
  CarrosselItemWrapper,
} from "./style";
import { ICarrosselProps } from "./types";

const Carrossel: React.FC<ICarrosselProps> = ({ items }) => {
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
    <CarrosselContainer cor={items[currentIndex].cor}>
      <CarrosselContent>
        <BotaoNavegacao className="anterior" onClick={handlePrevious}>
          &#10094;
        </BotaoNavegacao>
        <CarrosselItemWrapper animation={animation}>
          <CarrosselItem
            titulo={items[currentIndex].titulo}
            imagemUrl={items[currentIndex].imagemUrl}
            descricao={items[currentIndex].descricao}
            link={items[currentIndex].link}
            cor={items[currentIndex].cor}
          />
        </CarrosselItemWrapper>
        <BotaoNavegacao className="proximo" onClick={handleNext}>
          &#10095;
        </BotaoNavegacao>
      </CarrosselContent>
    </CarrosselContainer>
  );
};

export default Carrossel;
