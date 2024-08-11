import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Award, Star } from 'lucide-react';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const FooterWrapper = styled.footer`
  background-color: #2c1a05;
  color: #f4e0a1;
  padding: 3rem 1rem 2rem;
  font-family: 'Cormorant Garamond', serif;
  position: relative;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 4rem 2rem 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 5rem 3rem 4rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cpath d='M0 0h400v400H0z' fill='none'/%3E%3Cpath d='M200 50l150 260H50z' fill='%23d4af37' opacity='0.05'/%3E%3Ccircle cx='300' cy='100' r='20' fill='%23b38736' opacity='0.07'/%3E%3Cpath d='M100 200c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z' fill='%236b5644' opacity='0.05'/%3E%3Cpath d='M250 300c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15z' fill='%23e0c68a' opacity='0.07'/%3E%3C/svg%3E");
    background-repeat: repeat;
    opacity: 0.1;
    z-index: 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #d4af37;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
  letter-spacing: 1px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, #d4af37, transparent);
  }
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 1rem;
  }

  svg {
    margin-right: 0.75rem;
    color: #b38736;
  }
`;

const FooterLink = styled.a`
  color: #f4e0a1;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.1rem;
  }

  &:hover {
    color: #d4af37;
    transform: translateX(5px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 1.25rem;
    margin-top: 1.25rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  color: #f4e0a1;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #d4af37;
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;

    @media (min-width: ${breakpoints.tablet}) {
      width: 22px;
      height: 22px;
    }

    @media (min-width: ${breakpoints.desktop}) {
      width: 24px;
      height: 24px;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(212, 175, 55, 0.3);
  font-size: 0.8rem;
  color: #b38736;
  position: relative;
  z-index: 1;
  font-family: 'Poppins', sans-serif;

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 3rem;
    padding-top: 2rem;
    font-size: 0.9rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 4rem;
    padding-top: 2.5rem;
    font-size: 1rem;
  }
`;

const AwardsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 3rem;
    margin-top: 4rem;
  }
`;

const AwardItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #d4af37;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 1px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.1rem;
  }

  svg {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;

    @media (min-width: ${breakpoints.tablet}) {
      width: 22px;
      height: 22px;
    }

    @media (min-width: ${breakpoints.desktop}) {
      width: 24px;
      height: 24px;
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    margin-top: 1.25rem;
  }
`;

const NewsletterInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #b38736;
  background-color: rgba(244, 224, 161, 0.1);
  color: #f4e0a1;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
    margin-right: 0.5rem;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border-color: #d4af37;
  }

  &::placeholder {
    color: rgba(244, 224, 161, 0.6);
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #b38736, #d4af37);
  color: #2c1a05;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  &:hover {
    background: linear-gradient(45deg, #d4af37, #e0c68a);
    transform: translateY(-2px);
  }
`;

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Himalayan Haven</FooterTitle>
          <FooterList>
            <FooterListItem>
              <MapPin />
              Lakeside, Pokhara, Nepal
            </FooterListItem>
            <FooterListItem>
              <Phone />
              <FooterLink href="tel:+97761234567">+977 61 234 567</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <Mail />
              <FooterLink href="mailto:info@himalayanhaven.com">info@himalayanhaven.com</FooterLink>
            </FooterListItem>
          </FooterList>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Explore</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="/accommodations">Accommodations</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/dining">Dining</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/spa">Wellness & Spa</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/experiences">Experiences</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/events">Meetings & Events</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Discover Nepal</FooterTitle>
          <FooterList>
            <FooterListItem><FooterLink href="/trekking">Trekking Adventures</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/wildlife">Wildlife Safaris</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/culture">Cultural Tours</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/meditation">Meditation Retreats</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Newsletter</FooterTitle>
          <p>Subscribe to receive exclusive offers and updates.</p>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your Email Address" />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>
      
      <AwardsSection>
        <AwardItem>
          <Award />
          World Luxury Hotel Awards 2023
        </AwardItem>
        <AwardItem>
          <Star />
          5-Star Deluxe Rating
        </AwardItem>
      </AwardsSection>
      
      <Copyright>
        © {new Date().getFullYear()} Himalayan Haven. All rights reserved. <br />
        Luxury redefined in the heart of the Himalayas
      </Copyright>
    </FooterWrapper>
  );
};

export default FooterComponent;