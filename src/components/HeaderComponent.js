import styled from "styled-components";
import { Button } from "../styles/Button";
import logo from "../assets/logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const NavigationContainer = styled.nav`
  display: flex;
  gap: 25px;
  align-items: center;
  margin: 15px;
`;

const NavigationLink = styled.a`
  text-align: left;
  font: normal normal normal 16px/26px Open Sans;
  letter-spacing: 0px;
  color: #3f3f3f;
  text-decoration: none;
  display: flex;
  align-items: end;
  gap: 5px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #3f3f3f;
  margin-bottom: 8px;
`;

const StartButton = styled(Button)`
  background: transparent linear-gradient(90deg, #3ba9fb 0%, #148af1 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 2px 7px #00000033;
  border-radius: 4px;
  height: 35px;
  padding: 8px 20px;

  text-align: left;
  font: normal normal bold 13px/18px Open Sans;
  letter-spacing: 0px;
  color: #ffffff;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const LogoLink = styled(NavigationLink)`
  font: bold normal normal 16px/26px Open Sans;
`;

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <NavigationContainer>
        <LogoLink href="#">
          <Logo src={logo} alt="logo" />
          Xplenty
        </LogoLink>
        <NavigationLink href="#">Product</NavigationLink>
        <NavigationLink href="#">Integrations</NavigationLink>
        <NavigationLink href="#">
          Solutions <Triangle />
        </NavigationLink>
        <NavigationLink href="#">
          Resources
          <Triangle />
        </NavigationLink>
      </NavigationContainer>

      <NavigationContainer>
        <NavigationLink href="#">
          English
          <Triangle />
        </NavigationLink>
        <NavigationLink href="#">Sign In</NavigationLink>
        <StartButton>Get started</StartButton>
      </NavigationContainer>
    </HeaderContainer>
  );
}
