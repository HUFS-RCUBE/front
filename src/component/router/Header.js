import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">R-CUBE</Link>
      </Logo>
      <Menu>
        <MenuBtn to="/societymanagement">학회운영</MenuBtn>
        <MenuBtn to="/project">프로젝트</MenuBtn>
        <MenuBtn to="/faq">F&A</MenuBtn>
        <LoginBtn to="/login">로그인</LoginBtn>
      </Menu>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: fixed;
  background: white;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  border: none;
  text-align: center;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 2rem;
    text-decoration: none;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  gap: 4rem;
`;

const MenuBtn = styled(Link)`
  font-size: 0.8rem;
  text-decoration: none;
  color: black;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

const LoginBtn = styled(Link)`
  color: white;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 5px;
  font-size: 0.8rem;
  text-decoration: none;
  width: 8rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 3rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
