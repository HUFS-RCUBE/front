import React from 'react';
import styled from 'styled-components';
import { IoClose } from "react-icons/io5";

const ProModal = ({ show, onClose, project }) => {
  if (!show || !project) return null;

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
            <IoClose />
        </CloseButton>
        <ModalImage src={project.image} alt={project.name} />
        <ProjectInfo>
          <YearBadge>{`${project.year}기`}</YearBadge>
          <ProjectName>{project.name}</ProjectName>
          <ProjectShortDesc>{project.description}</ProjectShortDesc>

          <ServiceButton href={project.link} target="_blank" rel="noopener noreferrer">
            서비스 바로가기
          </ServiceButton>

          <ProjectLongDesc>
            프로젝트 설명 길게~~~~ 하는 공간 어떻게 저렇게 저렇고 그런거 쓰는
          </ProjectLongDesc>

          <TechStackTitle>사용한 기술 스택</TechStackTitle>
          <TechStack>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TechStack>

          <TeamTitle>프로젝트에 참여한 개발자들</TeamTitle>
          <TeamRoles>
            <TeamRole>PM</TeamRole>
            <TeamRole>FE</TeamRole>
            <TeamRole>BE</TeamRole>
          </TeamRoles>
        </ProjectInfo>
      </ModalContent>
    </Overlay>
  );
};

export default ProModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  max-height: 80vh;
  width: 500px;
  position: relative;
  overflow-y: auto; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  margin: 16px 0;
  object-fit: cover;
  border-radius: 12px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const YearBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: #FFFFFF;
  font-weight: bold;
  border-radius: 12px;
  padding: 4px 12px;
  display: inline-block;
  width: 40px;
  display: flex;           
  justify-content: center;  
  align-items: center;
`;

const ProjectName = styled.h2`
  font-size: 1.8rem;
  color: #333;
  font-weight: bold;
  margin: 0;
`;

const ProjectShortDesc = styled.p`
  font-size: 1rem;
  color: #666666;
`;

const ServiceButton = styled.a`
  align-self: flex-end;
  background: #f0f0f5;
  color: #666;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
`;

const ProjectLongDesc = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.5;
`;

const TechStackTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background-color: rgba(229, 138, 123, 0.3);
  color: #E58A7B;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const TeamTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const TeamRoles = styled.div`
  display: flex;
  gap: 30px;
`;

const TeamRole = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: bold;
`;
