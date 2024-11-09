import styled from "styled-components";
import { continuousDiagonalGradientAnimation } from "../../../../Components/CardGame/styles";

export const CardContainer = styled.div<{
  color: string | undefined;
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  padding: 20px;
  position: relative;
  background: ${(props) =>
    props.disabled
      ? "#d3d3d3"
      : `linear-gradient(-50deg, ${props.color || "#e73c7e"}, ${
          props.color || "#23a6d5"
        }, ${props.color || "#23d5ab"})`};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-size: 400% 400%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  @media (min-width: 751px) {
    &:hover {
      animation: ${continuousDiagonalGradientAnimation} 5s linear infinite;
    }
  }

  @media (max-width: 750px) {
    animation: ${continuousDiagonalGradientAnimation} 5s linear infinite;
    filter: brightness(0.9);
  }

  @media (max-width: 1000px) {
    width: 200px;
    height: 250px;
    padding: 10px;
  }

  @media (max-width: 800px) {
    width: 500px;
    height: 250px;
    padding: 10px;
    align-self: center;
  }

  @media (max-width: 550px) {
    width: 300px;
    align-self: center;
  }
  @media (max-width: 350px) {
    width: 280px;
    align-self: center;
  }
`;

export const Button = styled.button<{ color: string | undefined }>`
  align-self: center;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background: white;
  color: #2c3e50;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poetsen One", sans-serif;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    background: linear-gradient(
      -50deg,
      ${(props) => props.color || "#e73c7e"},
      ${(props) => props.color || "#23a6d5"},
      ${(props) => props.color || "#23d5ab"}
    );
    background-size: 200% 200%;
    animation: gradientAnimation 3s ease infinite;
    color: #fff;
    transform: scale(1.05);
    border: 3px solid white;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  border: 5px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;
