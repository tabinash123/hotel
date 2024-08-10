import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Leaf, Mountain, DollarSign } from 'lucide-react';
import hotel1 from '../../assets/hotel/hotel1.jpg';
import hotel2 from '../../assets/hotel/hotel2.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  background-color: #f0f4e8;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 1.5rem;
    flex-direction: row;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
    gap: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%2339603d" opacity="0.05"/></svg>') repeat;
    z-index: 0;
  }
`;

const Column = styled.div`
  flex: 1;
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WelcomeText = styled.p`
  font-size: 0.75rem;
  color: #39603d;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const MainHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  color: #1e3924;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #3c4f3e;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-size: 0.8125rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FeatureIcon = styled.div`
  background-color: #dae6d8;
  border-radius: 50%;
  padding: 0.375rem;
  margin-right: 0.375rem;

  @media (min-width: 768px) {
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.125rem;
  color: #39603d;

  @media (min-width: 768px) {
    font-size: 0.9375rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.75rem;
  color: #3c4f3e;

  @media (min-width: 768px) {
    font-size: 0.8125rem;
  }
`;

const ExploreButton = styled.button`
  background-color: #e27d60;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: #c76145;
  }

  @media (min-width: 768px) {
    padding: 0.625rem 1.25rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 220px;
  }

  @media (min-width: 1024px) {
    height: 250px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SmallImage = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const HotelIntroComponent = () => {
  return (
    <IntroSection>
      <Column>
        <WelcomeText>Welcome To Nepali Paradise</WelcomeText>
        <MainHeading>Experience Nepal's Nature for Over 20 Years</MainHeading>
        <Description>
          Immerse yourself in Nepal's breathtaking landscapes, where lush forests meet majestic mountains. 
          Our hotel offers a gateway to the rich biodiversity and serene beauty of the Nepali wilderness.
        </Description>
        <Features>
          <Feature>
            <FeatureIcon>
              <Leaf size={18} color="#39603d" />
            </FeatureIcon>
            <FeatureText>
              <FeatureTitle>Eco-Friendly Stay</FeatureTitle>
              <FeatureDescription>Sustainable practices preserving Nepal's beauty.</FeatureDescription>
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>
              <Mountain size={18} color="#39603d" />
            </FeatureIcon>
            <FeatureText>
              <FeatureTitle>Adventure Tours</FeatureTitle>
              <FeatureDescription>Guided excursions into Nepal's wilderness.</FeatureDescription>
            </FeatureText>
          </Feature>
        </Features>
   
      </Column>
      <Column>
        <ImageContainer>
          <MainImage src={hotel1} alt="Nepali forest view" />
          <SmallImage src={hotel2} alt="Hotel room" />
        </ImageContainer>
      </Column>
    </IntroSection>
  );
};

export default HotelIntroComponent;