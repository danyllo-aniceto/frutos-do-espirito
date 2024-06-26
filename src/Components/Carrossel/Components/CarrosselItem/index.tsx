import React from "react";
import { ICarrosselItemProps } from "./types";
import { Descricao, Imagem, ItemContainer, Titulo } from "./style";

const CarrosselItem: React.FC<ICarrosselItemProps> = ({
  titulo,
  imagemUrl,
  descricao,
}) => {
  return (
    <ItemContainer>
      <Imagem src={imagemUrl} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
    </ItemContainer>
  );
};

export default CarrosselItem;
