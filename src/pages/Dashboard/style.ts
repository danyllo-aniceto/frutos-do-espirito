import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 25px;
`;

export const CarrosselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
