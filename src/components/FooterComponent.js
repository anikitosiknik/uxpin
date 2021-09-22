import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #3ba9fb 0% 0% no-repeat padding-box;
`;

const FooterListContainer = styled.ul`
  margin-top: 38px;
  margin-left: 141px;
  display: flex;
  gap: 35px;
  list-style-type: none;
  padding: 0;
`;

const FooterLink = styled.a`
  text-align: left;
  text-decoration: none;
  font: normal normal normal 16px/36px Open Sans;
  letter-spacing: 0px;
  color: #ebf7ff;
  &:hover {
    text-decoration: underline;
  }
`;

export default function FooterComponent() {
  return (
    <FooterContainer>
      <FooterListContainer>
        <li>
          <FooterLink href="#">Terms</FooterLink>
        </li>
        <li>
          <FooterLink href="#">Privacy policy</FooterLink>
        </li>
        <li>
          <FooterLink href="#">Contact</FooterLink>
        </li>
        <li>
          <FooterLink href="#">hello@xplenty.com</FooterLink>
        </li>
      </FooterListContainer>
    </FooterContainer>
  );
}
