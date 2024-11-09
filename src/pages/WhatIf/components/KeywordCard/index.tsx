import React from "react";

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Keyword } from "../../../../consts/types";
import { Button, CardContainer, Circle } from "./styles";
import { H2 } from "../FruitCard";

interface KeywordCardProps {
  keyword: Keyword | null;
  fruitColor: string;
  onDraw: () => void;
  disabled: boolean;
}

export const KeywordCard: React.FC<KeywordCardProps> = ({
  keyword,
  fruitColor,
  onDraw,
  disabled,
}) => (
  <CardContainer color={fruitColor} disabled={disabled}>
    {keyword ? (
      <>
        <H2>{keyword.name}</H2>

        {keyword.type === "good" ? (
          <Circle>
            <FaThumbsUp size={70} />{" "}
          </Circle>
        ) : (
          <Circle>
            <FaThumbsDown size={70} />
          </Circle>
        )}
      </>
    ) : (
      <H2>Palavra-Chave</H2>
    )}
    <Button color={fruitColor} onClick={onDraw} disabled={disabled}>
      Sortear Palavra-Chave
    </Button>
  </CardContainer>
);
