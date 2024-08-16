import React, { useState } from 'react';
import styled from 'styled-components';
import { Wifi, Coffee, Maximize, Users, Mountain, Wind, Tv, Lock } from 'lucide-react';

import img1 from "../../assets/rooms/1.jpg";
import img2 from "../../assets/rooms/2.jpg";
import img3 from "../../assets/rooms/3.jpg";
import img4 from "../../assets/rooms/1.jpg";
import img5 from "../../assets/rooms/5.jpg";
import img6 from "../../assets/rooms/2.jpg";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    padding: 75px 20px;
  }

  @media (min-width: 1024px) {
    padding: 100px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #B8860B;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 50px;
  }
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

const RoomCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomInfo = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const RoomName = styled.h3`
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const RoomDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.6;
  flex-grow: 1;
`;

const RoomFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #34495e;
  background-color: #f0f3f5;
  padding: 5px 10px;
  border-radius: 20px;

  svg {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const RoomPrice = styled.div`
  font-size: 1.1rem;
  color: #B8860B;
  font-weight: 600;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.primary ? '#B8860B' : 'transparent'};
  color: ${props => props.primary ? '#000000' : '#000000'};
  border: ${props => props.primary ? 'none' : '2px solid #B8860B'};
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 12px;
    font-size: 1rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const ModalDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const ModalFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const ModalFeature = styled(Feature)`
  font-size: 0.8rem;
  padding: 3px 8px;
`;

const ModalAmenities = styled.p`
  font-size: 0.9rem;
  color: #34495e;
  margin-bottom: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2c3e50;
`;

const RoomsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      name: "Jungle View Deluxe",
      image: img1,
      description: "Spacious room with a private balcony overlooking the lush jungle. Perfect for wildlife enthusiasts.",
      features: { wifi: true, size: "35 m²", capacity: 2, view: "Jungle", ac: true, tv: true, safe: true },
      price: "$150 per night",
      amenities: "King-size bed, En-suite bathroom, Private balcony, Mini-bar, Coffee maker"
    },
    {
      name: "Riverside Suite",
      image: img2,
      description: "Luxurious suite with panoramic views of the Rapti River. Ideal for a romantic getaway.",
      features: { wifi: true, size: "50 m²", capacity: 2, view: "River", ac: true, tv: true, safe: true },
      price: "$250 per night",
      amenities: "King-size bed, Jacuzzi tub, Separate living area, Kitchenette, Private terrace"
    },
    {
      name: "Family Cottage",
      image: img3,
      description: "Cozy cottage with multiple rooms, perfect for families or groups of friends.",
      features: { wifi: true, size: "75 m²", capacity: 4, view: "Garden", ac: true, tv: true, safe: true },
      price: "$300 per night",
      amenities: "Two bedrooms, Full kitchen, Dining area, Private garden, BBQ facilities"
    },
    {
      name: "Safari Lodge",
      image: img4,
      description: "Authentic lodge-style accommodation with rustic charm and modern amenities.",
      features: { wifi: true, size: "40 m²", capacity: 3, view: "Savanna", ac: true, tv: true, safe: true },
      price: "$180 per night",
      amenities: "Queen-size bed, Bunk bed, Outdoor shower, Veranda, Binoculars provided"
    },
    {
      name: "Elephant View Room",
      image: img5,
      description: "Unique room with views of the elephant bathing area. Experience wildlife up close.",
      features: { wifi: true, size: "30 m²", capacity: 2, view: "Elephant area", ac: true, tv: true, safe: true },
      price: "$200 per night",
      amenities: "Queen-size bed, Floor-to-ceiling windows, Observation deck, Mini-fridge, Tea/coffee making facilities"
    },
    {
      name: "Honeymoon Suite",
      image: img6,
      description: "Romantic suite with a private jacuzzi and stunning views of the national park.",
      features: { wifi: true, size: "60 m²", capacity: 2, view: "Park", ac: true, tv: true, safe: true },
      price: "$350 per night",
      amenities: "Four-poster king-size bed, Private jacuzzi, Champagne bar, Couples spa treatments, Candlelit dinner service"
    }
  ];

  return (
    <Section>
      <Title>Our Accommodations</Title>
      <Subtitle>Experience the perfect blend of comfort and nature in our thoughtfully designed rooms and suites.</Subtitle>
      <RoomsGrid>
        {rooms.map((room, index) => (
          <RoomCard key={index}>
            <RoomImage src={room.image} alt={room.name} />
            <RoomInfo>
              <RoomName>{room.name}</RoomName>
              <RoomDescription>{room.description}</RoomDescription>
              <RoomFeatures>
                <Feature><Wifi size={16} /> Wi-Fi</Feature>
                <Feature><Maximize size={16} /> {room.features.size}</Feature>
                <Feature><Users size={16} /> {room.features.capacity} Guests</Feature>
                <Feature><Mountain size={16} /> {room.features.view} View</Feature>
              </RoomFeatures>
              <RoomPrice>{room.price}</RoomPrice>
              <ButtonGroup>
                <Button onClick={() => setSelectedRoom(room)}>Quick View</Button>
                <Button primary>Book Now</Button>
              </ButtonGroup>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomsGrid>
      {selectedRoom && (
        <Modal onClick={() => setSelectedRoom(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedRoom(null)}>&times;</CloseButton>
            <ModalImage src={selectedRoom.image} alt={selectedRoom.name} />
            <ModalTitle>{selectedRoom.name}</ModalTitle>
            <ModalDescription>{selectedRoom.description}</ModalDescription>
            <ModalFeatures>
              <ModalFeature><Wifi size={14} /> Wi-Fi</ModalFeature>
              <ModalFeature><Maximize size={14} /> {selectedRoom.features.size}</ModalFeature>
              <ModalFeature><Users size={14} /> {selectedRoom.features.capacity}</ModalFeature>
              <ModalFeature><Mountain size={14} /> {selectedRoom.features.view}</ModalFeature>
              <ModalFeature><Wind size={14} /> AC</ModalFeature>
              <ModalFeature><Tv size={14} /> TV</ModalFeature>
              <ModalFeature><Lock size={14} /> Safe</ModalFeature>
            </ModalFeatures>
            <ModalAmenities><strong>Amenities:</strong> {selectedRoom.amenities}</ModalAmenities>
            <RoomPrice>{selectedRoom.price}</RoomPrice>
            <Button primary style={{width: '100%'}}>Book Now</Button>
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
};

export default RoomsSection;