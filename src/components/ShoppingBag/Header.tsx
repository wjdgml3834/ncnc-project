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
        <Text>장바구니</Text>
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
  align-items: center;
  position: relative;
  .icon {
    color: #767676;
    width: 28px;
    height: 28px;
  }
`;

const Text = styled.h1`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
