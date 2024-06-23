import React from "react";
import styled from "styled-components";

interface CarrosselItemProps {
  titulo: string;
  imagemUrl: string;
  descricao: string;
  link: string;
  cor: string;
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: opacity 0.5s ease;
`;

const Imagem = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const Titulo = styled.span`
  margin-top: 15px;
  font-size: 28px;
  font-family: "Playwrite IS", cursive;
  font-weight: 400;
  color: white; /* Cor do texto */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Deslocamento X, Deslocamento Y, Desfoque, Cor */
`;

const Descricao = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  font-family: "Roboto Condensed", sans-serif;
  margin-inline: 8px;
  font-weight: 400;
  color: white; /* Cor do texto */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); /* Deslocamento X, Deslocamento Y, Desfoque, Cor */
`;

const CarrosselItem: React.FC<CarrosselItemProps> = ({
  titulo,
  imagemUrl,
  descricao,
  link,
}) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <ItemContainer onClick={handleClick}>
      <Imagem src={imagemUrl} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
    </ItemContainer>
  );
};

export default CarrosselItem;
