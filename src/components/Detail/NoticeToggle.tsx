import styled from "@emotion/styled";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { OpenNotice } from "./OpenNotice";
import { CloseNotice } from "./CloseNotice";

export const NoticeToggle = () => {
  const [notice, setNotice] = useState(false);

  const handleBtn = () => {
    setNotice((notice) => !notice);
  };

  return (
    <>
      <NoticeCont>
        <TitleCont>
          <ArrowRightIcon className="Arrow-Icon" />
          <Title>유의사항</Title>
        </TitleCont>
        <TextCont>
          {notice ? (
            <OpenNotice handleBtn={handleBtn} />
          ) : (
            <CloseNotice handleBtn={handleBtn} />
          )}
        </TextCont>
      </NoticeCont>
    </>
  );
};

const NoticeCont = styled.article`
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
