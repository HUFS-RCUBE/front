import React, { useState } from "react";
import styled from "styled-components";
import Button from "./projectComponent/proButton";
import ProjectCard from "./projectComponent/proCard";
import Modal from "./projectComponent/proModal";

const projectData = [
  {
    id: 1,
    year: "24",
    name: "SODA",
    tags: ["React", "Spring"],
    description: "현대인의 스트레스 해소를 위한 AI 다이어리",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/KYEON2",
  },
  {
    id: 2,
    year: "24",
    name: "프로젝트 명",
    tags: ["React"],
    description: "프로젝트 간단 소개 작성하기 이 프로젝트를 어떤 서비스입니다",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/KYEON2",
  },
  {
    id: 3,
    year: "23",
    name: "프로젝트 B",
    tags: ["React"],
    description: "23년도 프로젝트 설명",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/KYEON2",
  },
  {
    id: 4,
    year: "22",
    name: "프로젝트 C",
    tags: ["Spring"],
    description: "22년도 프로젝트 설명",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/KYEON2",
  },
];

function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCounts = projectData.reduce(
    (acc, project) => {
      acc[project.year] = (acc[project.year] || 0) + 1;
      return acc;
    },
    { 전체: projectData.length }
  );

  const filteredProjects =
    selectedCategory === "전체"
      ? projectData
      : projectData.filter((project) => project.year === selectedCategory);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
    
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <Wrapper>
      <Title>프로젝트</Title>
      <Title>지금까지의 R-CUBE를 만나보세요</Title>
      <ButtonCon>
        <Button
          text={`전체(${projectCounts["전체"]})`}
          onClick={() => setSelectedCategory("전체")}
          isActive={selectedCategory === "전체"}
        />
        <Button
          text={`24년도(${projectCounts["24"]})`}
          onClick={() => setSelectedCategory("24")}
          isActive={selectedCategory === "24"}
        />
        <Button
          text={`23년도(${projectCounts["23"]})`}
          onClick={() => setSelectedCategory("23")}
          isActive={selectedCategory === "23"}
        />
        <Button
          text={`22년도(${projectCounts["22"]})`}
          onClick={() => setSelectedCategory("22")}
          isActive={selectedCategory === "22"}
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
          onClick={() => handleCardClick(project)} 
        />
        ))}
      </CardCon>

      <Modal show={showModal} onClose={handleCloseModal} project={selectedProject} />
    </Wrapper>
  );
}

export default ProjectPage;

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
`;

const Title = styled.h1`
  text-align: left;
  margin-bottom:5px;
  margin-top:5px;
  color: ${({ theme }) => theme.colors.mainColor};
  margin-left: 73px;
`;

const ButtonCon = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
`

const CardCon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px;
`;
