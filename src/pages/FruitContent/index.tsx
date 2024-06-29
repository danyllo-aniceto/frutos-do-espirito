import { BaseLayout } from "../../Components/BaseLayout";
import {
  Container,
  Title,
  Image,
  Text,
  Subtitle,
  Buttons,
  Button,
  BackButton,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { IFruitContentProps } from "./types";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi"; // Importando o ícone de seta esquerda

export function FruitContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { color, description, imageUrl, title } =
    (location.state as IFruitContentProps) || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <BaseLayout>
      <BackButton onClick={handleBackToHome} color={color}>
        <FiArrowLeft size={24} />
        Voltar para a Página Inicial
      </BackButton>
      <Container color={color}>
        <Text>
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
        </Text>
        <Image src={imageUrl} alt={title} />
      </Container>
      <Buttons color={color}>
        <Button color={color}>Há perdão no Amor</Button>
        <Button color={color}>O Amor que Transforma</Button>
        <Button color={color}>Servindo com Amor</Button>
        <Button color={color}>Ação e Compaixão</Button>
        <Button color={color}>Abraçando o Amor de Deus</Button>
        <Button color={color}>Cuidando de Si Mesmo com Amor</Button>
        <Button color={color}>Construindo Laços de Amor</Button>
        <Button color={color}>Relacionamentos Saudáveis</Button>
        <Button color={color}>O Amor Sacrificial</Button>
        <Button color={color}>Viver com Coração Grato</Button>
      </Buttons>
    </BaseLayout>
  );
}
