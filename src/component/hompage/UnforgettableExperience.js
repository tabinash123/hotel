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
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    margin: 3rem auto;
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    margin: 4rem auto;
    padding: 0 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
`;

const RatingText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const ReviewCount = styled.p`
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const ActivityCard = styled.div`
  text-align: left;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ActivityImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    height: 180px;
  }

  @media (min-width: 1024px) {
    height: 200px;
  }

  ${ActivityCard}:hover & {
    transform: scale(1.05);
  }
`;

const ActivityContent = styled.div`
  padding: 0.75rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const ActivityTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const ActivityDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const SeeMoreLink = styled.span`
  color: #4CAF50;
  cursor: pointer;
  font-weight: bold;
`;

const ActivityMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: #888;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
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
  padding: 10px 20px;
  font-size: 0.9rem;
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

  @media (min-width: 768px) {
    padding: 11px 22px;
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    padding: 12px 24px;
    font-size: 1rem;
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
  const [expandedIndex, setExpandedIndex] = useState(null);
  const rating = 4.9;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const truncateDescription = (description, limit = 50) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  };

  return (
    <ActivitySection>
      <Title>In the Heart of the Jungle</Title>
      <Rating>
        <RatingText>{rating} out of 5</RatingText>
        {[...Array(5)].map((_, i) => (
          i < fullStars ? <Star key={i} size={18} fill="#FFD700" color="#FFD700" /> :
          (i === fullStars && hasHalfStar ? <StarHalf key={i} size={18} fill="#FFD700" color="#FFD700" /> : <Star key={i} size={18} color="#FFD700" />)
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
              <ActivityDescription>
                {expandedIndex === index ? activity.description : truncateDescription(activity.description)}
                {expandedIndex !== index && (
                  <SeeMoreLink onClick={() => setExpandedIndex(index)}> see more</SeeMoreLink>
                )}
              </ActivityDescription>
              <ActivityMeta>
                <MetaItem>
                  <Clock size={14} />
                  {activity.duration}
                </MetaItem>
                <MetaItem>
                  <Users size={14} />
                  {activity.groupSize}
                </MetaItem>
              </ActivityMeta>
            </ActivityContent>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
      <SeeMoreButton>
        See More Activities
        <ChevronRight size={18} />
      </SeeMoreButton>
    </ActivitySection>
  );
};

export default ResortActivities;