import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Sparkles, Lotus, Mountains } from 'lucide-react';

import hotelExterior from '../../assets/resort/hotel1.jpg';

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
  margin: 0rem auto;
  gap: 3rem;
  background-color: #f5f5f5;
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
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%238B4513" opacity="0.05"/></svg>') repeat;
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
  font-size: 2.5rem;
  color: #2C3E50;
  // margin-bottom: 1.5rem;
  font-weight: 600;
  // line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;


const Subtitle = styled.p`
  font-size: 1rem;
  color: #8B4513;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
`;


const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  animation: ${fadeIn} 1s ease-out 1s both;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(139, 69, 19, 0.1);
  // border: 1px solid rgba(139, 69, 19, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(139, 69, 19, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  color: #003366;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const StatLabel = styled.div`
  color: #555;
  font-size: 0.9rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1rem;
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
    border: 2px solid #8B4513;
    z-index: 1;
  }

  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    height: 100%;
    min-height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const HotelIntroComponent = () => (
  <IntroSection>
    <Grid>
      <ContentArea>
        <Title>Sauraha Serenity</Title>
        <Subtitle>Where luxury meets nature's grandeur</Subtitle>
        <Description>
          Nestled at the gateway to Chitwan National Park, Sauraha Serenity offers an unparalleled blend of opulent comfort and the raw beauty of Nepal's wilderness.
        </Description>
        <Description>
          Our sanctuary of tranquility invites you to immerse yourself in the majesty of the Chitwan while indulging in world-class amenities and personalized service.
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
        <Image src={hotelExterior} alt="Sauraha Serenity exterior" />
      </ImageWrapper>
    </Grid>
  </IntroSection>
);

export default HotelIntroComponent;