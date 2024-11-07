import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-dots li button:before {
    font-size: 12px;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
  }

  @media (max-width: 720px) {
    .slick-slide {
      padding: 0 5px;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 300px; // Ajuste o tamanho máximo do card para caber três por tela
  margin: 0 auto;
  box-sizing: border-box;
`;
