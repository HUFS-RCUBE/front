import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import projectImage from "../../assets/projectPicture.png";
import worldImage from "../../assets/mainPageWorld.png";

const Main = () => {
  const [isPaused, setIsPaused] = useState(false); // 애니메이션 상태 관리
  const [activeIndex, setActiveIndex] = useState(null); // BarItem 활성화 상태 관리
  const navigate = useNavigate();

  const images = [
    projectImage,
    projectImage,
    projectImage,
    projectImage,
    projectImage,
    projectImage,
  ]; // 이미지 배열

  const months = ["3월", "4-6월", "7-8월", "8-9월", "10-11월"]; // BarWrapper 항목

  const handleMoreProjects = () => {
    navigate("/project"); // "/project"로 페이지 이동
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index); // 마우스 오버 시 활성화
  };

  const handleMouseLeave = () => {
    setActiveIndex(null); // 마우스 아웃 시 활성화 해제
  };

  return (
    <>
      <Wrapper>
        <RecruitmentBadge>모집중</RecruitmentBadge>
        <FirstComment>Research, Reinvent, Reach Beyond</FirstComment>
        <SecondComment>
          "R-CUBE는 연구로 세상을 변화시키고, 혁신으로 미래를 설계하는 인재를
          양성합니다."
        </SecondComment>
        <ImageWrapper>
          <MainImage src={worldImage} alt="World Image" />
        </ImageWrapper>
        <StatsContainer>
          <StatItem>
            <Label>누적 프로젝트 수</Label>
            <Value>10+</Value>
          </StatItem>
          <StatItem>
            <Label>누적 학회원 수</Label>
            <Value>590</Value>
          </StatItem>
          <StatItem>
            <Label>23기 회원수</Label>
            <Value>9+</Value>
          </StatItem>
        </StatsContainer>
        <ThirdComment>지금까지 알큐브에서 제작한 프로젝트에요!</ThirdComment>
        <FourthSection>
          <Slider
            isPaused={isPaused}
            onMouseEnter={() => setIsPaused(true)} // 마우스 오버 시 애니메이션 정지
            onMouseLeave={() => setIsPaused(false)} // 마우스 아웃 시 애니메이션 재개
          >
            {images.concat(images).map((img, index) => (
              <ImageCard key={index}>
                <ProjectImage src={img} alt={`Project Image ${index + 1}`} />
              </ImageCard>
            ))}
          </Slider>
        </FourthSection>
        <MoreProjectButton onClick={handleMoreProjects}>
          프로젝트 더보기
        </MoreProjectButton>
        <FourthComment>알큐브는 어떻게 활동하나요?</FourthComment>

        <Row>
          <Card grayscale={activeIndex !== 0 && activeIndex !== null}>
            <MonthBadge>3월</MonthBadge>
            <Title>R-CUBE 모집!</Title>
            <Description>
              R-CUBE와 함께 스터디/프로젝트를 할 큐브를 모집해요. 의미 있는 1년
              활동을 위해 노력해요!
            </Description>
          </Card>
          <Card grayscale={activeIndex !== 1 && activeIndex !== null}>
            <MonthBadge>4-6월</MonthBadge>
            <Title>파트별 스터디</Title>
            <Description>
              매주 수요일마다 파트별 사람들과 스터디를 진행해요! 스터디하며
              어려웠던 개념 혹은 이해가 안 되는 부분에 대해 서로 공유하며 지식을
              키워나가요!
            </Description>
          </Card>
          <Card grayscale={activeIndex !== 2 && activeIndex !== null}>
            <MonthBadge>7-8월</MonthBadge>
            <Title>협업 미니 프로젝트</Title>
            <Description>
              스터디에서 나아가 함께 프로젝트를 진행해요! 기획부터 디자인,
              배포까지 간단하게 팀을 꾸려 내 기획을 직접 실현해요!
            </Description>
          </Card>
        </Row>
        <BarWrapper>
          {months.map((month, index) => (
            <BarItem
              key={index}
              active={index === activeIndex}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {month}
            </BarItem>
          ))}
        </BarWrapper>
        <Row>
          <Card grayscale={activeIndex !== 3 && activeIndex !== null}>
            <MonthBadge>8-9월</MonthBadge>
            <Title>MT</Title>
            <Description>
              함께 프로젝트를 만들고 스터디했던 알큐브와 MT를 즐겨봐요.
            </Description>
          </Card>
          <Card grayscale={activeIndex !== 4 && activeIndex !== null}>
            <MonthBadge>10-11월</MonthBadge>
            <Title>공모전 및 대외활동</Title>
            <Description>
              원하는 팀원을 모아 공모전 혹은 타 대회에 함께해요!
            </Description>
          </Card>
        </Row>
        <Footer>
          <FooterLogo>
            <LogoText>R-CUBE</LogoText>
          </FooterLogo>
          <FooterInfo>
            학회 인스타 -{" "}
            <FooterLink
              href="https://www.instagram.com/hufs_rcube"
              target="_blank"
            >
              hufs_rcube
            </FooterLink>
            <br />
            학회장 연락처 -
          </FooterInfo>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Main;

// 스타일 컴포넌트 정의

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const RecruitmentBadge = styled.div`
  background-color: #28887a;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  margin: 20px 0 -20px -500px;
`;

const FirstComment = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  color: black;
  text-align: center;
  margin-bottom: 10px;
`;

const SecondComment = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: black;
  text-align: center;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const MainImage = styled.img`
  max-width: 90%;
  height: auto;
  border-radius: 10px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -20px;
  width: 80%;
  padding: 20px 0;
`;

const StatItem = styled.div`
  text-align: center;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
`;

const Value = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #2e7d6b;
`;

const ThirdComment = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  width: 80%;
  padding: 20px 0;
  font-size: 30px;
  font-weight: 900;
  color: #2d6d64;
`;

const FourthSection = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const Slider = styled.div`
  display: flex;
  width: max-content;
  animation: scroll 20s linear infinite;
  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const ImageCard = styled.div`
  border-radius: 10px;
  padding: 5px;
  width: 300px;
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const MoreProjectButton = styled.button`
  margin-top: 30px;
  background-color: #ffffff;
  color: #2e7d6b;
  font-size: 16px;
  font-weight: bold;
  padding: 25px 60px;
  border: 2px solid #2e7d6b;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #2e7d6b;
    color: #ffffff;
  }
`;

const FourthComment = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  width: 80%;
  padding: 20px 0;
  font-size: 30px;
  font-weight: 900;
  color: #2d6d64;
`;

const BarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 20px;
  background-color: "#e0e0e0";
`;

const BarItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ active }) => (active ? "#ffffff" : "#555")};
  background-color: ${({ active }) => (active ? "#2e7d6b" : "#f0f0f0")};
  border-radius: 25px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? "#1f5b4a" : "#e0e0e0")};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #f7f8fa;
  border-radius: 16px;
  padding: 20px;
  width: 300px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  filter: ${({ grayscale }) => (grayscale ? "grayscale(100%)" : "none")};
  transition: filter 0.3s ease;
`;

const MonthBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #2e7d6b;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 16px;
  padding: 5px 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  margin-top: 50px;
  gap: 50px;
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LogoText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const FooterInfo = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

const FooterLink = styled.a`
  color: #2e7d6b;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #1f5b4a;
  }
`;
