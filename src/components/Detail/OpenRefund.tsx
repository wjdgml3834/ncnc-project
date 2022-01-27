import styled from "@emotion/styled";

interface handleBtn {
  handleBtn: () => void;
}

export const OpenRefund = ({ handleBtn }: handleBtn) => {
  return (
    <>
      <Description>
        <p>
          니콘내콘에서 판매되는 쿠폰은 개인간 거래를 통해 리셀링되는 상품으로
          환불 및 교환, 유효기간 연장이 불가합니다. 쿠폰 발행 방법의 따라
          현금영수증이 불가할 수 있습니다. 해당 사유로 인한 환불 및 교환은
          불가합니다.
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
  color: #ff5757;
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
