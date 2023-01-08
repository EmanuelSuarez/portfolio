import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+541139088010' >+54 9 11 3908 8010</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:braianesuarez@gmail.com' >braianesuarez@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>Innovating one project at a time</CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/EmanuelSuarez' target="_blank" >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/emanuelsuarez' target="_blank" >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/braiannsuarez  ' target="_blank" >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
