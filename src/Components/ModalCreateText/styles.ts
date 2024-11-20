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
  font-size: 30px;
  color: #fcfcfe;

  @media (max-width: 650px) {
    font-size: 25px;
  }
  @media (max-width: 550px) {
    font-size: 20px;
  }
  @media (max-width: 380px) {
    font-size: 18px;
  }
`;

export const ContainerPrint = styled.div`
  margin-top: 50px;
  background: linear-gradient(
    -60deg,
    #1c1c1c 10%,
    #2c3e50 30%,
    #34495e 50%,
    #4c6b82 70%,
    #5d6d7e 90%
  );
`;

export const ContentPrint = styled.div`
  padding-top: 16px;
  padding-inline: 6px;
`;

export const TextArea = styled.textarea`
  width: 95%;
  height: 100vh;
  margin: 20px 0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;
