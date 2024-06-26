import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.5s ease;
`;

export const Imagem = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Titulo = styled.span`
  margin-top: 15px;
  font-size: 28px;
  font-family: "Playwrite IS", cursive;
  font-weight: 400;
  color: white; /* Cor do texto */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Deslocamento X, Deslocamento Y, Desfoque, Cor */
`;

export const Descricao = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  font-family: "Roboto Condensed", sans-serif;
  margin-inline: 8px;
  font-weight: 400;
  color: white; /* Cor do texto */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); /* Deslocamento X, Deslocamento Y, Desfoque, Cor */
`;
