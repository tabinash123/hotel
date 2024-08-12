import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, Tv, Utensils, Users } from 'lucide-react';

import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";
import img5 from "../../assets/gallary/5.jpg";
import img6 from "../../assets/gallary/6.jpg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const IntroSection = styled.div`
  text-align: left;
  margin-bottom: 3rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #8B4513;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RoomCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${RoomCard}:hover & {
    transform: scale(1.05);
  }
`;

const RoomInfo = styled.div`
  padding: 1.5rem;
`;

const RoomPrice = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  color: #2C3E50;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const RoomName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2C3E50;
  font-weight: 600;
`;

const RoomDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const RoomFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid #ecf0f1;
  padding-top: 1rem;
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const RoomsSection = () => {
  const rooms = [
    {
      name: 'Deluxe King Room',
      image: img1,
      price: '$360',
      description: 'Indulge in our spacious Deluxe King Room, featuring premium amenities and elegant decor for a truly luxurious stay.',
      rating: 4.9,
      features: ['King Bed', '55" OLED TV', 'Gourmet Breakfast'],
    },
    {
      name: 'Executive Suite',
      image: img2,
      price: '$520',
      description: 'Experience opulence in our Executive Suite, complete with a separate living area and breathtaking city views.',
      rating: 4.8,
      features: ['King Bed', '65" QLED TV', 'Butler Service'],
    },
    {
      name: 'Family Loft Suite',
      image: img3,
      price: '$680',
      description: 'Perfect for families, our two-story loft suite offers ample space and comfort for an unforgettable family getaway.',
      rating: 4.9,
      features: ['2 King Beds', '55" OLED TV', 'Kids Welcome Pack'],
    },
    {
      name: 'Connecting Rooms',
      image: img4,
      price: '$720',
      description: 'Ideal for larger families or groups, enjoy the privacy and convenience of two elegantly appointed connected rooms.',
      rating: 4.7,
      features: ['2 Queen Beds', '55" OLED TV', 'Family Dining'],
    },
    {
      name: 'Grand Luxury Suite',
      image: img5,
      price: '$980',
      description: 'Our finest accommodation, featuring exquisite design, premium amenities, and unparalleled personalized service.',
      rating: 5.0,
      features: ['Super King Bed', '75" QLED TV', 'Private Chef'],
    },
    {
      name: 'Presidential Penthouse',
      image: img6,
      price: '$1500',
      description: 'The epitome of luxury, our Presidential Penthouse offers a truly unforgettable stay with panoramic views and exclusive amenities.',
      rating: 5.0,
      features: ['2 Super King Beds', '85" OLED TV', 'Helicopter Transfer'],
    },
  ];

  return (
    <Section>
      <IntroSection>
        <Subtitle>LUXURY ACCOMMODATIONS</Subtitle>
        <Title>Unparalleled Comfort and Elegance</Title>
        <Description>
          Immerse yourself in the pinnacle of luxury with our meticulously designed rooms and suites. 
          Each space is crafted to provide an oasis of comfort, style, and sophistication, 
          ensuring an unforgettable stay that exceeds your every expectation.
        </Description>
      </IntroSection>
      <RoomGrid>
        {rooms.map((room, index) => (
          <RoomCard key={index}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <RoomImage src={room.image} alt={room.name} />
              <RoomPrice>{room.price}<sup>/Night</sup></RoomPrice>
            </div>
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <Rating>
                <Star size={18} fill="#8B4513" color="#8B4513" />
                <span style={{ marginLeft: '0.5rem', fontSize: '1rem', color: '#2C3E50', fontWeight: '600' }}>{room.rating}</span>
              </Rating>
              <RoomDescription>{room.description}</RoomDescription>
              <RoomFeatures>
                <Feature>
                  <Users size={16} style={{marginRight: '0.5rem', color: '#8B4513'}} />
                  {room.features[0]}
                </Feature>
                <Feature>
                  <Tv size={16} style={{marginRight: '0.5rem', color: '#8B4513'}} />
                  {room.features[1]}
                </Feature>
                <Feature>
                  <Utensils size={16} style={{marginRight: '0.5rem', color: '#8B4513'}} />
                  {room.features[2]}
                </Feature>
              </RoomFeatures>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomGrid>
    </Section>
  );
};

export default RoomsSection;