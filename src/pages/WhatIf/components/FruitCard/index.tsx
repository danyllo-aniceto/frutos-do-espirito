// FruitCard.js
import React from "react";
import styled from "styled-components";
import { Fruit } from "../../../../consts/types";
import { continuousDiagonalGradientAnimation } from "../../../../Components/CardGame/styles";
import question from "./../../../../assets/questiong3.gif";
import { OpenModalButton } from "../../styles";

interface FruitCardProps {
  fruit: Fruit | null;
  onDraw: () => void;
}

const CardContainer = styled.div<{ color: string | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.color
      ? `linear-gradient(-50deg, ${props.color}, ${props.color}, ${props.color})`
      : `linear-gradient(
          -80deg,
          #d91115,
          #f8c70b,
          #b0b0b0,
          #00bfff,
          #1dbe37,
          #f43280,
          #ff8500,
          #37ebd0,
          #833cbe,
          #d91115,
          #f8c70b,
          #b0b0b0,
          #00bfff,
          #1dbe37,
          #f43280,
          #ff8500,
          #37ebd0,
          #833cbe
        )`};
  width: 250px;
  height: 300px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
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
  width: 500px;
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

  @media (max-width: 650px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 200px;
  }

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

const Image = styled.img`
  width: 120px;
  border-radius: 100px;
`;

export const H2 = styled.h2`
  font-family: "Poetsen One", sans-serif;
  font-size: 26px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  color: white;
`;

const Content = styled.div`
  width: 250px;
  height: 300px;
  background-color: rgb(0 0 0 / 86%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;

  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 370px) {
    width: 290px;
  }
`;

export const ContentFruit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 300px;
  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 370px) {
    width: 290px;
  }
`;

export const FruitCard: React.FC<FruitCardProps> = ({ fruit, onDraw }) => (
  <CardContainer color={fruit?.color}>
    {fruit ? (
      <ContentFruit>
        <Image src={fruit.image} alt={fruit.name} />
        <H2>{fruit.name}</H2>
        <Button color={fruit.color} onClick={onDraw} style={{ width: 200 }}>
          Sortear Fruto
        </Button>
      </ContentFruit>
    ) : (
      <>
        <Content>
          <Image src={question} alt="question" />
          <OpenModalButton onClick={onDraw} style={{ width: 200 }}>
            Sortear Fruto
          </OpenModalButton>
        </Content>
      </>
    )}
  </CardContainer>
);
