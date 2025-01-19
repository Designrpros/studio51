import React from 'react';
import styled from 'styled-components';
import { FiMail, FiPhone, FiInstagram, FiYoutube } from 'react-icons/fi';
import flows from '../Images/flows.png'; // Placeholder for the flower image

const Contact = () => {
  return (
    <Container>
      <FlowerBackground />
      <Title>Kontakt</Title>
      <Description>
        Har du spørsmål eller ønsker å samarbeide? Ta kontakt med Aurora B. eller følg henne på sosiale medier for de siste oppdateringene.
      </Description>
      <ContactList>
        <ContactItem>
          <FiMail size={30} />
          <ContactText>
            <a href="mailto:kontakt@studio51.com">kontakt@studio51.com</a>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <FiPhone size={30} />
          <ContactText>
            <a href="tel:+4712345678">+47 123 45 678</a>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <FiInstagram size={30} />
          <ContactText>
            <a href="https://www.instagram.com/aurorabmusic" target="_blank" rel="noopener noreferrer">
              @aurorabmusic
            </a>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <FiYoutube size={30} />
          <ContactText>
            <a href="https://www.youtube.com/channel/UCEKJ-gazCVJDDarrIYcHs8g" target="_blank" rel="noopener noreferrer">
              Aurora B. på YouTube
            </a>
          </ContactText>
        </ContactItem>
      </ContactList>
      <StudioInfo>
        Aurora B. er en del av <strong>Studio 51</strong>, et kreativt fellesskap dedikert til å fremme kunst og musikk i verdensklasse.
      </StudioInfo>
      <Footer>© {new Date().getFullYear()} Studio 51. All rights reserved.</Footer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Inter', sans-serif;
  text-align: center;
  padding: 60px 40px 20px;
  box-sizing: border-box;
`;

const FlowerBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 200px;
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 0;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 20px;
  z-index: 1;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 40px;
  z-index: 1;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  z-index: 1;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ContactText = styled.span`
  font-size: 18px;

  a {
    color: #000000;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: #555555;
    }
  }
`;

const StudioInfo = styled.div`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin-top: 20px;
  z-index: 1;

  strong {
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-top: auto;
  z-index: 1;
`;

export default Contact;