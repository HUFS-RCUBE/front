import styled from "styled-components";
import Header from "../../component/router/Header";

function Main() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  weight: 100vh;
  height: 8vh;
`;
