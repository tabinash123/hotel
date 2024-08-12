import React from 'react';
import styled from 'styled-components';
import { Star, Tv, Utensils, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #f8f8f8;

  @media (max-width: 1024px) {
    padding: 50px 15px;
  }

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #8B4513;
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
  font-size: 2.5rem;
  color: #2C3E50;  
  text-align: center;
  margin-bottom: 40px;
  color: #003366;
  font-weight: 500;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const RoomCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
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

  @media (max-width: 1024px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

const RoomInfo = styled.div`
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 18px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const RoomPrice = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  color: #2C3E50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 7px 10px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 9px;
    top: 10px;
    left: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px 8px;
    top: 8px;
    left: 8px;
  }
`;

const RoomName = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: #2C3E50;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

const RoomDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const RoomFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ecf0f1;
  padding-top: 15px;

  @media (max-width: 1024px) {
    padding-top: 12px;
  }

  @media (max-width: 768px) {
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    padding-top: 8px;
    flex-direction: column;
    gap: 5px;
  }
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #7f8c8d;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

const ViewMoreLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 40px;
  padding: 15px 30px;
  background-color: #C1A267;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 200px;

  &:hover {
    background-color: #A3895A;
  }

  @media (max-width: 1024px) {
    margin-top: 35px;
    padding: 12px 25px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 14px;
  }
`;


const RoomsSection = () => {
  const rooms = [
    {
      name: 'Deluxe King Room',
      image: img1,
      price: '$360',
      description: 'Indulge in comfort with our spacious Deluxe King Room, featuring premium amenities and elegant decor.',
      rating: 4.9,
      features: ['King Size Bed', '55" OLED TV', 'Gourmet Breakfast'],
    },
    {
      name: 'Executive Suite',
      image: img2,
      price: '$520',
      description: 'Experience luxury in our Executive Suite, complete with a separate living area and panoramic city views.',
      rating: 4.8,
      features: ['King Size Bed', '65" QLED TV', 'Butler Service'],
    },
    {
      name: 'Family Loft Suite',
      image: img3,
      price: '$680',
      description: 'Perfect for families, our two-story loft suite offers ample space and comfort for everyone.',
      rating: 4.9,
      features: ['2 King Size Beds', '55" OLED TV', 'Kids Welcome Pack'],
    },
    {
      name: 'Connecting Deluxe Rooms',
      image: img4,
      price: '$720',
      description: 'Ideal for larger families or groups, enjoy the privacy and convenience of two connected Deluxe Rooms.',
      rating: 4.7,
      features: ['2 Queen Size Beds', '55" OLED TV', 'Family Breakfast'],
    },
  ];

  return (
    <Section>
      <Subtitle>LUXURY EXPERIENCE</Subtitle>
      <Title>Experience Unparalleled Hospitality at Luxe. Where Extravagance Meets Comfort.</Title>
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
                <Star size={16} fill="#C1A267" color="#C1A267" />
                <span style={{ marginLeft: '6px', fontSize: '13px', color: '#2C3E50', fontWeight: '600' }}>{room.rating}</span>
              </Rating>
              <RoomFeatures>
                <Feature>
                  <Users size={14} style={{marginRight: '4px', color: '#C1A267'}} />
                  {room.features[0]}
                </Feature>
                <Feature>
                  <Tv size={14} style={{marginRight: '4px', color: '#C1A267'}} />
                  {room.features[1]}
                </Feature>
                <Feature>
                  <Utensils size={14} style={{marginRight: '4px', color: '#C1A267'}} />
                  {room.features[2]}
                </Feature>
              </RoomFeatures>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomGrid>
      <ViewMoreLink to="/room">View More Rooms</ViewMoreLink>
    </Section>
  );
};

export default RoomsSection;