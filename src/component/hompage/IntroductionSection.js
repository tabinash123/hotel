import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Sparkles, Lotus, Mountains } from 'lucide-react';

import hotelExterior from '../../assets/hotel/hotel1.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  gap: 3rem;
  background-color: #f8f8f8;
  color: #2C3E50;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 6rem 4rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%23C1A267" opacity="0.05"/></svg>') repeat;
    opacity: 0.05;
    z-index: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 60px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #2C3E50;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 300;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #C1A267, transparent);
  }

  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 44px;
  }
`;

const Subtitle = styled.h3`
  font-size: 18px;
  color: #C1A267;
  margin-bottom: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;

  animation: ${slideIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 16px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #C1A267;
  }

  animation: ${slideIn} 1s ease-out 0.6s both;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1.7;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;

  animation: ${fadeIn} 1s ease-out 1s both;

  @media (min-width: 768px) {
    gap: 20px;
    margin-top: 40px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 15px;
  background-color: rgba(193, 162, 103, 0.1);
  border: 1px solid rgba(193, 162, 103, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(193, 162, 103, 0.2);
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 24px;
  color: #2C3E50;
  font-weight: 600;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const StatLabel = styled.div`
  color: #C1A267;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #C1A267;
    z-index: 1;
  }

  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    height: 100%;
    min-height: 400px;
  }

  @media (min-width: 1024px) {
    min-height: 00px;
    &::before {
      top: 20px;
      left: 20px;
      right: -20px;
      bottom: -20px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  filter: sepia(20%) contrast(110%);
  transition: filter 0.3s ease;

  &:hover {
    filter: sepia(0%) contrast(100%);
  }
`;



const HotelIntroComponent = () => (
  <IntroSection>
    <Grid>
      <ContentArea>
        <Title>Himalayan Haven</Title>
        <Subtitle>Where luxury meets nature's grandeur</Subtitle>
        <Description>
          Nestled at the gateway to Chitwan National Park, Himalayan Haven offers an unparalleled blend of opulent comfort and the raw beauty of Nepal's wilderness.
        </Description>
        <Description>
          Our sanctuary of tranquility invites you to immerse yourself in the majesty of the Himalayas while indulging in world-class amenities and personalized service.
        </Description>
        <StatsGrid>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Luxury Suites</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>5⋆</StatNumber>
            <StatLabel>Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>100%</StatNumber>
            <StatLabel>Scenic Views</StatLabel>
          </StatItem>
        </StatsGrid>
      </ContentArea>
      <ImageWrapper>
        <Image src={hotelExterior} alt="Himalayan Haven exterior" />
      </ImageWrapper>
    </Grid>
  </IntroSection>
);

export default HotelIntroComponent;