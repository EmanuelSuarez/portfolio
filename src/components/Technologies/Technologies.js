import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi'
import { FaEthereum } from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      i'm technologically agnostic. I've worked with various technologies in the web development world. From Design to Deployment.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js, SQL, noSQL, serverless, firebase, AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size='2.5rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Figma and Adobe XD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaEthereum size='3rem' />
        <ListContainer>
          <ListTitle>Blockchain - web3</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Solidity, web3, ethers, wagmi
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
