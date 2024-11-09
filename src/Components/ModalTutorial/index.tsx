// TutorialModal.tsx
import React, { MouseEvent } from "react";
import { CloseButton, ModalContainer, Overlay, Title, Text } from "./styles";

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  // Evitar que o clique dentro do modal feche o modal acidentalmente
  const handleModalClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={handleModalClick}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Como Funciona o Jogo: "O Que Aconteceria Se?"</Title>
        <Text>
          Bem-vindo ao jogo <b>"O Que Aconteceria Se"</b>, uma experiência
          divertida e interativa onde você aprenderá mais sobre os frutos do
          Espírito, colocando-os em situações da vida real! Veja como funciona:
        </Text>
        <Text>
          <b>Escolha do Fruto:</b> Primeiro, o jogo sorteará aleatoriamente um
          dos nove frutos do Espírito. Cada fruto representa uma qualidade
          especial, como amor, paciência, bondade, entre outros.
        </Text>
        <Text>
          <b>Palavra-Chave Positiva ou Negativa:</b> Depois de descobrir o
          fruto, o próximo passo é sortear uma palavra-chave. Essa palavra pode
          representar uma qualidade positiva, como "compreensão" ou "alegria,"
          que ajuda a aplicar o fruto sorteado. Mas ela também pode ser um
          aspecto negativo, como "raiva" ou "inveja," que representa um desafio
          a ser superado. Se a palavra for positiva, sua missão é usá-la para
          potencializar o fruto. Se for negativa, pense em como o fruto do
          Espírito pode te ajudar a combater ou transformar essa atitude.
        </Text>
        <Text>
          <b>Situação:</b> Em seguida, o jogo sorteará uma situação específica
          em que você pode aplicar o fruto e a palavra-chave. Essa situação é um
          desafio da vida real que todos nós podemos enfrentar em algum momento,
          e sua missão é imaginar como aplicar o fruto do Espírito para lidar
          com ela de forma positiva.
        </Text>
        <Text>
          <b>Reflexão:</b> Agora que você tem um fruto, uma palavra-chave e uma
          situação, é hora de refletir! Se a palavra-chave é positiva, pense em
          como ela te ajuda a agir de acordo com o fruto sorteado. Se a
          palavra-chave é negativa, reflita sobre como o fruto do Espírito pode
          te ajudar a superar essa dificuldade e responder de maneira
          construtiva. Escreva uma frase ou uma breve explicação de como você
          lidaria com a situação, levando em conta o fruto e a palavra-chave.
        </Text>
        <Text>
          <b>Salve e Compartilhe:</b> Quando estiver satisfeito com sua
          resposta, você pode salvar sua reflexão como um PDF ou imagem para
          guardar ou compartilhar. É uma ótima maneira de lembrar e refletir
          sobre como aplicar os ensinamentos dos frutos do Espírito!
        </Text>
      </ModalContainer>
    </Overlay>
  );
};
