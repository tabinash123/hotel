import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MapPin, Phone, Mail, Facebook, Instagram,  ChevronUp, Send } from 'lucide-react';
// ... (keep all the styled components as they are)

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FooterSection = styled.footer`

  background-color: #000000;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 30px 20px;
  font-family: 'Arial', sans-serif;
  position: relative;
    border-top: 3px solid #d4af37;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-width: 100%;
    margin-bottom: 15px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #A17A0B;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  columns: 2;
  column-gap: 20px;

  @media (max-width: 480px) {
    columns: 1;
  }
`;

const LinkItem = styled.li`
  margin-bottom: 5px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 14px;

  &:hover {
    color: #FFA500;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 10px;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;

  svg {
    margin-right: 8px;
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #FFA500;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 10px;
`;

const NewsletterInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
  flex-grow: 1;
  font-size: 14px;
`;

const NewsletterButton = styled.button`
  padding: 8px 12px;
  background-color: #B8860B;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF8C00;
  }
`;

const Copyright = styled.p`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #B8860B;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: #FF8C00;
  }
`;
// Custom TikTok icon component
const TikTok = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      fill={color}
    />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterSection>
      <Content>
        <Column>
          <Title>Quick Links</Title>
         <LinkList>
            <LinkItem><Link href="/about">ABOUT</Link></LinkItem>
            {/* <LinkItem><Link href="#">RESTAURANT</Link></LinkItem> */}
            <LinkItem><Link href="/tour">TOUR PACKAGES</Link></LinkItem>
            <LinkItem><Link href="/gallary">GALLERY</Link></LinkItem>
            <LinkItem><Link href="/contact">CONTACT</Link></LinkItem>
          </LinkList>
        </Column>
        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <ContactItem>
              <MapPin size={14} />
              Eco Adventure Resort, Sauraha, Chitwan, Nepal
            </ContactItem>
            <ContactItem>
              <Phone size={14} />
              +977-9855057182/ 9845023893 
            </ContactItem>
            <ContactItem>
              <Mail size={14} />
ecoadventureresortchitwan@gmail.com
            </ContactItem>
            <ContactItem>
              <MapPin size={14} />
              1 km from Sauraha city center
            </ContactItem>
          </ContactInfo>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/ecoadventureresort" aria-label="Facebook"><Facebook size={20} /></SocialLink>
            <SocialLink href="https://www.instagram.com/ecoadventureresort?igsh=dnh1eng0bGpnaHQ5&utm_source=qr" aria-label="Instagram"><Instagram size={20} /></SocialLink>
                        <SocialLink href="https://www.tiktok.com/@ecoadventureresort" aria-label="TikTok"><TikTok size={20} /></SocialLink>
          </SocialLinks>
        </Column>
        <Column>
          <Title>Newsletter</Title>
          <p>Subscribe to stay updated on our eco-friendly initiatives and special offers.</p>
          <NewsletterForm onSubmit={handleSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit">
              <Send size={14} />
            </NewsletterButton>
          </NewsletterForm>
        </Column>
      </Content>
      <Copyright>
        Copyright ©2024. All rights reserved. Eco Adventure Resort.
      </Copyright>
      <ScrollToTop onClick={scrollToTop}>
        <ChevronUp size={20} />
      </ScrollToTop>
    </FooterSection>
  );
};

export default Footer;