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
  CardWrapper,
  CardInner,
  TitleCard,
  SliderContainer,
} from "./style";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import fruits from "./../../consts/fruits";
import Slider from "react-slick";

export function FruitContent() {
  const { fruitId } = useParams<{ fruitId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fruit = fruits.find((fruit) => fruit.id === fruitId);
  if (!fruit) return <div>Fruto não encontrado</div>;

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1080,
        settings: { slidesToShow: 3},
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, arrows: false  },
      },
      {
        breakpoint: 430,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px", arrows: false},
      },
    ],
  };
  

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
        <SliderContainer>
          <Slider {...sliderSettings}>
            {fruit.messages.length > 0 ? (
              fruit.messages.map((message) => (
                <StyledLink
                  to={`/fruit/${fruitId}/message/${message.id}`}
                  key={message.id}
                >
                  <CardWrapper color={fruit.color}>
                    <CardInner>
                      <TitleCard>{message.title}</TitleCard>
                    </CardInner>
                  </CardWrapper>
                </StyledLink>
              ))
            ) : (
              <Button color={fruit.color} disabled>
                Nenhuma mensagem disponível
              </Button>
            )}
          </Slider>
        </SliderContainer>
      </Buttons>
    </BaseLayout>
  );
}
