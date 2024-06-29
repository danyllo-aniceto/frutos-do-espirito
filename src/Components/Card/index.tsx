import { useNavigate } from "react-router-dom";
import { CardContainer, CardContent, Description, Title, Image } from "./style";
import { ICardProps } from "./types";

export function Card({ description, color, imageUrl, title }: ICardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fruit-content", {
      state: {
        description,
        color,
        imageUrl,
        title,
      },
    });
  };
  return (
    <CardContainer color={color} onClick={handleClick}>
      <CardContent>
        <Image src={imageUrl} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </CardContainer>
  );
}
