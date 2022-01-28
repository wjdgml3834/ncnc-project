import styled from "@emotion/styled";
import { MiniCard } from "./MiniCard";
import latte from "../../images/starbucks-latte.png";
import americano from "../../images/starbucks-americano.png";

export const MiniCardCont = () => {
  const goodsDatas = [
    {
      id: 1,
      image: americano,
      category: "스타벅스",
      name: "아메리카노",
      discountRate: "19%",
      sellingPrice: "4,130원",
      originalPrice: "4,900원",
    },
    {
      id: 2,
      image: latte,
      category: "스타벅스",
      name: "카페라떼",
      discountRate: "15%",
      sellingPrice: "4,280원",
      originalPrice: "5,000원",
    },
    {
      id: 3,
      image: americano,
      category: "스타벅스",
      name: "아메리카노",
      discountRate: "21%",
      sellingPrice: "4,030원",
      originalPrice: "4,900원",
    },
  ];
  return (
    <>
      <Cont>
        {goodsDatas.map((goodsData) => {
          return <MiniCard key={goodsData.id} goodsData={goodsData} />;
        })}
      </Cont>
    </>
  );
};

const Cont = styled.section`
  display: flex;
  overflow: hidden;
  gap: 5px;
`;
