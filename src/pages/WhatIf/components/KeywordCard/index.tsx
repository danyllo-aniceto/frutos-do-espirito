import React from "react";
import styled from "styled-components";

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Keyword } from "../../../../consts/types";
import { continuousDiagonalGradientAnimation } from "../../../../Components/CardGame/styles";

interface KeywordCardProps {
  keyword: Keyword | null;
  fruitColor: string | undefined;
  onDraw: () => void;
  disabled: boolean;
}

export const CardContainer = styled.div<{
  disabled: boolean;
  fruitColor: string | undefined;
}>`
  width: 250px;
  height: 300px;
  padding: 20px;
  position: relative;
  background: ${(props) =>
    props.disabled
      ? "#d3d3d3"
      : `linear-gradient(-50deg, ${props.fruitColor || "#e73c7e"}, ${
          props.fruitColor || "#23a6d5"
        }, ${props.fruitColor || "#23d5ab"})`};
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

const Button = styled.button`
  margin-top: 10px;
`;

export const KeywordCard: React.FC<KeywordCardProps> = ({
  keyword,
  fruitColor,
  onDraw,
  disabled,
}) => (
  <CardContainer fruitColor={fruitColor} disabled={disabled}>
    {keyword ? (
      <>
        <h2>{keyword.name}</h2>
        {keyword.type === "good" ? <FaThumbsUp /> : <FaThumbsDown />}
      </>
    ) : (
      <h2>Sortear Palavra-Chave</h2>
    )}
    <Button onClick={onDraw} disabled={disabled}>
      Sortear Palavra-Chave
    </Button>
  </CardContainer>
);
