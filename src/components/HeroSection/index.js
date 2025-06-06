import React, { useRef } from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
  HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, 
  HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton 
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion, useInView } from 'framer-motion';

const MotionHeroContainer = motion(HeroContainer);

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div id="about">
      <MotionHeroContainer
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Olá, eu sou <br /> {Bio.name}</Title>
            <TextLoop>
              Eu sou um
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Currículo</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </MotionHeroContainer>
    </div>
  );
};

export default HeroSection;
