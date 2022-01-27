import styled from "@emotion/styled";

interface handleBtn {
  handleBtn: () => void;
}

export const CloseRefund = ({ handleBtn }: handleBtn) => {
  return (
    <>
      <Text>구매하신 상품은 반드시 유효기간 내에 사용해주셔야 합니다.</Text>
      <MoreBtn
        onClick={() => {
          handleBtn();
        }}
      >
        더보기
      </MoreBtn>
    </>
  );
};

const Text = styled.p`
  font-size: 11px;
  font-weight: 300;
  color: #ff5757;
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
