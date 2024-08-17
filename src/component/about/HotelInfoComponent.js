import React from 'react';
import styled from 'styled-components';
import { Bed, Users, Leaf } from 'lucide-react';
import img1 from "../../assets/resort/hotel4.jpg";
import img2 from "../../assets/resort/reception.jpg";
import img3 from "../../assets/resort/garden1.jpg";

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
    order: -1;
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
  color: #B8860B;
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
  background-color: #B8860B;
  color: #000000;
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
        <WelcomeText>Welcome To Eco Adventure Resort</WelcomeText>
        <Title>Your Nature Lover's Paradise in Chitwan Since 2013</Title>
        <Description>
          Experience the serenity of nature at Eco Adventure Resort, nestled in the heart of Chitwan, Nepal. 
          Our 1-star resort offers a truly immersive experience for nature enthusiasts and adventure seekers alike, 
          just 1 kilometer away from the city center.
        </Description>
        <Description>
          Our 10 well-appointed rooms provide comfort and tranquility, ensuring a relaxing stay amidst the stunning surroundings. 
          Enjoy our eco-friendly practices and warm hospitality as you reconnect with the beauty of the natural world.
        </Description>
        <Description>
          Explore the nearby Chitwan National Park, embark on jungle safaris, or simply unwind in our beautiful garden. 
          Our resort is perfect for families, with a generous child policy allowing children aged 4-10 to stay free of charge.
        </Description>

        <StatsContainer>
          <StatItem>
            <StatIcon><Bed size={24} /></StatIcon>
            <StatContent>
              <StatNumber>10</StatNumber>
              <StatText>Well-Appointed Rooms</StatText>
            </StatContent>
          </StatItem>
          <StatItem>
            <StatIcon><Users size={24} /></StatIcon>
            <StatContent>
              <StatNumber>1km</StatNumber>
              <StatText>From City Center</StatText>
            </StatContent>
          </StatItem>
          <StatItem>
            <StatIcon><Leaf size={24} /></StatIcon>
            <StatContent>
              <StatNumber>100%</StatNumber>
              <StatText>Eco-Friendly</StatText>
            </StatContent>
          </StatItem>
        </StatsContainer>
        <ExploreButton>Book Your Stay</ExploreButton>
      </ContentContainer>
      <ImageContainer>
        <LargeImage src={img1} alt="Eco Adventure Resort Room" />
        <SmallImage src={img2} alt="Resort Reception" />
        <SmallImage src={img3} alt="Resort Garden" />
      </ImageContainer>
    </Container>
  );
};

export default HotelInfoComponent;