import styled, { keyframes } from "styled-components";

const continuousDiagonalGradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const CardContainer = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background: linear-gradient(
    -50deg,
    ${(props) => props.color || "#e73c7e"},
    ${(props) => props.color || "#23a6d5"},
    ${(props) => props.color || "#23d5ab"}
  );
  background-size: 400% 400%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
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
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.5s ease;
`;

export const Title = styled.span`
  margin-top: 15px;
  font-size: 28px;
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  font-family: "Roboto Condensed", sans-serif;
  margin-inline: 8px;
  font-weight: 400;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;
