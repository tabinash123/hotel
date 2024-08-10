import React from 'react';
import styled from 'styled-components';
import { Bed, Users, UserCheck } from 'lucide-react';
import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 40px;
    padding: 40px 20px;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-rows: 300px 300px;
    margin-top: 30px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    grid-template-rows: 250px 250px;
    height: 500px;
    margin-top: 0;
    order: -1; // Move back to the left on desktop
  }
`;

const LargeImage = styled.img`
  grid-row: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
`;

const WelcomeText = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
`;

const StatIcon = styled.div`
  margin-right: 10px;
`;

const StatContent = styled.div`
  text-align: left;
`;

const StatNumber = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const StatText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const ExploreButton = styled.button`
  background-color: #d2b48c;
  color: #000;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #c19a6b;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const HotelInfoComponent = () => {
  return (
    <Container>
      <ContentContainer>
        <WelcomeText>Welcome To Orbitza</WelcomeText>
        <Title>Our Hotel Has Been Present For Over 20 Years.</Title>
        <Description>
          Continually productize compelling quality for packed in business consulting elated
          productize compelling quality for all packed in with all growth from quality elated
          Setting up to website and creating pages.
        </Description>
        <Description>
          Continually productize compelling quality for packed in business consulting elated
          productize compelling quality for all packed in with all growth from quality elated
          Setting up to website and creating pages.
        </Description>
        <StatsContainer>
          <StatItem>
            <StatIcon><Bed size={24} /></StatIcon>
            <StatContent>
              <StatNumber>200+</StatNumber>
              <StatText>Available Rooms</StatText>
            </StatContent>
          </StatItem>
          <StatItem>
            <StatIcon><Users size={24} /></StatIcon>
            <StatContent>
              <StatNumber>400+</StatNumber>
              <StatText>Staff Members</StatText>
            </StatContent>
          </StatItem>
          <StatItem>
            <StatIcon><UserCheck size={24} /></StatIcon>
            <StatContent>
              <StatNumber>240k</StatNumber>
              <StatText>Served Clients</StatText>
            </StatContent>
          </StatItem>
        </StatsContainer>
        <ExploreButton>Explore Now</ExploreButton>
      </ContentContainer>
      <ImageContainer>
        <LargeImage src={img1} alt="Hotel room 1" />
        <SmallImage src={img2} alt="Hotel room 2" />
        <SmallImage src={img3} alt="Hotel room 3" />
      </ImageContainer>
    </Container>
  );
};

export default HotelInfoComponent;