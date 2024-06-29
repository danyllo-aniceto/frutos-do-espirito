import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "./../Card";
import styled from "styled-components";
import { ICarrosselProps } from "../Carrossel/types";

const CardCarouselContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
`;

export function CardCarousel({ items }: ICarrosselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CardCarouselContainer>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.titulo}
            description={item.descricao}
            imageUrl={item.imagemUrl}
            color={item.cor}
          />
        ))}
      </Slider>
    </CardCarouselContainer>
  );
}
