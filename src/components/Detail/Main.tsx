import { useState } from "react";
import styled from "@emotion/styled";
import { Card } from "../Card";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Main = () => {
  const [notice, setNotice] = useState(false);

  const OpenNotice = () => {
    return (
      <>
        <Description>
          <p>· 구매하신 상품은 반드시 유효기간 내에 사용해 주셔야 합니다.</p>
          <p>
            ·포인트 적립 및 제휴카드 할인 등은 교환처의 정책에 따르므로 모바일
            쿠폰의 경우 적립, 할인 등이 불가할 수 있습니다.
          </p>
          <p>· 바코드 인식이 불가할 경우 수기로 입력하여 사용 가능합니다.</p>
          <p>
            · 매장, 품목형의 경우 사용이 제한될 수 있으므로 사용 가능 여부는
            방문하실 매장에 미리 확인 후 구매 부탁드립니다.
          </p>
          <p>
            · 일부, 품목형은 동일 품목으로만 교환이 가능하며 타 상품
            교환,금액권처럼 사용시 사용이 불가하거나 원가금액만큼 제공 받을 수
            있는건 아닙니다.
          </p>
          <p>
            · 사용처에서 제공하는 웹, 앱 등에 적용이 불가할 수 있으며 쿠폰은
            선택하여 구매가 불가하므로 적용 불가 쿠폰일 경우 오프라인 매장에서
            사용 시도 부탁드립니다.
          </p>
          <p>
            · 프로모션 및 이벤트 상품으로 구매하신 상품의 원가와 영수증에
            표기되는 금액이 상이할 수 있습니다.
          </p>
        </Description>
        <CloseBtn onClick={handleBtn}>접기</CloseBtn>
      </>
    );
  };

  const CloseNotice = () => {
    return (
      <>
        <Text>구매하신 상품은 반드시 유효기간 내에 사용해주셔야 합니다.</Text>
        <MoreBtn onClick={handleBtn}>더보기</MoreBtn>
      </>
    );
  };

  const handleBtn = () => {
    setNotice((notice) => !notice);
  };

  return (
    <MainContainer>
      <h2 className="sr-only">상품 상세 페이지</h2>
      <Card />
      <NoticeCont>
        <TitleCont>
          <ArrowRightIcon className="Arrow-Icon" />
          <Title>유의사항</Title>
        </TitleCont>
        <TextCont>{notice ? <OpenNotice /> : <CloseNotice />}</TextCont>
      </NoticeCont>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
`;

const NoticeCont = styled.article`
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 300px;
`;

const TitleCont = styled.div`
  display: flex;
  align-items: center;
  .Arrow-Icon {
    width: 18px;
    height: 18px;
    color: #c2c2c2;
  }
`;

const Title = styled.strong`
  font-size: 11px;
  font-weight: 300;
  color: #c2c2c2;
`;

const TextCont = styled.div`
  margin-left: 5px;
`;

const Text = styled.p`
  font-size: 11px;
  font-weight: 300;
  color: #c2c2c2;
`;

const MoreBtn = styled.button`
  text-align: start;
  width: fit-content;
  text-decoration: underline;
  font-size: 11px;
  font-weight: 300;
  color: #c2c2c2;
  padding: 0;
  margin-left: 2px;
`;

const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 1.5;
  font-size: 11px;
  font-weight: 300;
  color: #c2c2c2;
  margin-bottom: 5px;
`;

const CloseBtn = styled.button`
  text-align: start;
  width: fit-content;
  text-decoration: underline;
  font-size: 11px;
  font-weight: 300;
  color: #c2c2c2;
  padding: 0;
  margin-left: 2px;
`;
