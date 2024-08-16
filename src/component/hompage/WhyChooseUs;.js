import React from 'react';
import styled from 'styled-components';
import { Users, Globe, Clock, HandHeart, Phone, ShieldCheck } from 'lucide-react';

const Section = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #f8f1e3;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(101, 67, 33, 0.1);

  @media (min-width: 768px) {
    padding: 2rem;
    margin: 3rem auto;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 3rem;
    margin: 4rem auto;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 100%;

  @media (min-width: 1024px) {
    min-width: 300px;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled.h2`
  font-family: 'Baskerville', 'Times New Roman', serif;
  font-size: 2rem;
  color: #654321;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 10px;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #8b4513, #d2691e);
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-family: 'Garamond', 'Georgia', serif;
  font-size: 1.1rem;
  color: #5d4037;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #8b4513, #d2691e);
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Baskerville', 'Times New Roman', serif;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(45deg, #d2691e, #8b4513);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(139, 69, 19, 0.3);
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: #fff;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(101, 67, 33, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  color: #000000;
  flex-shrink: 0;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h3`
  font-family: 'Baskerville', 'Times New Roman', serif;
  font-size: 1.2rem;
  color: #654321;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FeatureDescription = styled.p`
  font-family: 'Garamond', 'Georgia', serif;
  font-size: 1rem;
  color: #5d4037;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <LeftColumn>
        <Title>Why Choose Himalayan Haven?</Title>
        <Description>
          Nestled in the heart of Nepal's breathtaking landscapes, Himalayan Haven offers more than just luxury accommodation. We provide an immersive experience that blends opulent comfort with the raw beauty of the Himalayas. Our commitment to excellence ensures that every moment of your stay is as extraordinary as the views that surround us.
        </Description>
        <Button>Discover Your Sanctuary</Button>
      </LeftColumn>
      <RightColumn>
        <Feature>
          <IconWrapper>
            <Users size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Expert Hospitality Team</FeatureTitle>
       
          </FeatureContent>
        </Feature>
        <Feature>
          <IconWrapper>
            <ShieldCheck size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Transparent Luxury</FeatureTitle>
       
          </FeatureContent>
        </Feature>
        <Feature>
          <IconWrapper>
            <Globe size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Global Clientele</FeatureTitle>
      
          </FeatureContent>
        </Feature>
        <Feature>
          <IconWrapper>
            <Clock size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Punctual Perfection</FeatureTitle>
        
          </FeatureContent>
        </Feature>
        <Feature>
          <IconWrapper>
            <HandHeart size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>All-Encompassing Care</FeatureTitle>
       
          </FeatureContent>
        </Feature>
        <Feature>
          <IconWrapper>
            <Phone size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Round-the-Clock Concierge</FeatureTitle>
           
          </FeatureContent>
        </Feature>
      </RightColumn>
    </Section>
  );
};

export default WhyChooseUs;