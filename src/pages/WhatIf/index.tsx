import { BaseLayout } from "../../Components/BaseLayout";
import {
  Container,
  ContainerWeb,
  Content,
  ContentHeader,
  ContentTextImage,
  ContentWeb,
  Image,
  OpenModalButton,
  Subtitle,
  Text,
  Title,
} from "./styles";

import questionMark from "./../../assets/question-mark4.png";
import { useEffect, useState } from "react";
import { BackButton } from "../FruitContent/style";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { TutorialModal } from "../../Components/ModalTutorial";

export function WhatIf() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BaseLayout>
      <BackButton onClick={() => navigate("/")}>
        <FiArrowLeft size={24} />
        Voltar para a Página Inicial
      </BackButton>
      <Container>
        <Content>
          {isMobile ? (
            <ContentHeader>
              <Title>O QUE ACONTECERIA SE?!</Title>
              <ContentTextImage>
                <Subtitle>
                  Imagine como você aplicaria um fruto do Espírito para
                  enfrentar uma situação! No jogo, você será desafiado a
                  utilizar uma palavra-chave inspirada nos frutos para resolver
                  uma situação sorteada. Vamos ver como o fruto do Espírito pode
                  fazer a diferença!
                </Subtitle>
                <Image src={questionMark} alt="question mark" />
              </ContentTextImage>
              <OpenModalButton onClick={() => setIsModalOpen(true)}>
                Como Jogar
              </OpenModalButton>

              <TutorialModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </ContentHeader>
          ) : (
            <ContainerWeb>
              <ContentWeb>
                <Text>
                  <Title>O QUE ACONTECERIA SE?!</Title>
                  <Subtitle>
                    Imagine como você aplicaria um fruto do Espírito para
                    enfrentar uma situação! No jogo, você será desafiado a
                    utilizar uma palavra-chave inspirada nos frutos para
                    resolver uma situação sorteada. Vamos ver como o fruto do
                    Espírito pode fazer a diferença!
                  </Subtitle>
                </Text>
                <Image src={questionMark} alt="question mark" />
              </ContentWeb>
              <OpenModalButton onClick={() => setIsModalOpen(true)}>
                Como Jogar
              </OpenModalButton>

              <TutorialModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </ContainerWeb>
          )}
        </Content>
      </Container>
    </BaseLayout>
  );
}
