import styled from "@emotion/styled";

export const Footer = () => {
  return <OptionBtn>옵션 선택하기</OptionBtn>;
};
const OptionBtn = styled.button`
  padding: 15px 0;
  border-radius: 0;
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  background-color: #ff5757;
  font-size: 17px;
  color: #ffff;
`;
