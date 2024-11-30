import styled from 'styled-components';

const ProButton = ({ text, onClick, isActive }) => {
  return <Button onClick={onClick} isActive={isActive}>{text}</Button>;
};

export default ProButton;

const Button = styled.button`
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.mainColor : '#F7F7FA'};
  color: ${({ isActive }) => isActive ? 'white' : '#CDCED6'};
  font-size: 16px;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  
  &:active {
    opacity: 0.8;  // 클릭 시 약간의 투명 효과
  }
`;
