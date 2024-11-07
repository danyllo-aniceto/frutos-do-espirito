import React from "react";
import Slider from "react-slick";
import { Card } from "./../Card";
import { ICardProps } from "./../Card/types";
import { CarouselContainer } from "./style";
import { StyledLink } from "../../pages/FruitContent/style";
import fruits from "../../consts/fruits";

interface CarouselProps {
  cards: ICardProps[];
}

export const Carousel: React.FC<CarouselProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {fruits.map((fruit) => (
          <StyledLink to={`/fruit/${fruit.id}`} key={fruit.id}>
            <Card
              key={fruit.id}
              color={fruit.color}
              description={fruit.description}
              image={fruit.image}
              name={fruit.name}
              id={fruit.id}
              messages={fruit.messages}
            />
          </StyledLink>
        ))}
      </Slider>
    </CarouselContainer>
  );
};
