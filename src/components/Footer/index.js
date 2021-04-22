import React from 'react';
import { FaInstagram, FaFaceBook } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Pizza</SocialLogo>
              <SocialIcons>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFaceBook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFaceBook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFaceBook />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default Footer;
