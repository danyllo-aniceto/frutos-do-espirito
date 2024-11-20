// styles.js
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  zz-index: 9999;
`;

export const ModalContainer = styled.div`
  background: linear-gradient(
    -60deg,
    #1c1c1c 10%,
    #2c3e50 30%,
    #34495e 50%,
    #4c6b82 70%,
    #5d6d7e 90%
  );
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  scrollbar-width: none; /* Firefox */

  /* Para esconder a barra de rolagem no Chrome, Edge e Safari */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 1.5rem;
  position: absolute;

  right: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-size: 40px;
  color: #fcfcfe;

  @media (max-width: 650px) {
    font-size: 35px;
  }
  @media (max-width: 550px) {
    font-size: 25px;
  }
  @media (max-width: 380px) {
    font-size: 18px;
  }
`;

export const ContainerPrint = styled.div<{ color: string | undefined }>`
  margin-top: 50px;
  background: linear-gradient(
    -50deg,
    ${(props) => props.color || "#e73c7e"},
    ${(props) => props.color || "#23a6d5"},
    ${(props) => props.color || "#23d5ab"}
  );
`;

export const ContentPrint = styled.div`
  padding-top: 16px;
  padding-inline: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 95%;
  min-height: 20vh;
  margin: 20px 0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: none;
  overflow: hidden;
`;

export const ContentFruit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 430px) {
    gap: 20px;
  }
`;

export const FruitImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50px;

  @media (max-width: 430px) {
    width: 65px;
    height: 65px;
  }
`;

export const Text = styled.span`
  display: inline;
  font-family: "Roboto Condensed", sans-serif;
  margin-right: 6px;
`;

export const Name = styled.span`
  display: inline;
  text-transform: uppercase;
  font-family: "Poetsen One", sans-serif;
  font-size: 20px;
  margin-right: 6px;
`;

export const ContentText = styled.div`
  padding-top: 16px;
  display: inline;
  white-space: normal;
  line-height: 1.5;
  width: 80%;

  @media (max-width: 380px) {
    width: 90%;
    text-align: start;
  }
`;
