import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

function QandAPage() {
  const questions = [
    {
      question: "컴퓨터공학부 학회가 아닌데 R-CUBE에 지원할 수 있나요?11111",
      answer: "아아니요",
      date: "2024.00.00",
    },
    {
      question: "컴퓨터공학부 학회가 아닌데 R-CUBE에 지원할 수 있나요?22222",
      answer: "아니요",
      date: "2024.00.00",
    },
  ];

  const [expandedIndex, setExpandedIndex] = React.useState(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Wrapper>
      <Title>
        한국외대 컴퓨터공학부 학회, <Highlight>R-CUBE</Highlight>에게
        질문하세요!
      </Title>
      <QuestionList>
        {questions.map((item, idx) => (
          <Card key={idx}>
            <Question>
              <QuestionText>
                <span>Q</span> {item.question}
              </QuestionText>
              <QuestionActions>
                <Date>{item.date}</Date>
                <ArrowIcon
                  onClick={() => toggleAnswer(idx)}
                  isExpanded={expandedIndex === idx}
                >
                  <IoIosArrowDown />
                </ArrowIcon>
              </QuestionActions>
            </Question>
            {expandedIndex === idx && item.answer && (
              <Answer>A {item.answer}</Answer>
            )}
          </Card>
        ))}
      </QuestionList>
      <RegisterButton onClick={openPopup}>질문 등록하기</RegisterButton>

      {isPopupOpen && (
        <PopupOverlay>
          <PopupContent>
            <CloseButton onClick={closePopup}>X</CloseButton>
            <InputContainer>
              <label>제목</label>
              <InputField type="text" placeholder="제목을 입력하세요" />
            </InputContainer>
            <InputContainer>
              <label>내용</label>
              <TextareaField placeholder="내용을 입력하세요"></TextareaField>
            </InputContainer>
            <PopupRegisterButton>질문 등록하기</PopupRegisterButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </Wrapper>
  );
}

export default QandAPage;

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textColor.titleTextColor};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 70%;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionText = styled.div`
  font-size: 1rem;
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.colors.mainColor};
    margin-right: 0.5rem;
  }
`;

const QuestionActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ArrowIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s;

  ${({ isExpanded }) =>
    isExpanded &&
    `
    transform: rotate(180deg);
  `}
`;

const Answer = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  background: #f0f0f5;
  padding: 0.5rem;
  border-radius: 5px;
  color: gray;
`;

const Date = styled.div`
  font-size: 0.8rem;
  color: gray;
`;

const RegisterButton = styled.button`
  margin: 2rem auto 0;
  display: block;
  background: ${({ theme }) => theme.colors.mainColor};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
  }

  &:active {
    background: ${({ theme }) => theme.colors.activeColor};
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  width: 400px;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextareaField = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 100px;
`;

const PopupRegisterButton = styled.button`
  background: ${({ theme }) => theme.colors.mainColor};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
  }

  &:active {
    background: ${({ theme }) => theme.colors.activeColor};
  }
`;
