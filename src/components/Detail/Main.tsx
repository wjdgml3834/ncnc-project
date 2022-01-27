import styled from "@emotion/styled";
import { Card } from "../Card";
import { NoticeToggle } from "./NoticeToggle";
import { RefundToggle } from "./RefundToggle";
import { OtherGoodsBtn } from "./OtherGoodsBtn";
import { MiniCardCont } from "./MiniCardCont";

export const Main = () => {
  return (
    <MainContainer>
      <h2 className="sr-only">상품 상세 페이지</h2>
      <Card />
      <ContentCont>
        <NoticeToggle />
        <RefundToggle />
        <OtherGoodsBtn />
        <MiniCardCont />
      </ContentCont>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
`;

const ContentCont = styled.div`
  margin: 0 auto;
  max-width: 341px;
  padding: 0px 29px;
`;
