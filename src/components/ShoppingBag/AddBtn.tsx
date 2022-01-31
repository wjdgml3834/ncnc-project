import styled from "@emotion/styled";

export const Btn = () => {
  return (
    <>
      <AddBtnCont>
        <AddBtn>+ 상품추가</AddBtn>
      </AddBtnCont>
    </>
  );
};

const AddBtnCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AddBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: gray;
  border-radius: 3px;
  color: #ffff;
  font-size: 15px;
  margin-top: 20px;
`;
