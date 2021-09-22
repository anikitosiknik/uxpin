import { useCallback, useState } from "react";
import styled from "styled-components";
import darkBg from "../assets/darkSignUpBg.png";
import lightBg from "../assets/lightSignUpBg.png";

const CarouselContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const CarouselImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-position: center center;
  position: relative;
  top: ${({ ontop }) => (ontop ? "-100%" : "0%")};
  transition: top 1s;
`;

export function CarouselComponent() {
  const [isCarouselOnTop, setIsCarouselOnTop] = useState(false);

  const mouseMoveHandler = useCallback(() => setIsCarouselOnTop(true), []);
  return (
    <CarouselContainer onMouseMove={mouseMoveHandler}>
      <CarouselImage img={lightBg} ontop={isCarouselOnTop} />
      <CarouselImage img={darkBg} ontop={isCarouselOnTop} />
    </CarouselContainer>
  );
}
