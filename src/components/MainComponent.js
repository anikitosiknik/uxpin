import { SignUpComponent } from "./SignUpComponent";
import styled from "styled-components";
import { TrustedByComponent } from "./TrustedByComponent";
import { ContentComponent } from "./ContentComponent";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export function MainComponent() {
  return (
    <MainContainer>
      <SignUpComponent />
      <TrustedByComponent />
      <ContentComponent />
    </MainContainer>
  );
}
