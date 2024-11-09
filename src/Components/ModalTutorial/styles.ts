// styles.js
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh; /* Limita a altura do modal a 80% da altura da tela */
  overflow-y: auto; /* Permite rolagem vertical */
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
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #2c3e50;
  font-family: "Poetsen One", sans-serif;
  font-size: 25px;
`;

export const Text = styled.p`
  color: #2c3e50;
  font-family: "Roboto Condensed", sans-serif;
  text-align: justify;
`;
