import { Route, Routes } from "react-router-dom";
import Main from "./pages/mainpage/Main";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";
import SocietyManagement from "./pages/societyManagement/SocietyManagement";
import ProjectPage from "./pages/projectPage/ProjectPage";
import QandAPage from "./pages/qandapage/QandAPage";
import Header from "./component/router/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Wrapper>
          <Container>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/societymanagement"
                element={<SocietyManagement />}
              />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="/faq" element={<QandAPage />} />
            </Routes>
          </Container>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  //overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    height: 100vh;
  }
`;
