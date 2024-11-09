import styled from "styled-components";

export const Text = styled.p`
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  background-color: rgb(0 0 0 / 50%);
  padding: 10px;
  border-radius: 10px;
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
