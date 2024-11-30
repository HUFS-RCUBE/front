import { useState } from "react";
import styled from "styled-components";
import IntroduceRcube from "./IntroduceRcube";
import IntroduceRcubeMember from "./IntroduceRcubeMember";

function SocietyManagement() {
  const [activeTab, setActiveTab] = useState("rcube");

  return (
    <Wrapper>
      <HeaderPart>
        <Title>
          한국외대 컴퓨터공학부 학회, <Highlight>R-CUBE</Highlight>에 대해
          만나보세요!
        </Title>
        <NavBar>
          <NavButton
            active={activeTab === "rcube"}
            onClick={() => setActiveTab("rcube")}
          >
            학회 소개
          </NavButton>
          <NavButton
            active={activeTab === "members"}
            onClick={() => setActiveTab("members")}
          >
            학회원 소개
          </NavButton>
        </NavBar>
      </HeaderPart>

      {activeTab === "rcube" && <IntroduceRcube />}
      {activeTab === "members" && <IntroduceRcubeMember />}
    </Wrapper>
  );
}

export default SocietyManagement;

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: white;
`;

const HeaderPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textColor.titleTextColor};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.deactivationColor};
  padding: 0.5rem;
`;

const NavButton = styled.button`
  background: ${(props) => (props.active ? "#2c786c" : "#F0F0F5")};
  color: ${(props) => (props.active ? "white" : "#898C9C")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "bold")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#2c786c" : "#e0e0e5")};
  }
`;
