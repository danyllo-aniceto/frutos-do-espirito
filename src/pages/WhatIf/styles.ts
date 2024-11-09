import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const Container = styled.div<{ color?: string }>`
  border-radius: 10px;
  border: 2px solid #fefefe;
  padding: 5px;
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
  transition: transform 0.3s ease-in-out;
  animation: ${gradientAnimation} 5s linear infinite;
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: "Poetsen One", sans-serif;
  @media (max-width: 500px) {
    font-size: 20px;
  }

  @media (max-width: 330px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  text-align: justify;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 100px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: rgb(0 0 0 / 86%);
  border-radius: 8px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentTextImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OpenModalButton = styled.button`
  width: 500px;
  align-self: center;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background-color: #fff;
  color: #2c3e50;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poetsen One", sans-serif;
  transition: transform 0.3s ease, color 0.3s ease;

  @media (max-width: 650px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 200px;
  }

  &:hover {
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
      #833cbe
    );
    background-size: 200% 200%;
    animation: gradientAnimation 3s ease infinite;
    color: #fff;
    transform: scale(1.05);
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const ContainerWeb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentWeb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
