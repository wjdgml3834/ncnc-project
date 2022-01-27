import styled from "@emotion/styled";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { OpenRefund } from "./OpenRefund";
import { CloseRefund } from "./CloseRefund";

export const RefundToggle = () => {
  const [refund, setRefund] = useState(false);

  const handleBtn = () => {
    setRefund((refund) => !refund);
  };

  return (
    <>
      <RefundCont>
        <TitleCont>
          <ArrowRightIcon className="Arrow-Icon" />
          <Title>환불규정</Title>
        </TitleCont>
        <TextCont>
          {refund ? (
            <OpenRefund handleBtn={handleBtn} />
          ) : (
            <CloseRefund handleBtn={handleBtn} />
          )}
        </TextCont>
      </RefundCont>
    </>
  );
};

const RefundCont = styled.article`
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 300px;
  margin-top: 20px;
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
