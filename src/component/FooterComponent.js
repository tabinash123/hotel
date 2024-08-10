import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Award, Star } from 'lucide-react';

const FooterWrapper = styled.footer`
  background-color: #0c2340;
  color: #e8e6e3;
  padding: 3rem 1rem 2rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 2rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 3rem 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cpath d='M0 0h400v400H0z' fill='none'/%3E%3Cpath d='M200 50l150 260H50z' fill='%23e81c4f' opacity='0.1'/%3E%3Ccircle cx='300' cy='100' r='20' fill='%23ffc300' opacity='0.1'/%3E%3Cpath d='M100 200c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z' fill='%2354b435' opacity='0.1'/%3E%3Cpath d='M250 300c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15z' fill='%23ff5733' opacity='0.1'/%3E%3C/svg%3E");
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

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #ffc300;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: #ffc300;
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
  
  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }

  svg {
    margin-right: 0.75rem;
    color: #ffc300;
  }
`;

const FooterLink = styled.a`
  color: #e8e6e3;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    color: #ffc300;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #e8e6e3;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffc300;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 195, 0, 0.3);
  font-size: 0.8rem;
  color: #a0a0a0;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    margin-top: 3rem;
    padding-top: 2rem;
    font-size: 0.9rem;
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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const AwardItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #ffc300;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NewsletterInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ffc300;
  background-color: rgba(255, 255, 255, 0.1);
  color: #e8e6e3;
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border-color: #e8e6e3;
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ffc300;
  color: #0c2340;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: #e8e6e3;
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
              <MapPin size={18} />
              Lakeside, Pokhara, Nepal
            </FooterListItem>
            <FooterListItem>
              <Phone size={18} />
              <FooterLink href="tel:+97761234567">+977 61 234 567</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <Mail size={18} />
              <FooterLink href="mailto:info@himalayanhaven.com">info@himalayanhaven.com</FooterLink>
            </FooterListItem>
          </FooterList>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
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
          <Award size={18} />
          World Luxury Hotel Awards 2023
        </AwardItem>
        <AwardItem>
          <Star size={18} />
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