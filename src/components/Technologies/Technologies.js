import React from 'react';
import { DiReact, DiDjango, DiSwift } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiNodedotjs } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CardContainer, Card, CardIcon, CardTitle, CardParagraph } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm Bikash Gautam, a Computer Science student at Alabama A&M University and a first-generation college student. 
      I enjoy solving complex problems, building polished web and mobile apps, and contributing to research. 
      I'm passionate about algorithms, AI, and clean UI/UX.
    </SectionText>
    <CardContainer>
      <Card>
        <CardIcon>
          <DiReact size="4rem" />
          <SiNextdotjs size="3rem" style={{ marginLeft: '10px' }} />
        </CardIcon>
        <CardTitle>Front-End</CardTitle>
        <CardParagraph>
          React.js, Next.js, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, Material UI
        </CardParagraph>
      </Card>
      <Card>
        <CardIcon>
          <DiDjango size="4rem" />
          <SiNodedotjs size="3rem" style={{ marginLeft: '10px' }} />
        </CardIcon>
        <CardTitle>Back-End</CardTitle>
        <CardParagraph>
          Python with Django, Node.js, Java, SQL, PostgreSQL, MongoDB, Firebase
        </CardParagraph>
      </Card>
      <Card>
        <CardIcon>
          <DiSwift size="4rem" />
        </CardIcon>
        <CardTitle>Mobile & Desktop</CardTitle>
        <CardParagraph>
          Swift, SwiftUI for iOS Development, Java, JavaFX for Desktop Applications
        </CardParagraph>
      </Card>
    </CardContainer>
  </Section>
);

export default Technologies;
