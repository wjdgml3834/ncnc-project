import styled from "@emotion/styled";
import Image from "next/image";
import latte from "../../images/starbucks-latte.png";

export const MiniCard = () => {
  const goodsData = {
    id: 1,
    image: latte,
    category: "스타벅스",
    name: "카페라떼",
    discountRate: "15%",
    sellingPrice: "4,230원",
    originalPrice: "5,000원",
  };

  return (
    <MiniCardCont>
      <h3 className="sr-only">다른 상품 카드</h3>
      <ContentCont>
        <Image src={goodsData.image} alt="상품 이미지" className="image" />
        <NameTxt>{goodsData.name}</NameTxt>
        <DiscountRate>{goodsData.discountRate}</DiscountRate>
        <SellingPrice>{goodsData.sellingPrice}</SellingPrice>
        <OriginalPrice>{goodsData.originalPrice}</OriginalPrice>
      </ContentCont>
    </MiniCardCont>
  );
};

const MiniCardCont = styled.button`
  position: relative;
  margin: 0 auto;
  width: 111px;
  height: 169px;
  border-radius: 5px;
  border: 2px solid #f5f5f5;
`;

const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameTxt = styled.h2`
  font-size: 12px;
  margin: 8px 0px 5px 0px;
`;

const DiscountRate = styled.small`
  font-weight: 300;
  width: 44px;
  background-color: #ff5757;
  font-size: 14px;
  color: white;
  border-radius: 2px;
  margin-bottom: 6px;
  font-size: 12px;
`;

const SellingPrice = styled.strong`
  font-size: 16px;
  font-weight: 600;
`;

const OriginalPrice = styled.small`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;