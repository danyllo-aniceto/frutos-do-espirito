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
  StyledLink,
} from "./style";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import fruits from "./../../consts/fruits";

export function FruitContent() {
  const { fruitId } = useParams<{ fruitId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fruit = fruits.find((fruit) => fruit.id === fruitId);

  if (!fruit) return <div>Fruto não encontrado</div>;

  return (
    <BaseLayout>
      <BackButton color={fruit.color} onClick={() => navigate("/")}>
        <FiArrowLeft size={24} />
        Voltar para a Página Inicial
      </BackButton>
      <Container color={fruit.color}>
        <Text>
          <Title>{fruit.name}</Title>
          <Subtitle>{fruit.description}</Subtitle>
        </Text>
        <Image src={fruit.image} alt={fruit.name} />
      </Container>
      <Buttons>
        {fruit.messages.length > 0 ? (
          fruit.messages.map((message) => (
            <StyledLink
              to={`/fruit/${fruitId}/message/${message.id}`}
              key={message.id}
            >
              <Button color={fruit.color}>{message.title}</Button>
            </StyledLink>
          ))
        ) : (
          <Button color={fruit.color} disabled>
            Nenhuma mensagem disponível
          </Button>
        )}
      </Buttons>
    </BaseLayout>
  );
}
