import styled from "styled-components";

function IntroduceRcube() {
  return (
    <>
      <CardGrid>
        {categories.map((category, idx) => (
          <div>
            <Card key={idx}>
              <CardHeader>{category.title}</CardHeader>
              <CardDescription>{category.description}</CardDescription>
              <CardTags>
                {category.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </CardTags>

              <ProgressSection>
                <ProgressTitle>스터디 진행률</ProgressTitle>
                {category.progress.map((progress, index) => (
                  <ProgressRow key={index}>
                    <Label>{progress.name}</Label>
                    <ProgressBar>
                      <ProgressFill width={progress.percentage} />
                    </ProgressBar>
                  </ProgressRow>
                ))}
              </ProgressSection>
            </Card>
          </div>
        ))}
      </CardGrid>
    </>
  );
}
export default IntroduceRcube;

const categories = [
  {
    title: "Front-end",
    tags: ["HTML", "CSS", "JS", "React", "TypeScript"],
    description: "실력에 맞게 기초부터 탄탄하게 알아가요",
    progress: [
      { name: "예림", percentage: "70%" },
      { name: "재현", percentage: "80%" },
    ],
  },
  {
    title: "Back-end",
    tags: ["HTML", "CSS", "JS", "React", "TypeScript"],
    description: "실력에 맞게 기초부터 탄탄하게 알아가요",
    progress: [
      { name: "예림", percentage: "60%" },
      { name: "재현", percentage: "75%" },
    ],
  },
  {
    title: "Cloud",
    tags: ["HTML", "CSS", "JS", "React", "TypeScript"],
    description: "실력에 맞게 기초부터 탄탄하게 알아가요",
    progress: [
      { name: "예림", percentage: "85%" },
      { name: "재현", percentage: "90%" },
    ],
  },
  {
    title: "AI",
    tags: ["HTML", "CSS", "JS", "React", "TypeScript"],
    description: "실력에 맞게 기초부터 탄탄하게 알아가요",
    progress: [
      { name: "예림", percentage: "50%" },
      { name: "재현", percentage: "65%" },
    ],
  },
];

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: white;
`;
const HeaderPart = styled.div`
  display: flex;
  justify-content: space-around;
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
`;

const NavButton = styled.button`
  background: ${(props) => (props.active ? "#2c786c" : "#F0F0F5")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 900;
`;

const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
const CardDescription = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor.subtitleTextColor};
`;

const Tag = styled.span`
  background: #ffe6e6;
  color: #e58a7b;
  border-radius: 20px;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ProgressSection = styled.div`
  margin-top: 1rem;
`;

const ProgressTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
  width: 4rem;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 0.5rem;
  background: #e0e0e0;
  border-radius: 5px;
  margin-left: 0.5rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #2c786c;
  width: ${(props) => props.width};
  transition: width 0.3s ease;
`;
