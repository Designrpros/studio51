import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaBehance, FaDribbble, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; 

// Placeholder images for the creative artists (can be replaced with real data)
import Creative1 from './Images/Studio51.png';
import Creative2 from './Images/Thomas.png';
import Creative3 from './Images/Thomas.png';

const CreativeArtistsGallery = () => {
  // Array of creative artists (replace with real data)
  const creatives = [
    { name: "Studio 51", role: "Arrangjør", image: Creative1, socials: { instagram: 'https://instagram.com', behance: 'https://behance.net' } },
    { name: "Visual Artist 2", role: "Graphic Designer", image: Creative2, socials: { dribbble: 'https://dribbble.com', linkedin: 'https://linkedin.com' } },
    { name: "Organizer 1", role: "Event Organizer", image: Creative3, socials: { facebook: 'https://facebook.com', twitter: 'https://twitter.com' } },
    { name: "Studio 51", role: "Arrangjør", image: Creative1, socials: { instagram: 'https://instagram.com', behance: 'https://behance.net' } },
    { name: "Visual Artist 2", role: "Graphic Designer", image: Creative2, socials: { dribbble: 'https://dribbble.com', linkedin: 'https://linkedin.com' } },
    { name: "Organizer 1", role: "Event Organizer", image: Creative3, socials: { facebook: 'https://facebook.com', twitter: 'https://twitter.com' } },
  ];

  return (
    <CreativeSection>
      <CreativeTitle>Backstage</CreativeTitle>
      <CreativeGrid>
        {creatives.map((creative, index) => (
          <CreativeCard key={index}>
            <PolaroidFrame>
              <Image src={creative.image} alt={creative.name} />
              <Caption>
                <strong>{creative.name}</strong> <br />
                {creative.role}
              </Caption>
            </PolaroidFrame>
            <SocialIcons>
              {creative.socials.instagram && (
                <SocialIcon href={creative.socials.instagram} target="_blank">
                  <FaInstagram />
                </SocialIcon>
              )}
              {creative.socials.behance && (
                <SocialIcon href={creative.socials.behance} target="_blank">
                  <FaBehance />
                </SocialIcon>
              )}
              {creative.socials.dribbble && (
                <SocialIcon href={creative.socials.dribbble} target="_blank">
                  <FaDribbble />
                </SocialIcon>
              )}
              {creative.socials.linkedin && (
                <SocialIcon href={creative.socials.linkedin} target="_blank">
                  <FaLinkedinIn />
                </SocialIcon>
              )}
              {creative.socials.facebook && (
                <SocialIcon href={creative.socials.facebook} target="_blank">
                  <FaFacebookF />
                </SocialIcon>
              )}
              {creative.socials.twitter && (
                <SocialIcon href={creative.socials.twitter} target="_blank">
                  <FaTwitter />
                </SocialIcon>
              )}
            </SocialIcons>
          </CreativeCard>
        ))}
      </CreativeGrid>
    </CreativeSection>
  );
};

// Styled Components

const CreativeSection = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  color: #000;
  text-align: center;
`;

const CreativeTitle = styled.h2`
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const CreativeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Responsive layout */
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CreativeCard = styled.div`
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  position: relative;
`;

const PolaroidFrame = styled.div`
  background-color: #ffffff;
  border: 8px solid #000000;
  padding: 20px;
  width: 320px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Caption = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #000;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #555555;
  }
`;

export default CreativeArtistsGallery;