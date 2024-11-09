import {
  CardContainer,
  CardContent,
  Title,
  Image,
  Description,
} from "./styles";

import questionMark from "./../../assets/question-mark4.png";

export function CardGame() {
  return (
    <CardContainer>
      <CardContent>
        <Title>O QUE ACONTECERIA SE?!</Title>
        <Image src={questionMark} alt="question mark" />
        <Description>
          Imagine como você aplicaria um fruto do Espírito para enfrentar uma
          situação! No jogo, você será desafiado a utilizar uma palavra-chave
          inspirada nos frutos para resolver uma situação sorteada. Vamos ver
          como o fruto do Espírito pode fazer a diferença!
        </Description>
      </CardContent>
    </CardContainer>
  );
}
