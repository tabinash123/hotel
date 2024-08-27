import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'lucide-react';

import jeepSafari from '../../assets/activities/jeepsafari3.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';
import elephantRide from '../../assets/activities/elephantRide.jpg';
import elephantBreeding from '../../assets/activities/elephantBreeding.jpg';
import towerNightStay from '../../assets/activities/towerNightStay.jpg';
// import lakeVisit from '../../assets/activities/lakeVisit.jpg';
import adventureActivities from '../../assets/activities/adventureActivities.jpg';
import birdWatching from '../../assets/activities/birdWatching.jpg';
import bbqCamping from '../../assets/activities/bbqCamping.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 50px;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ActivityItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (min-width: 768px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    align-items: stretch;
  }
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  
  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ActivityTitle = styled.h3`
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 15px;
`;

const ActivityDescription = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  overflow: hidden;
  position: relative;
`;



const TourActivitiesSection = () => {
  const [expandedActivities, setExpandedActivities] = useState({});
  const [descriptionHeights, setDescriptionHeights] = useState({});
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  const activities = [
    // {
    //   name: "Jungle Safari",
    //   image: jungleSafari,
    //   description: "Embark on a thrilling adventure through Chitwan National Park. Choose between a rugged jeep expedition or a traditional elephant-back journey to observe diverse wildlife in their natural habitat."
    // },
    {
      name: "Bishajari Tal Visit",
      image: bishajariLake,
      description: "Discover the serene beauty of Bishajari Tal, a network of lakes and marshes teeming with birdlife and aquatic fauna. Enjoy a scenic boat ride and prime birdwatching opportunities."
    },
    {
      name: "Elephant Bath Experience",
      image: elephantBath,
      description: "Participate in a unique and ethical elephant experience at our Elephant Care Center. Help prepare meals for the elephants and assist in bathing them in the river (seasonal activity)."
    },
    {
      name: "Tharu Cultural Program",
      image: culturalProgram,
      description: "Immerse yourself in the rich cultural heritage of the Tharu people. Enjoy traditional dance performances, live music, and authentic Tharu cuisine in this vibrant evening program."
    },
    {
      name: "Elephant Ride",
      image: elephantRide,
      description: "Experience a majestic ride through the jungle atop a gentle giant. Observe wildlife from a unique vantage point while learning about elephant conservation efforts."
    },
    {
      name: "Jeep Safari",
      image: jeepSafari,
      description: "Explore the depths of Chitwan National Park on an exciting jeep safari. Cover more ground and increase your chances of wildlife sightings with our experienced guides."
    },
    {
      name: "Bird Watching",
      image: birdWatching,
      description: "Discover the diverse avian life of Chitwan with guided bird watching tours. Perfect for both novice and experienced birders, with over 500 species to observe."
    },
    {
      name: "Elephant Breeding Centre",
      image: elephantBreeding,
      description: "Visit the elephant breeding center to learn about conservation efforts. See baby elephants in their natural habitat and understand the challenges of elephant preservation."
    },
    {
      name: "Rafting/Trekking/Paragliding",
      image: adventureActivities,
      description: "Choose from a variety of adventure activities in and around Chitwan. Experience thrilling water sports, scenic treks, or soar above the landscape with paragliding."
    },
    // {
    //   name: "Canoe Ride",
    //   image: canoeRide,
    //   description: "Enjoy a peaceful canoe ride on the Rapti River. Choose between short or long trips, spotting aquatic wildlife and enjoying the serene river landscape."
    // },

    {
      name: "Tower Night Stay",
      image: towerNightStay,
      description: "Experience the jungle at night with a stay in our observation tower. Listen to the sounds of nocturnal wildlife and enjoy a unique perspective of the forest."
    },
    // {
    //   name: "Home Stay Programme",
    //   image: homeStay,
    //   description: "Immerse yourself in local life with a stay in a traditional Tharu home. Experience authentic customs, cuisine, and daily life of the indigenous Tharu community."
    // },
    {
      name: "BBQ/Camping",
      image: bbqCamping,
      description: "Enjoy a night under the stars with our BBQ and camping experience. Savor delicious grilled food while surrounded by the sounds of the jungle in this unique outdoor adventure."
    }
  ];

  const toggleDescription = (index) => {
    setExpandedActivities(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <Section>
      <Title>Experience the Best of Chitwan</Title>
      <ActivityList>
        {activities.map((activity, index) => (
          <ActivityItem key={index} reverse={index % 2 !== 0}>
            <ActivityImage 
              src={activity.image} 
              alt={activity.name} 
              ref={el => imageRefs.current[index] = el}
            />
            <ActivityContent ref={el => contentRefs.current[index] = el}>
              <ActivityTitle>{activity.name}</ActivityTitle>
              <ActivityDescription>
                {activity.description}
              </ActivityDescription>
             
            </ActivityContent>
          </ActivityItem>
        ))}
      </ActivityList>
    </Section>
  );
}

export default TourActivitiesSection;