import React from 'react';
import styled, { keyframes } from 'styled-components';
import MusicCircleImage from './Images/MusicCircle.png'; // Import MusicCircle image
import BorderBottomWaveform from './components/BorderBottomWaveform'; // Import the waveform component

// Animation for circular rotation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Hero section styled component
const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffff; /* Light gray background */
  position: relative;
  overflow: hidden;
`;

// Rotating image container
const RotatingImage = styled.div`
  position: absolute;
  width: 1000px; /* Adjust as needed */
  height: 1000px;
  background-image: url(${MusicCircleImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotate} 50s linear infinite; /* Rotates continuously */
`;

// Wrapper for the text
const LogoWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Centered text styling
const HeroText = styled.h1`
  font-size: 120px;
  color: #000;
  text-align: center;
  margin-bottom: -20px; /* Reduce margin to bring text closer to waveform */

`;

const Hero = () => {
  return (
    <HeroSection>
      {/* Rotating image */}
      <RotatingImage />
      {/* Centered text */}
      <LogoWrapper>
        <HeroText>Studio 51</HeroText>
        <BorderBottomWaveform />
      </LogoWrapper>
    </HeroSection>
  );
};

export default Hero;