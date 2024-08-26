import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, StarHalf, ChevronRight, Clock, Users } from 'lucide-react';
import {Link} from 'react-router-dom';
// Import the specific images
import jeepSafari from '../../assets/activities/jeepsafari3.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';
import elephantRide from '../../assets/activities/elephantride.jpg';
import elephantBreeding from '../../assets/activities/elephantBreeding.jpg';
import towerNightStay from '../../assets/activities/towerNightStay.jpg';
// import lakeVisit from '../../assets/activities/lakeVisit.jpg';
import adventureActivities from '../../assets/activities/adventureActivities.jpg';
import birdWatching from '../../assets/activities/birdWatching.jpg';
import bbqCamping from '../../assets/activities/bbqCamping.jpg';

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

  @media (max-width: 1024px) {
    margin: 3rem auto;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 2rem auto;
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
    font-size: 2rem;
  color: #0c2e1c;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ReviewCount = styled.p`
  color: #555;
  font-size: 1rem;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.75rem;
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ActivityCard = styled.div`
  text-align: left;
  background: white;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  
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

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 150px;
  }

`;

const ActivityContent = styled.div`
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const ActivityTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ActivityDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SeeMoreLink = styled.span`
  color: #B8860B;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

const ActivityMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
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
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #B8860B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &:hover {
    background-color: #9A7B0A;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  svg {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const activities = [
  // {
  //   image: packageProgram,
  //   title: "Package Programme",
  //   description: "Experience the best of Echo Adventure Resort with our comprehensive package programme.",
  //   duration: "Varies",
  //   groupSize: "Any"
  // },
  {
    image: elephantRide,
    title: "Elephant Ride",
    description: "Enjoy a majestic ride through the jungle atop a gentle giant, observing wildlife from a unique vantage point.",
    duration: "1-2 hours",
    groupSize: "1-4 per elephant"
  },
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
  // {
  //   image: jungleWalk,
  //   title: "Jungle Walk (1-7 Days)",
  //   description: "Embark on an immersive jungle walk, ranging from day trips to week-long adventures, guided by experienced naturalists.",
  //   duration: "1-7 days",
  //   groupSize: "4-10"
  // },
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
  // {
  //   image: canoeRide,
  //   title: "Canoe Ride Short/Long",
  //   description: "Enjoy a peaceful canoe ride on the Rapti River, with options for short or long trips, spotting aquatic wildlife along the way.",
  //   duration: "1-3 hours",
  //   groupSize: "2-6"
  // },
  {
    image: culturalProgram,
    title: "Cultural Programme",
    description: "Immerse yourself in local Tharu culture with our evening cultural programs, featuring traditional dances and music.",
    duration: "2 hours",
    groupSize: "Any"
  },
  // {
  //   image: lakeVisit,
  //   title: "20,000 Lake Visit",
  //   description: "Explore the beautiful 20,000 Lake, a haven for diverse wildlife and picturesque views, perfect for nature photography.",
  //   duration: "Half day",
  //   groupSize: "4-12"
  // },
  // {
  //   image: towerNightStay,
  //   title: "Tower Night Stay",
  //   description: "Experience the jungle at night with a stay in our observation tower, listening to the sounds of nocturnal wildlife.",
  //   duration: "Overnight",
  //   groupSize: "2-4"
  // },
  // {
  //   image: homeStay,
  //   title: "Home Stay Programme",
  //   description: "Immerse yourself in local life with a stay in a traditional Tharu home, experiencing authentic customs and cuisine.",
  //   duration: "1-3 days",
  //   groupSize: "1-4"
  // },
  // {
  //   image: bbqCamping,
  //   title: "BBQ/Camping",
  //   description: "Enjoy a night under the stars with our BBQ and camping experience, surrounded by the sounds of the jungle.",
  //   duration: "Overnight",
  //   groupSize: "4-12"
  // },

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
                {/* {expandedIndex === index ? activity.description : truncateDescription(activity.description)} */}
                {/* {expandedIndex !== index && (
                  <SeeMoreLink onClick={() => setExpandedIndex(index)}> see more</SeeMoreLink>
                )} */}
              </ActivityDescription>
           
            </ActivityContent>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
        <Link to="/tour" style={{ color: 'white', textDecoration: 'none' }}>
      <SeeMoreButton>
          See More Activities
        <ChevronRight size={18} />
      </SeeMoreButton>
        </Link>
    </ActivitySection>
  );
};

export default ResortActivities;