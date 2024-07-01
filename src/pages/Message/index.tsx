import { BaseLayout } from "../../Components/BaseLayout";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Text,
  BackButton,
  ContentText,
  Title,
  ContentVerse,
  Verse,
  Author,
  InstagramIcon,
} from "./style";
import fruits from "./../../consts/fruits";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import instagram from "./../../assets/instagram.png";

export function Message() {
  const { fruitId, messageId } = useParams<{
    fruitId: string;
    messageId: string;
  }>();
  const navigate = useNavigate();
  const fruit = fruits.find((fruit) => fruit.id === fruitId);
  const message = fruit?.messages.find((message) => message.id === messageId);

  if (!fruit) return <div>Fruto não encontrado</div>;
  if (!message) return <div>Mensagem não encontrada</div>;

  const handleInstagramClick = () => {
    window.open(`https://www.instagram.com/${message.instagram}`, "_blank");
  };

  return (
    <BaseLayout>
      <BackButton onClick={() => navigate(`/fruit/${fruitId}`)}>
        <FiArrowLeft size={24} />
        Voltar para {fruit.name}
      </BackButton>
      <Container>
        <ContentText>
          <ContentVerse color={fruit.color}>
            <Title>{message.title}</Title>

            <Verse>
              {typeof message.verse === "string" ? (
                <ReactMarkdown>{message.verse}</ReactMarkdown>
              ) : (
                message.verse.map((paragraph, index) => (
                  <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
                ))
              )}
            </Verse>
          </ContentVerse>

          <Text>
            {typeof message.text === "string" ? (
              <ReactMarkdown>{message.text}</ReactMarkdown>
            ) : (
              message.text.map((paragraph, index) => (
                <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
              ))
            )}
          </Text>
          <Author>
            {message.author}
            {message.instagram && (
              <InstagramIcon
                onClick={handleInstagramClick}
                src={instagram} // Substitua pelo caminho do seu ícone do Instagram
                alt="Instagram"
              />
            )}
          </Author>
        </ContentText>
      </Container>
    </BaseLayout>
  );
}
