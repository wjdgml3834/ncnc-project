import { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import latte from "../images/starbucks-latte.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Card = () => {
  const goodsData = {
    id: 1,
    image: latte,
    category: "스타벅스",
    name: "카페라떼",
    discountRate: "15%",
    sellingPrice: "4,230원",
    originalPrice: "5,000원",
  };

  const [heartOn, setHeartOn] = useState(false);

  const handleLikeBtn = () => {
    if (heartOn) {
      setHeartOn((heartOn) => !heartOn);
    } else setHeartOn((heartOn) => !heartOn);
  };

  return (
    <Cont>
      <CardCont>
        <h3 className="sr-only">기프티콘 상품 </h3>
        <Image src={goodsData.image} alt="상품 이미지" />
        <Info>
          <CategoryTxt>{goodsData.category}</CategoryTxt>
          <NameTxt>{goodsData.name}</NameTxt>
          <PriceCont>
            <DiscountRate>{goodsData.discountRate}</DiscountRate>
            <SellingPrice>{goodsData.sellingPrice}</SellingPrice>
            <OriginalPrice>{goodsData.originalPrice}</OriginalPrice>
          </PriceCont>
          <LikeBtn onClick={handleLikeBtn}>
            <span className="sr-only">관심상품 버튼</span>
            {heartOn ? (
              <FavoriteIcon className="LikeBtn-filled-icon" />
            ) : (
              <FavoriteBorderOutlinedIcon className="LikeBtn-outlined-icon" />
            )}
          </LikeBtn>
        </Info>
      </CardCont>
    </Cont>
  );
};

const Cont = styled.article`
  display: flex;
  padding: 15px 20px;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
`;

const CardCont = styled.article`
  display: flex;
  position: relative;
  min-width: 330px;
  margin: 0 auto;
`;

const Info = styled.section`
  margin-left: 50px;
`;

const CategoryTxt = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: #999;
  margin-bottom: 5px;
`;

const NameTxt = styled.h2`
  margin-bottom: 15px;
`;

const PriceCont = styled.div`
  display: flex;
  align-items: flex-end;
`;

const DiscountRate = styled.small`
  font-weight: 300;
  font-size: 16px;
  color: #ff5757;
  margin-right: 10px;
`;

const SellingPrice = styled.strong`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

const OriginalPrice = styled.small`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;

const LikeBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 0px;
  right: 0;
  width: 18px;
  height: 18px;
  color: #c4c4c4;
  background-color: white;
  .LikeBtn-outlined-icon {
    width: 20px;
    height: 20px;
  }
  .LikeBtn-filled-icon {
    width: 20px;
    height: 20px;
    color: #ff5757;
  }
`;
