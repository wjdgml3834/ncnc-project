import styled from "@emotion/styled";

export const OpenNotice = ({ handleBtn }: any) => {
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
          · 프로모션 및 이벤트 상품으로 구매하신 상품의 원가와 영수증에 표기되는
          금액이 상이할 수 있습니다.
        </p>
      </Description>
      <CloseBtn
        onClick={() => {
          handleBtn();
        }}
      >
        접기
      </CloseBtn>
    </>
  );
};

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
