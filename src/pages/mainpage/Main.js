import styled from "styled-components";
import Header from "../../component/router/Header";
import worldImage from "../../assets/mainPageWorld.png";

function Main() {
  return (
    <>
      <Wrapper>
        <RecruitmentBadge>모집중</RecruitmentBadge>
        <ContentContainer>
          <FirstComment>Research, Reinvent, Reach Beyond</FirstComment>
          <SecondComment>
            "R-CUBE는 연구로 세상을 변화시키고, 혁신으로 미래를 설계하는 인재를
            양성합니다."
          </SecondComment>
        </ContentContainer>
        <ImageWrapper>
          <MainImage src={worldImage} alt="World Image" />
        </ImageWrapper>
      </Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RecruitmentBadge = styled.div`
  position: absolute;
  top: 200px; /* 화면 상단에서의 거리 */
  left: 520px; /* 수평 중앙 정렬 */
  transform: translateX(-50%);
  width: 100px;
  height: 34px;
  background-color: #28887a;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100; /* 다른 요소 위에 표시되도록 높은 z-index 설정 */
`;

const ContentContainer = styled.div`
  text-align: center;
  margin-top: 60px; /* 배지와 간격 조정 */
`;

const FirstComment = styled.div`
  font-family: "Ink Free", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 56.5px;
  color: black;
  margin-bottom: 10px; /* 아래 텍스트와 간격 */
`;

const SecondComment = styled.div`
  font-family: "Ink Free", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: black;
  line-height: 28px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px; /* 텍스트와 이미지 간격 조정 */
`;

const MainImage = styled.img`
  width: 70%; /* 반응형 너비 */
  max-width: 780px;
  height: auto;
  border-radius: 10px; /* 둥근 모서리 효과 */
`;
