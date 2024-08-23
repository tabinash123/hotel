import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, StarHalf, ChevronRight, Clock, Users } from 'lucide-react';

// Import the specific images
import jungleSafari from '../../assets/activities/jungleSafari.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ActivitySection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
`;

const RatingText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const ReviewCount = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ActivityCard = styled.div`
  text-align: left;
  background: white;
  border-radius: 10px;
  overflow: hidden;

`;

const ActivityImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;


`;

const ActivityContent = styled.div`
  padding: 1rem;
`;

const ActivityTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ActivityDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ActivityMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #888;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 4px;
  }
`;

const SeeMoreButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-left: 8px;
  }
`;

const activities = [
  {
    image: jungleSafari,
    title: "Jungle Safari",
    description: "Explore the wild heart of Chitwan National Park on our thrilling jungle safari.",
    duration: "3 hours",
    groupSize: "4-6"
  },
  {
    image: bishajariLake,
    title: "Bishajari Lake",
    description: "Experience tranquility at Bishajari Lake, a serene wetland teeming with birdlife.",
    duration: "2 hours",
    groupSize: "Any"
  },
  {
    image: elephantBath,
    title: "Elephant Bath",
    description: "Join our gentle giants for a unique and refreshing elephant bathing experience.",
    duration: "1 hour",
    groupSize: "2-4"
  },
  {
    image: culturalProgram,
    title: "Cultural Program",
    description: "Immerse yourself in local Tharu culture with our evening cultural programs.",
    duration: "2 hours",
    groupSize: "Any"
  },
  {
    image: jungleSafari,
    title: "Nature Walk",
    description: "Take a guided nature walk to discover the rich flora and fauna of Chitwan.",
    duration: "1.5 hours",
    groupSize: "4-8"
  },
  {
    image: bishajariLake,
    title: "Canoe Ride",
    description: "Enjoy a peaceful canoe ride on the Rapti River and spot aquatic wildlife.",
    duration: "1 hour",
    groupSize: "2-6"
  }
];

const ResortActivities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const rating = 4.9;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <ActivitySection>
      <Title>In the Heart of the Jungle</Title>
      <Rating>
        <RatingText>{rating} out of 5</RatingText>
        {[...Array(5)].map((_, i) => (
          i < fullStars ? <Star key={i} size={20} fill="#FFD700" color="#FFD700" /> :
          (i === fullStars && hasHalfStar ? <StarHalf key={i} size={20} fill="#FFD700" color="#FFD700" /> : <Star key={i} size={20} color="#FFD700" />)
        ))}
      </Rating>
      <ReviewCount>Based on 25000+ reviews</ReviewCount>
      <ActivitiesGrid>
        {activities.map((activity, index) => (
          <ActivityCard 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ActivityImageWrapper>
              <ActivityImage src={activity.image} alt={activity.title} />
            </ActivityImageWrapper>
            <ActivityContent>
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityDescription>{activity.description}</ActivityDescription>
              <ActivityMeta>
                <MetaItem>
                  <Clock size={16} />
                  {activity.duration}
                </MetaItem>
                <MetaItem>
                  <Users size={16} />
                  {activity.groupSize}
                </MetaItem>
              </ActivityMeta>
            </ActivityContent>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
      <SeeMoreButton>
        See More Activities
        <ChevronRight size={20} />
      </SeeMoreButton>
    </ActivitySection>
  );
};

export default ResortActivities;