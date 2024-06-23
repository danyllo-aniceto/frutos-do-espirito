import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import CarrosselItem from "./Components/CarrosselItem";

interface CarrosselProps {
  items: {
    titulo: string;
    imagemUrl: string;
    descricao: string;
    link: string;
    cor: string;
  }[];
}

const slideInNext = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideOutNext = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const slideInPrev = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideOutPrev = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const continuousDiagonalGradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const CarrosselContainer = styled.div<{ cor?: string }>`
  width: 300px;
  height: 400px;
  background: linear-gradient(
    -50deg,
    ${(props) => props.cor || "#e73c7e"},
    ${(props) => props.cor || "#23a6d5"},
    ${(props) => props.cor || "#23d5ab"}
  );
  background-size: 400% 400%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${continuousDiagonalGradientAnimation} 5s linear infinite;
  }
`;

const CarrosselContent = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const CarrosselItemWrapper = styled.div<{ animation: string }>`
  display: flex;
  justify-content: center;
  min-width: 100%;
  ${(props) =>
    props.animation === "slideInNext" &&
    css`
      animation: ${slideInNext} 0.5s forwards;
    `}
  ${(props) =>
    props.animation === "slideOutNext" &&
    css`
      animation: ${slideOutNext} 0.5s forwards;
    `}
  ${(props) =>
    props.animation === "slideInPrev" &&
    css`
      animation: ${slideInPrev} 0.5s forwards;
    `}
  ${(props) =>
    props.animation === "slideOutPrev" &&
    css`
      animation: ${slideOutPrev} 0.5s forwards;
    `}
`;
const BotaoNavegacao = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #d8d8d8;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }

  &.anterior {
    left: 10px;
  }

  &.proximo {
    right: 10px;
  }
`;

const Carrossel: React.FC<CarrosselProps> = ({ items }) => {
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
