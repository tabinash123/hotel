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
  padding: 10px 20px;
  background-color: #FFFFFF;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
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
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const RoomInfo = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const BestSeller = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  color: black;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

const RoomName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const RoomDetails = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const RoomPrice = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const BookNowButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #A17A0B;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #B8860B;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const ShowMoreButton = styled(Link)`
  display: block;
  width: 200px;
  margin: 40px auto 0;
  padding: 12px 20px;
  background-color: #A17A0B;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #B8860B;
  }

  @media (max-width: 480px) {
    width: 180px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const RoomsSection = () => {
  const rooms = [
    {
      name: 'Standard Room',
      image: img1,
      guests: 2,
      size: '30 ft',
      price: '$99/night',
      bestSeller: true,
    },
    {
      name: 'Deluxe Room',
      image: img2,
      guests: 2,
      size: '35 ft',
      price: '$129/night',
      bestSeller: false,
    },
    {
      name: 'Premier Room',
      image: img3,
      guests: 2,
      size: '35 ft',
      price: '$139/night',
      bestSeller: true,
    },
  ];

  return (
    <Section>
      <TitleSection>
        <Title>Our Rooms</Title>
        <Subtitle>Choose from our comfortable and luxurious rooms</Subtitle>
      </TitleSection>
      <RoomGrid>
        {rooms.map((room, index) => (
          <RoomCard key={index}>
            <div style={{ position: 'relative' }}>
              <RoomImage src={room.image} alt={room.name} />
              {room.bestSeller && <BestSeller>Best Seller</BestSeller>}
            </div>
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <RoomDetails>{room.guests} Guests • {room.size}</RoomDetails>
              <RoomPrice>{room.price}</RoomPrice>
              <BookNowButton to="/book">BOOK NOW</BookNowButton>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomGrid>
      <ShowMoreButton to="/room">SHOW MORE ROOMS</ShowMoreButton>
    </Section>
  );
};

export default RoomsSection;