import { useNavigate } from "react-router-dom";
import { CardContainer, CardContent, Description, Title, Image } from "./style";
import { ICardProps } from "./types";

export function Card({ description, color, image, name }: ICardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fruit-content", {
      state: {
        description,
        color,
        image,
        name,
      },
    });
  };
  return (
    <CardContainer color={color} onClick={handleClick}>
      <CardContent>
        <Image src={image} alt={name} />
        <Title>{name}</Title>
        <Description>{description}</Description>
      </CardContent>
    </CardContainer>
  );
}
