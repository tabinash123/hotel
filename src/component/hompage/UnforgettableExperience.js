import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Star, StarHalf, ChevronRight, Clock, Users, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assume images are imported as before
import jeepSafari from '../../assets/activities/jeepsafari3.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';
import elephantBreeding from '../../assets/activities/elephantBreeding.jpg';
import adventureActivities from '../../assets/activities/adventureActivities.jpg';
import birdWatching from '../../assets/activities/birdWatching.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ActivitySection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #0c2e1c;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #B8860B;
  }
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
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
`;

const ReviewCount = styled.p`
  color: #555;
  font-size: 1rem;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const ActivityCard = styled.div`
  text-align: left;
  background: white;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ActivityImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 120px;

  @media (min-width: 768px) {
    height: 175px;
  }

  @media (min-width: 1024px) {
    height: 150px;
  }
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ActivityCard}:hover & {
    transform: scale(1.05);
  }
`;

const ActivityContent = styled.div`
  padding: 0.75rem;

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`;

const ActivityTitle = styled.h3`
  font-size: 0.9rem;
  color: #2c3e50;
  margin-bottom: 0.25rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const ActivityDescription = styled.p`
  font-size: 0.8rem;
  color: #555;
  line-height: 1.3;
  margin-bottom: 0.25rem;
  font-family: 'Roboto', sans-serif;
  transition: max-height 0.3s ease;
  overflow: hidden;
  ${props => props.expanded ? css`max-height: 1000px;` : css`max-height: 2.6em;`}

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    ${props => props.expanded ? css`max-height: 1000px;` : css`max-height: 2.8em;`}
  }
`;

const SeeMoreLink = styled.span`
  color: #B8860B;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
  font-size: 0.7rem;

  &:hover {
    color: #9A7B0A;
  }

  svg {
    margin-left: 2px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (min-width: 768px) {
    font-size: 0.8rem;

    svg {
      margin-left: 4px;
    }
  }
`;
const ActivityMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #666;
  font-family: 'Roboto', sans-serif;
  margin-top: 0.5rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 4px;
  }
`;

const SeeMoreButton = styled(Link)`
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #B8860B;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 25px 0;

  &:hover {
    background-color: #9A7B0A;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const activities = [
  {
    image: elephantBath,
    title: "Elephant Bath",
    description: "Join our elephants for a refreshing and playful bathing experience in the river, creating unforgettable memories.",
    duration: "1 hour",
    groupSize: "2-6"
  },
  {
    image: jeepSafari,
    title: "Jeep Safari",
    description: "Explore the depths of Chitwan National Park on an exciting jeep safari, covering more ground and increasing wildlife sighting chances.",
    duration: "3-4 hours",
    groupSize: "4-8"
  },
  {
    image: birdWatching,
    title: "Bird Watching",
    description: "Discover the diverse avian life of Chitwan with guided bird watching tours, perfect for both novice and experienced birders.",
    duration: "2-3 hours",
    groupSize: "2-8"
  },
  {
    image: elephantBreeding,
    title: "Elephant Breeding Centre",
    description: "Visit the elephant breeding center to learn about conservation efforts and see baby elephants in their natural habitat.",
    duration: "1-2 hours",
    groupSize: "Any"
  },
  {
    image: adventureActivities,
    title: "Rafting/Trekking/Paragliding",
    description: "Choose from a variety of adventure activities in and around Chitwan, including thrilling water sports and aerial experiences.",
    duration: "Varies",
    groupSize: "Varies"
  },
  {
    image: culturalProgram,
    title: "Cultural Programme",
    description: "Immerse yourself in local Tharu culture with our evening cultural programs, featuring traditional dances and music.",
    duration: "2 hours",
    groupSize: "Any"
  },
];

const ResortActivities = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const rating = 4.9;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ActivitySection>
      <Title>Discover Our Jungle Adventures</Title>
      <Rating>
        <RatingText>{rating} out of 5</RatingText>
        {[...Array(5)].map((_, i) => (
          i < fullStars ? <Star key={i} size={16} fill="#FFD700" color="#FFD700" /> :
          (i === fullStars && hasHalfStar ? <StarHalf key={i} size={16} fill="#FFD700" color="#FFD700" /> : <Star key={i} size={16} color="#FFD700" />)
        ))}
      </Rating>
      <ReviewCount>Based on 25,000+ thrilling experiences</ReviewCount>
      <ActivitiesGrid>
        {activities.map((activity, index) => (
          <ActivityCard key={index}>
            <ActivityImageWrapper>
              <ActivityImage src={activity.image} alt={activity.title} />
            </ActivityImageWrapper>
            <ActivityContent>
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityDescription expanded={expandedIndex === index}>
                {activity.description}
              </ActivityDescription>
              <SeeMoreLink onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? 'See less' : 'See more'}
                <Info size={14} />
              </SeeMoreLink>
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
      <SeeMoreButton to="/tour">
        Explore All Activities
        <ChevronRight size={18} />
      </SeeMoreButton>
    </ActivitySection>
  );
};

export default ResortActivities;