import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSpotify, FaYoutube, FaPinterestP, FaTiktok } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import Thomas from '../Images/AuroraB.jpeg'; // Placeholder image
import Waveform from '../Waveform'; // Import the waveform component
import flows from '../Images/flows.png'; // Placeholder for the flower image

const CreativeArtistView = () => {
  return (
    <Container>
      {/* Uncomment this wrapper to add the flower image as a background */}
      <FlowerBackground />
      
      <Title>Aurora B.</Title>
      
      <CustomTabBar>
        <TabLink to="/about">Om</TabLink>
        <TabLink to="/projects">Utgivelser</TabLink>
        <TabLink to="/contact">Kontakt</TabLink>
        <ExternalTabLink href="https://studio51.vercel.app" target="_blank">Studio 51</ExternalTabLink>
      </CustomTabBar>

      <PolaroidWrapper>
        <Waveform /> {/* Add the waveform behind the Polaroid */}
        <PolaroidFrame>
          <Image src={Thomas} alt="Polaroid" />
          <Caption><strong>Aurora B.</strong></Caption>
        </PolaroidFrame>
      </PolaroidWrapper>

      <SocialIcons>
        <SocialIcon href="https://facebook.com" target="_blank"><FaFacebookF /></SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank"><FaTwitter /></SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank"><FaInstagram /></SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank"><FaLinkedinIn /></SocialIcon>
        <SocialIcon href="https://spotify.com" target="_blank"><FaSpotify /></SocialIcon>
        <SocialIcon href="https://youtube.com" target="_blank"><FaYoutube /></SocialIcon>
        <SocialIcon href="https://pinterest.com" target="_blank"><FaPinterestP /></SocialIcon>
        <SocialIcon href="https://tiktok.com" target="_blank"><FaTiktok /></SocialIcon>
      </SocialIcons>

      <Footer>
        © {new Date().getFullYear()} Studio 51. All rights reserved.
      </Footer>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Inter', sans-serif; /* Set the Inter font */
  text-align: center;
  border: 8px solid #000000;
  box-sizing: border-box;
  overflow: hidden;
`;

const FlowerBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: contain; /* Keep the aspect ratio of the image */
  background-position: top center; /* Position at the top center */
  filter: grayscale(100%) brightness(0) invert(0); 
  z-index: 0; /* Place it behind other content */
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 800; /* Thicker strokes for emphasis */
  letter-spacing: 2px;
  margin-bottom: 10px;
  z-index: 1; /* Bring the title in front of the background */
`;

const CustomTabBar = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 80px;
  z-index: 1; /* Bring the tab bar in front of the background */
`;

const TabLink = styled(Link)`
  font-size: 30px;
  font-weight: 500; /* Medium weight */
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalTabLink = styled.a`
  font-size: 30px;
  font-weight: 500; /* Medium weight */
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
`;

const PolaroidWrapper = styled.div`
  position: relative; /* For positioning the canvas behind the Polaroid */
  display: inline-block;
`;

const PolaroidFrame = styled.div`
  background-color: #ffffff;
  border: 8px solid #000000;
  padding: 20px;
  width: 320px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  position: relative; /* Stays on top of waveform */
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Caption = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1; /* Bring social icons in front of the background */
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #555555;
  }
`;

const Footer = styled.footer`
  position: absolute; /* Sticks footer to the bottom */
  bottom: 10px;
  font-size: 14px;
  font-weight: 400; /* Slightly thinner for contrast */
  color: #000000;
  z-index: 1; /* Bring footer in front of the background */
`;

export default CreativeArtistView;