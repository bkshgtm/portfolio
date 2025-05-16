import React from "react";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { GridContainer, ProjectCard, Img, Title, Description } from "./ProjectsStyles";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
        <ProjectCard
          key={i}
          className="hover-effect"
          onClick={() => window.open(p.visit, "_blank")}
        >
          <Img src={p.image} alt={p.title} />
          <Title>{p.title}</Title>
          <Description>{p.description}</Description>
        </ProjectCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
