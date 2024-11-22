import { BaseLayout } from "../../Components/BaseLayout";
import {
  Cards,
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

import questionMark from "./../../assets/questiong3.gif";
import { useEffect, useState } from "react";
import { BackButton } from "../FruitContent/style";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { TutorialModal } from "../../Components/ModalTutorial";
import fruits from "../../consts/fruits";
import { FruitCard } from "./components/FruitCard";
import { KeywordCard } from "./components/KeywordCard";
import { SituationCard } from "./components/SituationCard";
import { Fruit, Keyword, Situation } from "../../consts/types";
import { ModalCreateText } from "../../Components/ModalCreateText";
import { Button } from "./components/KeywordCard/styles";

export function WhatIf() {
  const navigate = useNavigate();
  const [isModalCreateTextOpen, setIsModalCreateTextOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword | null>(null);
  const [selectedSituation, setSelectedSituation] = useState<Situation | null>(
    null
  );

  const handleFruitDraw = () => {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    setSelectedFruit(randomFruit);
    setSelectedKeyword(null);
    setSelectedSituation(null);
  };

  const handleKeywordDraw = () => {
    if (selectedFruit && selectedFruit.keywords) {
      const randomKeyword =
        selectedFruit.keywords[
          Math.floor(Math.random() * selectedFruit.keywords.length)
        ];
      setSelectedKeyword(randomKeyword);
    }
  };

  const handleSituationDraw = () => {
    if (selectedFruit && selectedFruit.situations) {
      const randomSituation =
        selectedFruit.situations[
          Math.floor(Math.random() * selectedFruit.situations.length)
        ];
      setSelectedSituation(randomSituation);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <Cards>
        <FruitCard fruit={selectedFruit} onDraw={handleFruitDraw} />
        <KeywordCard
          keyword={selectedKeyword}
          fruitColor={selectedFruit?.color}
          onDraw={handleKeywordDraw}
          disabled={!selectedFruit}
        />
        <SituationCard
          situation={selectedSituation}
          fruitColor={selectedFruit?.color}
          onDraw={handleSituationDraw}
          disabled={!selectedKeyword}
        />
      </Cards>
      <Button
        color={selectedFruit?.color}
        onClick={() => setIsModalCreateTextOpen(true)}
        disabled={!selectedSituation}
        style={{marginTop: '20px', width: '300px'}}
      >
        Escrever Situação
      </Button>
      <ModalCreateText
        isOpen={isModalCreateTextOpen}
        onClose={() => setIsModalCreateTextOpen(false)}
        fruit={selectedFruit}
        keyword={selectedKeyword}
        situation={selectedSituation}
      />
    </BaseLayout>
  );
}
