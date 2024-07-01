import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const H1 = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 25px;
  text-align: justify;

  @media (max-width: 650px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;

export const CarrosselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 100px;
  row-gap: 50px;

  @media (max-width: 1220px) {
    column-gap: 30px;
    row-gap: 25px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: initial; /* Mostra completamente o conteúdo do próximo slide */
    margin: 0 auto; /* Centraliza o carousel na tela */
  }

  .slick-slide > div {
    margin: 0 8px; /* Espaçamento entre os cards */
  }

  .slick-center {
    transform: scale(1.1); /* Aumenta o tamanho do slide central (opcional) */
    transition: transform 0.3s ease;
  }

  .slick-slide {
    transition: transform 0.3s ease;
  }

  .slick-prev,
  .slick-next {
    z-index: 1; /* Garante que as setas fiquem sobre os slides */
  }
`;
