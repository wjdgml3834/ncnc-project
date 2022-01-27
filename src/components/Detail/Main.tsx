import styled from "@emotion/styled";
import { Card } from "../Card";
import { NoticeToggle } from "./NoticeToggle";
import { RefundToggle } from "./RefundToggle";

export const Main = () => {
  return (
    <MainContainer>
      <h2 className="sr-only">상품 상세 페이지</h2>
      <Card />
      <NoticeToggle />
      <RefundToggle />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
`;
