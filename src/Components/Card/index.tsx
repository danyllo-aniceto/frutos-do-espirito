import { CardContainer, CardContent, Description, Title, Image } from "./style";
import { ICardProps } from "./types";

export function Card({ description, color, imageUrl, title }: ICardProps) {
  return (
    <CardContainer color={color}>
      <CardContent>
        <Image src={imageUrl} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </CardContainer>
  );
}
