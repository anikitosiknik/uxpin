import styled from "styled-components";
import samsungLogo from "../assets/samsung-logo.svg";
import deloitteLogo from "../assets/deloitte-logo.svg";
import ikeaLogo from "../assets/ikea-logo.svg";

const TrustedByContainer = styled.section`
  border-bottom: 1px solid #d0d0d0;
`;

const Pharagraph = styled.p`
  text-align: center;
  font: normal normal bold 12px/17px Open Sans;
  letter-spacing: 0.98px;
  color: #3f3f3f;
  text-transform: uppercase;
  opacity: 0.4;
  margin-top: 60px;
`;

const LogosContainer = styled.div`
  margin: 35px 141px 70px;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const LogoImage = styled.img`
  height: 30px;
  filter: grayscale(100%);
`;

export function TrustedByComponent() {
  return (
    <TrustedByContainer>
      <Pharagraph>TRUSTED BY COMPANIES WORLDWIDE:</Pharagraph>
      <LogosContainer>
        <LogoImage src={samsungLogo} alt="samsung logo"></LogoImage>
        <LogoImage src={deloitteLogo} alt="deloitte logo"></LogoImage>
        <LogoImage src={ikeaLogo} alt="ikea logo"></LogoImage>
      </LogosContainer>
    </TrustedByContainer>
  );
}
