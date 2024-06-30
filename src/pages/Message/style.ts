import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: 2em;
  background-color: #fefefe;
  border-radius: 8px;
  margin-top: 1em;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  margin: 0.5em 0;
  font-family: "Roboto Condensed", sans-serif;
  color: #333;
  font-weight: 400;
`;

export const Title = styled.span`
  font-size: 40px;
  font-family: "Poetsen One", sans-serif;
  color: #fefefe;
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const ContentVerse = styled.div<{ color?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
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

export const Verse = styled.h3`
  margin-inline: 5px;
  color: #fefefe;
  font-family: "Roboto Condensed", sans-serif;
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
