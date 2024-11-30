import styled from "styled-components";

function IntroduceRcubeMember() {
  const members = [
    { name: "설희관", role: "학회장", github: "github.com" },
    { name: "이예림", role: "학회원", github: "github.com/yerimi00" },
    { name: "이승주", role: "학회원", github: "github.com" },
    { name: "김재현", role: "학회원", github: "github.com/rlawogjs" },
    { name: "???", role: "학회원", github: "github.com" },
  ];

  return (
    <Wrapper>
      <Section>
        <Title>학회장</Title>
        <CardGrid>
          <Card>
            <ProfileCircle />
            <MemberName>{members[0].name}</MemberName>
            <MemberRole>#{members[0].role}_컴퓨터전자시스템공학부</MemberRole>
            <Button href={`https://${members[0].github}`} target="_blank">
              github
            </Button>
          </Card>
        </CardGrid>
      </Section>
      <Section>
        <Title>학회원</Title>
        <CardGrid>
          {members.slice(1).map((member, idx) => (
            <Card key={idx}>
              <ProfileCircle />
              <MemberName>{member.name}</MemberName>
              <MemberRole>#HUFS_CSE_컴퓨터전자시스템공학부</MemberRole>
              <Button href={`https://${member.github}`} target="_blank">
                github
              </Button>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </Wrapper>
  );
}

export default IntroduceRcubeMember;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: white;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.mainColor};
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
  text-align: center;
  width: 200px;
  hei
`;

const ProfileCircle = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 50%;
  margin: 0 auto 1rem auto;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }
`;
