import styled from "@emotion/styled";
import { ShoppingCard } from "./ShoppingCard";

export const Main = () => {
  return (
    <>
      <ShoppingCard />
      <ShoppingCard />
      <ShoppingCard />
      <ShoppingCard />
      <AddBtn>+ 상품추가</AddBtn>
    </>
  );
};

const AddBtn = styled.button`
  width: 100%;
  background-color: #ff5757;
  border-radius: 3px;
  color: #ffff;
  font-size: 15px;
  margin: 0 auto;
  margin-top: 10px;
`;
