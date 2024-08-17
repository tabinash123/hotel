import React from 'react';
import styled from 'styled-components';
import { Calendar, Users, Award, Smile, Leaf } from 'lucide-react';
// Note: You'll need to replace this with the correct path to your image
import backgroundImage from '../../assets/resort/hotel2.jpg';

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  width: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 100%;
  margin-Left: 5%;
  
  @media (min-width: 768px) {
    max-width: 80%;
  }
  
  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Highlight = styled.span`
  color: #B8860B;
`;

const Subtitle = styled.div`
  width: 80%;
  font-size: 0.9rem;
  margin-bottom: 20px;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 15px;
    margin-bottom: 35px;
  }

  @media (min-width: 1024px) {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 70%;

  @media (min-width: 768px) {
    width: auto;
    padding: 12px 24px;
    font-size: 1rem;
  }

  background-color: ${props => props.primary ? '#B8860B' : 'transparent'};
  color: white;
  border: ${props => props.primary ? 'none' : '2px solid white'};

  &:hover {
    transform: translateY(-2px);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 5px;
`;

const Hero = () => {
  const stats = [
    { icon: Calendar, value: '11', label: 'Years of Excellence' },
    { icon: Users, value: '10', label: 'Well-Appointed Rooms' },
    { icon: Award, value: '1', label: 'Star Rating' },
    { icon: Leaf, value: 'Eco', label: 'Friendly Practices' },
  ];

  return (
    <HeroSection backgroundImage={backgroundImage}>
      <Overlay />
      <Content>
        <Title>Experience Nature at <Highlight>Eco Adventure Resort</Highlight></Title>
        <Subtitle>Immerse yourself in the beauty of Chitwan, Nepal. Enjoy serene surroundings and eco-friendly practices just 1km from the city center.</Subtitle>
        <ButtonGroup>
          <Button primary>Book Now</Button>
          <Button>Explore Rooms</Button>
        </ButtonGroup>
        <Stats>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <IconWrapper>
                <stat.icon size={24} />
              </IconWrapper>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </Stats>
      </Content>
    </HeroSection>
  );
};

export default Hero;