import { useContext } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { ButterContext } from "./ButterProvider";
import { CarouselComponent } from "./CarouselComponent";

const SignUpContainer = styled.section`
  position: relative;
  height: 494px;
`;

const HeaderSection = styled.div`
  position: relative;
  max-width: 616px;
  margin: 96px 0 0 239px;
`;

const Header = styled.h1`
  text-align: left;
  font: normal normal bold 48px/54px Open Sans;
  letter-spacing: 0px;
  color: #ffffff;
  margin: 0px;
`;

const SecureDataButton = styled(Button)`
  background: #ffe200;
  border: solid 2px #ffe200;
  color: #3f3f3f;
  width: 200px;
  margin-top: 44px;
`;

const TakeChangeButton = styled(SecureDataButton)`
  background: rgba(0, 0, 0, 0);
  box-shadow: 0px 2px 7px #00000033;
  border: solid 2px #fff;
  margin-left: 10px;
  color: #fff;
`;

export function SignUpComponent() {
  const { header } = useContext(ButterContext);

  return (
    <SignUpContainer>
      <CarouselComponent />
      <HeaderSection>
        <Header>{header}</Header>
        <SecureDataButton>Secure my data</SecureDataButton>
        <TakeChangeButton>Take a Chance</TakeChangeButton>
      </HeaderSection>
    </SignUpContainer>
  );
}
