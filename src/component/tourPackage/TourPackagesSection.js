import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'lucide-react';

import jungleSafari from '../../assets/activities/jungleSafari.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';

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
  justify-content: space-between;
  
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

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #e67e22;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;

  svg {
    margin-left: 5px;
  }
`;

const TourActivitiesSection = () => {
  const [expandedActivities, setExpandedActivities] = useState({});
  const [descriptionHeights, setDescriptionHeights] = useState({});
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

 

const activities = [
  {
    name: "Jungle Safari",
    image: jungleSafari,
    description: "Embark on an thrilling adventure through Chitwan National Park with our Jungle Safari. Choose between a rugged jeep expedition or a traditional elephant-back journey. Our safaris offer unparalleled opportunities to observe Chitwan's diverse wildlife in their natural habitat.\n\nWhat to expect:\n- Potential sightings of one-horned rhinos, Bengal tigers,, and various deer species\n- Over 500 bird species, including critically endangered Bengal floricans and sarus cranes\n- Expert naturalist guides providing insights on flora, fauna, and conservation efforts\n\nDuration: 3-4 hours\nBest time: Early morning (6:00 AM) or late afternoon (3:00 PM) for optimal wildlife viewing\nIncludes: Transportation, guide, park fees, and refreshments\nWhat to bring: Comfortable clothing, walking shoes, hat, sunscreen, insect repellent, and camera\n\nNote: Wildlife sightings are not guaranteed but are common. Safari routes may vary based on recent animal activity and park conditions."
  },
  {
    name: "Bishajari Tal Visit",
    image: bishajariLake,
    description: "Discover the serene beauty of Bishajari Tal, a network of lakes and marshes teeming with birdlife and aquatic fauna. This oxbow lake system, separated from the Rapti River, offers a peaceful retreat and excellent opportunities for nature observation.\n\nHighlights:\n- Scenic boat ride through tranquil waters and wetlands\n- Prime birdwatching: Spot cormorants, kingfishers, herons, and migratory waterfowl\n- Possible sightings of marsh mugger crocodiles and various fish species\n- Guided nature walk along the lakeshore, learning about local ecosystems\n\nDuration: 2-3 hours\nBest time: Early morning or late afternoon for best lighting and animal activity\nIncludes: Transportation, boat ride, expert guide, binoculars, and bird checklist\nDifficulty: Easy, suitable for all ages and fitness levels\n\nTip: Bring a good camera with zoom lens for capturing wildlife. Early booking recommended during peak season (October-March) when migratory birds are present."
  },
  {
    name: "Elephant Bath Experience",
    image: elephantBath,
    description: "Participate in a unique and ethical elephant experience at our Elephant Care Center. This activity offers an up-close encounter with these gentle giants while promoting responsible tourism and elephant welfare.\n\nYour experience includes:\n- Introduction to elephant biology, behavior, and conservation status\n- Helping prepare a healthy meal for the elephants\n- Assisting in bathing the elephants in the river (seasonal activity)\n- Learning about our elephant care practices and conservation efforts\n\nDuration: Approximately 2 hours\nSchedule: Daily at 8:30 AM and 3:30 PM\nGroup size: Limited to 8 participants per session for a more personal experience\nSuitable for: All ages; children must be accompanied by an adult\n\nWhat to bring: Change of clothes, towel, waterproof camera (optional)\nNote: This is a hands-on activity. You may get wet and muddy. We prioritize the elephants' wellbeing; their participation is always voluntary."
  },
  {
    name: "Tharu Cultural Program",
    image: culturalProgram,
    description: "Immerse yourself in the rich cultural heritage of the Tharu people, the indigenous inhabitants of the Terai region. Our evening cultural program offers a vibrant showcase of traditional Tharu arts, music, and cuisine.\n\nProgram highlights:\n- Welcome drink made from local herbs\n- Traditional Tharu stick dance performance\n- Live demonstration of Tharu musical instruments\n- Short presentation on Tharu history and customs\n- Authentic Tharu dinner buffet featuring local specialties\n\nSchedule:\n- 6:30 PM: Welcome and introduction\n- 7:00 PM: Cultural performances begin\n- 8:00 PM: Dinner service\n- 9:00 PM: Program concludes\n\nVenue: Resort's outdoor theater (weather permitting) or indoor hall\nDress code: Casual; traditional attire welcome\nLanguage: Performances in Tharu with English narration\n\nNote: Advance booking recommended, especially during peak tourist season. Vegetarian and vegan options available upon request. Please inform us of any dietary restrictions when booking."
  }
];


  // useEffect(() => {
  //   const updateHeights = () => {
  //     const newHeights = {};
  //     imageRefs.current.forEach((ref, index) => {
  //       if (ref && contentRefs.current[index]) {
  //         newHeights[index] = ref.offsetHeight;
  //       }
  //     });
  //     setDescriptionHeights(newHeights);
  //   };

  //   updateHeights();
  //   window.addEventListener('resize', updateHeights);
  //   return () => window.removeEventListener('resize', updateHeights);
  // }, []);

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
              <ActivityDescription style={{ height: `${descriptionHeights[index]}px` }}>
                {activity.description}
              </ActivityDescription>
              <ReadMoreButton onClick={() => toggleDescription(index)}>
                {expandedActivities[index] ? 'Read Less' : 'Read More'}
                {expandedActivities[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </ReadMoreButton>
            </ActivityContent>
          </ActivityItem>
        ))}
      </ActivityList>
    </Section>
  );
}

export default TourActivitiesSection;