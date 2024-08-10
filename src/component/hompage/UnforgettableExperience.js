import React from 'react';
import styled from 'styled-components';
import bikeImage from '../../assets/events/Birthday.jpg';
import golfImage from '../../assets/events/Celebration.jpg';
import snowsportsImage from '../../assets/events/Wedding.jpg';
import climbingImage from '../../assets/events/Birthday.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  text-align: center;
  color: #888;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MainTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ActivityCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ActivityInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
`;

const ActivityName = styled.h3`
  font-size: 24px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ActivityPrice = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const UnforgettableExperience = () => {
  const activities = [
    { name: 'Bike Rides', price: '$280/Person', image: bikeImage },
    { name: 'Golf', price: '$280/Person', image: golfImage },
    { name: 'Snowsports', price: '$280/Person', image: snowsportsImage },
    { name: 'Climbing', price: '$280/Person', image: climbingImage },
    { name: 'Bike Rides', price: '$280/Person', image: bikeImage },
    { name: 'Golf', price: '$280/Person', image: golfImage },
    { name: 'Snowsports', price: '$280/Person', image: snowsportsImage },
    { name: 'Climbing', price: '$280/Person', image: climbingImage },
  ];

  return (
    <Section>
      <SectionTitle>THERE'S SO MUCH TO DISCOVER</SectionTitle>
      <MainTitle>Unforgettable Experience</MainTitle>
      <ActivityGrid>
        {activities.map((activity, index) => (
          <ActivityCard key={index}>
            <ActivityImage src={activity.image} alt={activity.name} />
            <ActivityInfo>
              <ActivityName>{activity.name}</ActivityName>
              <ActivityPrice>{activity.price}</ActivityPrice>
            </ActivityInfo>
          </ActivityCard>
        ))}
      </ActivityGrid>
    </Section>
  );
};

export default UnforgettableExperience;