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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #fefefe;
  background: linear-gradient(
    -50deg,
    ${(props) => props.color || "#e73c7e"},
    ${(props) => props.color || "#23a6d5"},
    ${(props) => props.color || "#23d5ab"}
  );
  background-size: 400% 400%;
  transition: transform 0.3s ease-in-out;
  animation: ${gradientAnimation} 5s linear infinite;
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: "Poetsen One", sans-serif;
`;

export const Subtitle = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 25px;
  margin-top: 15px;
`;

export const Button = styled.button<{ color?: string }>`
  padding: 15px 30px;
  font-size: 16px;
  background: #fefefe;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 15px;
  font-family: "Poetsen One", sans-serif;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #fefefe;
    transition: width 0.3s ease;
  }

  &:hover {
    background: linear-gradient(
      -50deg,
      ${(props) => props.color || "#e73c7e"},
      ${(props) => props.color || "#23a6d5"},
      ${(props) => props.color || "#23d5ab"}
    );
    color: #fefefe;
  }

  &:hover::after {
    width: 100%;
  }

  span {
    position: relative;
  }
`;

export const BackButton = styled.button<{ color?: string }>`
  background: none;
  border: none;
  color: #fefefe;
  font-family: "Poetsen One", sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 10px;
  &:hover {
    color: #fefefe9e;
  }
`;
