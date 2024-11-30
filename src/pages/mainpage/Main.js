import styled from "styled-components";
import projectImage from "../../assets/projectPicture.png";
import worldImage from "../../assets/mainPageWorld.png";

const Main = () => {
  const images = [
    projectImage,
    projectImage,
    projectImage,
    projectImage,
    projectImage,
    projectImage,
  ]; // 이미지 배열

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
          <Slider>
            {images.concat(images).map((img, index) => (
              <ImageCard key={index}>
                <ProjectImage src={img} alt={`Project Image ${index + 1}`} />
              </ImageCard>
            ))}
          </Slider>
        </FourthSection>
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
  padding: 10px 20px; /* 전체 패딩 */
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
  padding: 10px 20px; /* 내부 여백 */
  margin: 20px 0 5px -500px; /* 배지를 아래로, 오른쪽으로 이동 */
`;

const FirstComment = styled.div`
  font-size: 2.5rem; /* 반응형 글자 크기 */
  font-weight: 400;
  color: black;
  text-align: center;
  margin-bottom: 10px; /* 아래 텍스트와 간격 */
`;

const SecondComment = styled.div`
  font-size: 1.2rem; /* 반응형 글자 크기 */
  font-weight: 400;
  color: black;
  text-align: center;
  margin-bottom: 10px; /* 텍스트와 이미지 간격 */
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* 텍스트와 이미지 간격 */
`;

const MainImage = styled.img`
  max-width: 90%; /* 이미지가 화면 너비를 넘어가지 않도록 제한 */
  height: auto;
  border-radius: 10px; /* 모서리 둥글게 */
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  width: 80%;
  padding: 20px 0;
`;

const StatItem = styled.div`
  text-align: center;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #333; /* 텍스트 색상 */
  margin-bottom: 10px;
`;

const Value = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #2e7d6b; /* 초록색 */
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
  overflow: hidden; /* 넘치는 부분 숨김 */
  width: 100%; /* 부모 컨테이너 너비 */
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const Slider = styled.div`
  display: flex;
  width: max-content; /* 자식 요소의 총 너비에 맞춤 */
  animation: scroll 20s linear infinite; /* 애니메이션 추가 */

  @keyframes scroll {
    0% {
      transform: translateX(0); /* 시작 위치 */
    }
    100% {
      transform: translateX(-50%); /* 절반 정도 이동 */
    }
  }
`;

const ImageCard = styled.div`
  border-radius: 10px;
  padding: 5px;
  width: 300px; /* 고정된 이미지 카드 너비 */
  flex-shrink: 0; /* 크기 축소 방지 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; /* 이미지 둥글게 */
`;
