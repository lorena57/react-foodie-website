import React from 'react';
import Navbar from '../Navbar';
import {
  HeroContainer,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  HeroContent,
} from './HeroElements';

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Food Ever</HeroH1>
          <HeroP>Ready when you are</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
