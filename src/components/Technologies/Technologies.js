import React from "react";
import { DiReact, DiDjango, DiJava, DiSwift } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  CardContainer,
  Card,
  CardIcon,
  CardTitle,
  CardParagraph,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Proactive Computer Science student with hands-on experience in web and iOS development. Skilled in Python, Java, and modern frameworks.
    </SectionText>
    <CardContainer>
      <Card>
        <CardIcon>
          <DiReact size="4rem" />
        </CardIcon>
        <CardTitle>Front-End</CardTitle>
        <CardParagraph>
          React.js, Next.js, HTML5, CSS3, JavaScript, Bootstrap, MaterialUI
        </CardParagraph>
      </Card>
      <Card>
        <CardIcon>
          <DiDjango size="4rem" />
        </CardIcon>
        <CardTitle>Back-End</CardTitle>
        <CardParagraph>
          Python with Django, SQL, Java, PostgreSQL, MongoDB
        </CardParagraph>
      </Card>
      <Card>
        <CardIcon>
          <DiSwift size="4rem" />
        </CardIcon>
        <CardTitle>iOS Development</CardTitle>
        <CardParagraph>
          Swift, SwiftUI for building dynamic iOS applications.
        </CardParagraph>
      </Card>
      <Card>
        <CardIcon>
          <DiJava size="4rem" />
        </CardIcon>
        <CardTitle>Java Development</CardTitle>
        <CardParagraph>
          Java and JavaFX for user interface and application development.
        </CardParagraph>
      </Card>
    </CardContainer>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
