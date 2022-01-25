import styled from "@emotion/styled";
import { Card } from "../Card";

export const Main = () => {
  return (
    <MainContainer>
      <h2 className="sr-only">상품 상세 페이지</h2>
      <Card />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
`;
