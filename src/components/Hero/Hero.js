import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
 
const Hero = (props) => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center >
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I'm Emanuel Suarez, a full-stack web developer based in Buenos Aires. I enjoy to develop websites for both individuals and companies experimenting with all kinds of technologies to convey stories.
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/emanuelsuarez'} >Get in Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;