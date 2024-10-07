import React from 'react';
import styled, { keyframes } from 'styled-components';
import BorderBottomWaveform from './BorderBottomWaveform'; // Import the waveform component
import FlowerPowerImage from './Images/FlowerPower.png';   // Placeholder for flower frame image

// Animation for flower sway
const sway = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
`;

// Hero section styled component
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

// Flower frame styled component
const TopFlowerFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${FlowerPowerImage}); /* Use flower image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  filter: grayscale(100%) brightness(0) invert(0); /* Style the flower frame in black */
`;

// Flower frame styled component
const FlowerFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${FlowerPowerImage}); /* Use flower image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  filter: grayscale(100%) brightness(0) invert(0); /* Style the flower frame in black */
`;

// Wrapper for the text and waveform
const LogoWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Text styling for "Lydhagen"
const HeroText = styled.h1`
  font-size: 120px;
  color: #000;
  text-align: center;
  margin-bottom: -20px; /* Reduce margin to bring text closer to waveform */
`;

const Hero = () => {
  return (
    <HeroSection>
      {/* Flower frame surrounding the hero section */}
      <FlowerFrame />
      <TopFlowerFrame />
      <LogoWrapper>
        {/* Text "Lydhagen" */}
        <HeroText>Lydhagen</HeroText>
        {/* Border-bottom waveform right below the text */}
        <BorderBottomWaveform />
      </LogoWrapper>
    </HeroSection>
  );
};

export default Hero;