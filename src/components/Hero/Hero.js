import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Bikash Gautam
        </SectionTitle>
        <SectionText>
          Proactive Computer Science student with hands-on experience in web and iOS development. Skilled in Python, Java, C++, Swift, and modern frameworks. Proven ability to create dynamic applications and collaborate effectively in team settings.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
