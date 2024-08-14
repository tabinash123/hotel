import React from 'react';
import styled, { keyframes } from 'styled-components';
import hotelExterior from '../../assets/resort/hotel1.jpg';
import imag from '../../assets/rooms/family.jpg'
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  background-color: #FFFFFF;
  color: #000000;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 6rem 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  position: relative;

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

const Subtitle = styled.p`
  font-size: 1rem;
  color: #B8860B;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333333;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 70%;
  min-height: 300px;
  animation: ${fadeIn} 1s ease-out 0.3s both;
  margin:auto 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const OverlayImage = styled.img`
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 60%;
  height: auto;
  z-index: 2;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: d2b48c;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(184, 134, 11, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  color: #000000;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #333333;
  font-size: 0.9rem;
  font-weight: 600;
`;

const HotelIntroComponent = () => (
  <IntroSection>
    <Grid>
      <ContentArea>
        <Subtitle>Where luxury meets nature's grandeur</Subtitle>
        <Title>Sauraha Serenity</Title>
        <Description>
          Echo Adventure is a luxury boutique hotel designed in traditional Tharu-style architecture, ideally located at SaurahaGaidaChowk. It is situated on the bank of Rapti River, the boundary of Chitwan National Park.

Vibrant décor and traditional architecture intermingle with indulgent amenities including complimentary Wi-Fi, concierge services, free bottled water, coffee maker machine, business center, swimming pool, conference hall, electric vehicle charging station, and much more. Its well-maintained garden provides a total peace and tranquility in a secluded setting. 
        </Description>
        {/* <Description>
          Our sanctuary of tranquility invites you to immerse yourself in the majesty of the Chitwan while indulging in world-class amenities and personalized service.
        </Description> */}
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
        {/* <OverlayImage src={imag} alt="Overlay" /> */}
      </ImageWrapper>
    </Grid>
  </IntroSection>
);

export default HotelIntroComponent;