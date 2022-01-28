import styled from "@emotion/styled";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <Link href="/">
          <a>
            <ArrowBackIcon className="icon" />
          </a>
        </Link>
        <Text>상품 상세</Text>
        <Link href="/mylist">
          <a>
            <ShoppingBasketIcon className="icon" />
          </a>
        </Link>
      </Section>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
`;

const Section = styled.section`
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    color: #767676;
    width: 28px;
    height: 28px;
  }
`;

const Text = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;
