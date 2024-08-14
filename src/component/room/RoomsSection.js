import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img1 from "../../assets/rooms/1.jpg";
import img2 from "../../assets/rooms/2.jpg";
import img3 from "../../assets/rooms/3.jpg";
import img4 from "../../assets/rooms/1.jpg";
import img5 from "../../assets/rooms/5.jpg";
import img6 from "../../assets/rooms/2.jpg";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: #FFFFFF;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #B8860B;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 50px;
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RoomCard = styled.div`
  background: #FFF5E6;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RoomImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const RoomInfo = styled.div`
  padding: 20px;
`;

const BestSeller = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  color: #333;
  padding: 5px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
`;

const RoomName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

const RoomDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const BookNowButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #B8860B;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A17A0B;
  }
`;

const RoomsSection = () => {
  const rooms = [
    {
      name: 'Deluxe King Room',
      image: img1,
      price: '$360/Night',
      guests: 2,
      size: '40 ft',
      bestSeller: true,
    },
    {
      name: 'Executive Suite',
      image: img2,
      price: '$520/Night',
      guests: 2,
      size: '50 ft',
      bestSeller: false,
    },
    {
      name: 'Family Loft Suite',
      image: img3,
      price: '$680/Night',
      guests: 4,
      size: '60 ft',
      bestSeller: true,
    },
    {
      name: 'Connecting Rooms',
      image: img4,
      price: '$720/Night',
      guests: 4,
      size: '70 ft',
      bestSeller: false,
    },
    {
      name: 'Grand Luxury Suite',
      image: img5,
      price: '$980/Night',
      guests: 2,
      size: '80 ft',
      bestSeller: true,
    },
    {
      name: 'Presidential Penthouse',
      image: img6,
      price: '$1500/Night',
      guests: 4,
      size: '100 ft',
      bestSeller: true,
    },
  ];

  return (
    <Section>
      <Subtitle>LUXURY ACCOMMODATIONS</Subtitle>
      <Title>Rooms & Suites</Title>
      <Description>
        Immerse yourself in the pinnacle of luxury with our meticulously designed rooms and suites. 
        Each space is crafted to provide an oasis of comfort, style, and sophistication, 
        ensuring an unforgettable stay that exceeds your every expectation.
      </Description>
      <RoomGrid>
        {rooms.map((room, index) => (
          <RoomCard key={index}>
            <div style={{ position: 'relative' }}>
              <RoomImage src={room.image} alt={room.name} />
              {room.bestSeller && <BestSeller>Best Seller</BestSeller>}
            </div>
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <RoomDetails>{room.guests} Guests • {room.size} • {room.price}</RoomDetails>
              <BookNowButton to="/book">BOOK NOW</BookNowButton>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomGrid>
    </Section>
  );
};

export default RoomsSection;