import React from 'react';
import styled, { keyframes } from 'styled-components';
import hotelExterior from '../../assets/resort/hotel1.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  gap: 2rem;
  background-color: #fffff9;
  color: #000000;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 6rem 4rem;
    gap: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #B8860B, #FFD700);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #B8860B;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-weight: 600;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    letter-spacing: 2.5px;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    letter-spacing: 3px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333333;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  animation: ${fadeIn} 1s ease-out 0.3s both;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1024px) {
    height: 100%;
    min-height: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    gap: 1.25rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(210, 180, 140, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(184, 134, 11, 0.2);
  }

  @media (min-width: 768px) {
    padding: 1.25rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  color: #B8860B;
  font-weight: 700;
  margin-bottom: 0.3rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const StatLabel = styled.div`
  color: #333333;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 0.75px;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const HotelIntroComponent = () => (
  <IntroSection>
    <Grid>
      <ContentArea>
        <Subtitle>Where luxury meets nature's grandeur</Subtitle>
        <Title>Echo Adventure Resort</Title>
        <Description>
          Echo Adventure is a luxury boutique hotel designed in traditional Tharu-style architecture, ideally located at Sauraha Gaida Chowk. Situated on the bank of Rapti River, it offers a unique experience at the boundary of Chitwan National Park.
        </Description>
        <Description>
          Vibrant décor and traditional architecture intermingle with indulgent amenities including complimentary Wi-Fi, concierge services, free bottled water, coffee maker machine, business center, swimming pool, conference hall, and an electric vehicle charging station. Our well-maintained garden provides total peace and tranquility in a secluded setting.
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
        <Image src={hotelExterior} alt="Echo Adventure Resort exterior" />
      </ImageWrapper>
    </Grid>
  </IntroSection>
);

export default HotelIntroComponent;