import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Logo>R-CUBE</Logo>
      <Menu>
        <MenuBtn>학회운영</MenuBtn>
        <MenuBtn>프로젝트</MenuBtn>
        <MenuBtn>F&A</MenuBtn>
        <LoginBtn>로그인</LoginBtn>
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
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 2rem;
  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  gap: 4rem;
`;

const MenuBtn = styled.div`
  font-size: 0.8rem;
`;

const LoginBtn = styled.div`
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
`;
