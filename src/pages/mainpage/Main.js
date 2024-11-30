import styled from "styled-components";
import Header from "../../component/router/Header";
import worldImage from "../../assets/mainPageWorld.png";

function Main() {
  return (
    <>
      <Wrapper>
        <Header />
        <RecruitmentBadge>모집중</RecruitmentBadge>
        <ImageWrapper>
          <MainImage src={worldImage} alt="World Image" />
        </ImageWrapper>
      </Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  weight: 100vh;
  height: 8vh;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const MainImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 300px;
`;

const RecruitmentBadge = styled.div`
  width: 117px;
  height: 37px;
  position: absolute;
  top: 187px; /* 배지의 세로 위치 */
  left: 285px; /* 배지의 가로 위치 */
  background-color: #2e7d6b; /* 초록색 배경 */
  color: white; /* 텍스트 색상 */
  font-size: 14px;
  font-weight: bold;
  border-radius: 50px; /* 둥근 모서리 */
  display: flex;
  align-items: center; /* 텍스트 세로 중앙 정렬 */
  justify-content: center; /* 텍스트 가로 중앙 정렬 */
  pointer-events: none; /* 클릭 불가능하게 설정 */
`;
