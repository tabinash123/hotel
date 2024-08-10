import React, { useState } from 'react';
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
  padding: 60px 20px;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #C1A267;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
  font-weight: 300;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const RoomCategories = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.active ? '#C1A267' : '#2C3E50'};
  border-bottom: ${props => props.active ? '2px solid #C1A267' : 'none'};
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;

  &:hover {
    color: #C1A267;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns:  1fr;
    gap: 15px;
  }
`;

const RoomCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${RoomCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const RoomInfo = styled.div`
  padding: 25px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const RoomPrice = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 15px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 18px;
  color: #2C3E50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 10px;
    top: 10px;
    left: 10px;
  }
`;

const RoomName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #2C3E50;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const RoomDescription = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const RoomFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ecf0f1;
  padding-top: 20px;

  @media (max-width: 768px) {
    padding-top: 15px;
  }

  @media (max-width: 480px) {
    padding-top: 10px;
    flex-direction: column;
    gap: 5px;
  }
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #7f8c8d;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const RoomsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

 const rooms = [
    {
      name: 'Deluxe King Room',
      image: img1,
      price: '$360',
      description: 'Indulge in comfort with our spacious Deluxe King Room, featuring premium amenities and elegant decor.',
      rating: 4.9,
      features: ['King Size Bed', '55" OLED TV', 'Gourmet Breakfast'],
      category: 'Deluxe Room'
    },
    {
      name: 'Executive Suite',
      image: img2,
      price: '$520',
      description: 'Experience luxury in our Executive Suite, complete with a separate living area and panoramic city views.',
      rating: 4.8,
      features: ['King Size Bed', '65" QLED TV', 'Butler Service'],
      category: 'Deluxe Room'
    },
    {
      name: 'Family Loft Suite',
      image: img3,
      price: '$680',
      description: 'Perfect for families, our two-story loft suite offers ample space and comfort for everyone.',
      rating: 4.9,
      features: ['2 King Size Beds', '55" OLED TV', 'Kids Welcome Pack'],
      category: 'Family Suit'
    },
    {
      name: 'Connecting Deluxe Rooms',
      image: img4,
      price: '$720',
      description: 'Ideal for larger families or groups, enjoy the privacy and convenience of two connected Deluxe Rooms.',
      rating: 4.7,
      features: ['2 Queen Size Beds', '55" OLED TV', 'Family Breakfast'],
      category: 'Family Suit'
    },
    {
      name: 'Grand Luxury Suite',
      image: img5,
      price: '$980',
      description: 'Our finest accommodation, featuring exquisite design, premium amenities, and unparalleled service.',
      rating: 5.0,
      features: ['Super King Size Bed', '75" QLED TV', 'Private Chef'],
      category: 'Grand Luxury Room'
    },
    {
      name: 'Presidential Penthouse',
      image: img6,
      price: '$1500',
      description: 'The epitome of luxury, our Presidential Penthouse offers a truly unforgettable stay with breathtaking views.',
      rating: 5.0,
      features: ['2 Super King Size Beds', '85" OLED TV', 'Helicopter Transfer'],
      category: 'Grand Luxury Room'
    },
  ];


  const filteredRooms = activeCategory === 'All' 
    ? rooms 
    : rooms.filter(room => room.category === activeCategory);

  return (
    <Section>
      <Subtitle>LUXURY EXPERIENCE</Subtitle>
      <Title>Experience Unparalleled Hospitality at Luxe. Where Extravagance Meets Comfort.</Title>
      <RoomCategories>
        {['All', 'Deluxe Room', 'Family Suit', 'Grand Luxury Room'].map(category => (
          <CategoryButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </RoomCategories>
      <RoomGrid>
        {filteredRooms.map((room, index) => (
          <RoomCard key={index}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <RoomImage src={room.image} alt={room.name} />
              <RoomPrice>{room.price}<sup>/Night</sup></RoomPrice>
            </div>
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <Rating>
                <Star size={20} fill="#C1A267" color="#C1A267" />
                <span style={{ marginLeft: '8px', fontSize: '16px', color: '#2C3E50', fontWeight: '600' }}>{room.rating}</span>
              </Rating>
              <RoomDescription>{room.description}</RoomDescription>
              <RoomFeatures>
                <Feature>
                  <Users size={18} style={{marginRight: '8px', color: '#C1A267'}} />
                  {room.features[0]}
                </Feature>
                <Feature>
                  <Tv size={18} style={{marginRight: '8px', color: '#C1A267'}} />
                  {room.features[1]}
                </Feature>
                <Feature>
                  <Utensils size={18} style={{marginRight: '8px', color: '#C1A267'}} />
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