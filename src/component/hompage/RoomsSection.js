import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';
import familyRoom from '../../assets/rooms/family.jpg';
import singleRoom from '../../assets/rooms/single.jpg';
import deluxRoom from '../../assets/rooms/delux.jpg';

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (min-width: 1200px) {
    padding: 40px 80px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RoomCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RoomInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
  color: white;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const StarRating = styled.div`
  color: #ffd700;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

const StyledStar = styled(Star)`
  fill: #ffd700;
  stroke: #ffd700;
`;

const RoomName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 4px;
  }
`;

const RoomStatus = styled.p`
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const RoomPrice = styled.span`
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const PerNight = styled.span`
  font-size: 12px;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const RoomCardComponent = ({ room }) => (
  <RoomCard>
    <RoomImage src={room.image} alt={room.name} />
    <RoomInfo>
      <RoomName>{room.name}</RoomName>
      <PriceRow>
        <RoomPrice>${room.price}</RoomPrice>
        <PerNight>Per Night</PerNight>
      </PriceRow>
      <StarRating>
        {[...Array(5)].map((_, index) => (
          <StyledStar key={index} size={14} />
        ))}
      </StarRating>
    </RoomInfo>
  </RoomCard>
);

const RoomsSection = () => {
  const rooms = [
    { name: 'Family Room', price: 220, image: familyRoom },
    { name: 'Delux Room', price: 320, image: deluxRoom },
    { name: 'Single Room', price: 200, image: singleRoom },
    { name: 'Family Room', price: 220, image: familyRoom },
    { name: 'Delux Room', price: 320, image: deluxRoom },
    { name: 'Single Room', price: 200, image: singleRoom },
  ];

  return (
    <Section>
      <Title>Rooms & Suites.</Title>
      <Subtitle>
        Continually productize compelling quality for packed in business consulting elated
       
      </Subtitle>
      <RoomGrid>
        {rooms.map((room) => (
          <RoomCardComponent key={room.name} room={room} />
        ))}
      </RoomGrid>
    </Section>
  );
};

export default RoomsSection;