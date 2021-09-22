import styled from "styled-components";
import { useContext } from "react";
import { ButterContext } from "./ButterProvider";

const ContentContainer = styled.section`
  margin: 65px 141px;
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

const ArticleHeader = styled.h2`
  margin: 0;
  text-align: left;
  font: normal normal 600 48px/65px Open Sans;
  letter-spacing: 0px;
  color: #707070;
`;

const ArticleText = styled.p`
  margin-top: 38px;
  text-align: left;
  font: normal normal normal 24px/36px Open Sans;
  letter-spacing: 0px;
  color: #707070;
`;

export function ContentComponent() {
  const { articles } = useContext(ButterContext);
  return (
    <ContentContainer>
      {articles.map((el) => (
        <div key={el.header}>
          <ArticleHeader>{el.header}</ArticleHeader>
          <ArticleText>{el.text}</ArticleText>
        </div>
      ))}
    </ContentContainer>
  );
}
