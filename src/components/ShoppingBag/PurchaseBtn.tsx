import styled from "@emotion/styled";

export const PurchaseBtn = () => {
  return <Btn>구매하기</Btn>;
};
const Btn = styled.button`
  padding: 15px 0;
  border-radius: 0;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: #ff5757;
  font-size: 17px;
  color: #ffff;
`;
