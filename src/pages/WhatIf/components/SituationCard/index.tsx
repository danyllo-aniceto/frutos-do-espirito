// SituationCard.js
import React from "react";
import { Situation } from "../../../../consts/types";
import { Button, CardContainer } from "../KeywordCard/styles";
import { H2 } from "../FruitCard";
import { Text } from "./styles";

interface SituationCardProps {
  situation: Situation | null;
  fruitColor: string | undefined;
  onDraw: () => void;
  disabled: boolean;
}

export const SituationCard: React.FC<SituationCardProps> = ({
  situation,
  fruitColor,
  onDraw,
  disabled,
}) => (
  <CardContainer color={fruitColor} disabled={disabled}>
    {situation ? <Text>{situation.text}</Text> : <H2>Sortear Situação</H2>}
    <Button color={fruitColor} onClick={onDraw} disabled={disabled}>
      Sortear Situação
    </Button>
  </CardContainer>
);
