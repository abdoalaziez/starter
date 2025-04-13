import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
`;

const ToggleButton = styled.button`
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  background: ${({ active, theme }) => (active ? theme.primary + 20 : "transparent")};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const filteredProjects = toggle === "all" ? projects : projects.filter(p => p.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on various projects, from web apps to Android apps. Here are some of them.</Desc>

        <ToggleButtonGroup>
          {["all", "web app", "android app", "machine learning"].map(category => (
            <ToggleButton key={category} active={toggle === category} onClick={() => setToggle(category)}>
              {category.toUpperCase()}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map(project => (
            <ProjectCard project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;