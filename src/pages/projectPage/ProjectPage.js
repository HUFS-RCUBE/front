import React, { useState } from 'react';
import styled from "styled-components";
import Button from "./projectComponent/proButton";
import ProjectCard from "./projectComponent/proCard"; 

const projectData = [
  { id: 1, year: '24년도', name: 'SODA', tags: ['React', 'Spring'], description: '현대인의 스트레스 해소를 위한 AI 다이어리', image: 'https://via.placeholder.com/300' },
  { id: 2, year: '24년도', name: '프로젝트 명', tags: ['React'], description: '프로젝트 간단 소개 작성하기 이 프로젝트를 어떤 서비스입니다', image: 'https://via.placeholder.com/300' },
  { id: 3, year: '23년도', name: '프로젝트 B', tags: ['React'], description: '23년도 프로젝트 설명', image: 'https://via.placeholder.com/300' },
  { id: 4, year: '22년도', name: '프로젝트 C', tags: ['Spring'], description: '22년도 프로젝트 설명', image: 'https://via.placeholder.com/300' },
];

function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const projectCounts = projectData.reduce((acc, project) => {
    acc[project.year] = (acc[project.year] || 0) + 1;
    return acc;
  }, { 전체: projectData.length });

  const filteredProjects = selectedCategory === '전체' 
    ? projectData
    : projectData.filter(project => project.year === selectedCategory);

  return (
    <Wrapper>
      <ExText>프로젝트</ExText>
      <ExText>지금까지의 R-CUBE를 만나보세요</ExText>
      <ButtonCon>
        <Button 
          text={`전체(${projectCounts['전체']})`} 
          onClick={() => setSelectedCategory('전체')} 
          isActive={selectedCategory === '전체'}
        />
        <Button 
          text={`24년도(${projectCounts['24년도']})`} 
          onClick={() => setSelectedCategory('24년도')} 
          isActive={selectedCategory === '24년도'}
        />
        <Button 
          text={`23년도(${projectCounts['23년도']})`} 
          onClick={() => setSelectedCategory('23년도')} 
          isActive={selectedCategory === '23년도'}
        />
        <Button 
          text={`22년도(${projectCounts['22년도']})`} 
          onClick={() => setSelectedCategory('22년도')} 
          isActive={selectedCategory === '22년도'}
        />
      </ButtonCon>
      <CardCon>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            year={project.year}
            image={project.image}
            name={project.name}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </CardCon>
    </Wrapper>
  );
}

export default ProjectPage;

const Wrapper = styled.div`
  background-color: #F3F3F3;
  width: 100vw;
  height: auto;
`;

const ExText = styled.div`
  margin-left: 73px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const ButtonCon = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const CardCon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px;
`;
