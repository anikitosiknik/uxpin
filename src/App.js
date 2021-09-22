import "./App.css";
import styled from "styled-components";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { MainComponent } from "./components/MainComponent";
import ButterProvider from "./components/ButterProvider";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function App() {
  return (
    <ButterProvider>
      <AppContainer>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </AppContainer>
    </ButterProvider>
  );
}
