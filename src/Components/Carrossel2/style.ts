import styled, { keyframes, css } from "styled-components";

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

export const CarrosselContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarrosselItemWrapper = styled.div<{ animation: string }>`
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

export const BotaoNavegacao = styled.button`
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
    left: 10px; /* Ajuste a distância da seta anterior */
  }

  &.proximo {
    right: 10px; /* Ajuste a distância da seta próximo */
  }
`;
