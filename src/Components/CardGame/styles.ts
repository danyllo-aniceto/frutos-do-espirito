import styled, { keyframes } from "styled-components";

export const continuousDiagonalGradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const CardContainer = styled.div`
  margin-top: 50px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 400px;
  background: linear-gradient(
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
  );
  background-size: 400% 400%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 850px) {
    width: 600px;
  }

  @media (min-width: 751px) {
    &:hover {
      animation: ${continuousDiagonalGradientAnimation} 5s linear infinite;
    }
  }

  @media (max-width: 750px) {
    animation: ${continuousDiagonalGradientAnimation} 5s linear infinite;
    filter: brightness(0.9);
  }

  @media (max-width: 650px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.5s ease;
  background-color: rgb(0 0 0 / 86%);
  margin-inline: 26px;
  border-radius: 10px;

  @media (max-width: 500px) {
    margin-inline: 6px;
  }
`;

export const Title = styled.span`
  margin-top: 15px;
  font-size: 28px;
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Aumentou a sombra */

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 200px;
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  font-family: "Roboto Condensed", sans-serif;
  margin-inline: 150px;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6); /* Aumentou a sombra */

  @media (max-width: 650px) {
    margin-inline: 80px;
  }

  @media (max-width: 500px) {
    margin-inline: 40px;
  }

  @media (max-width: 400px) {
    margin-inline: 20px;
  }
`;
