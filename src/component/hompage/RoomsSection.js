import React, { useState } from 'react';
import styled from 'styled-components';
import { Wifi, Maximize, Users, Eye, DollarSign, X } from 'lucide-react';
import img1 from "../../assets/rooms/1.jpg";
import img2 from "../../assets/rooms/2.jpg";
import img3 from "../../assets/rooms/3.jpg";
import img4 from "../../assets/rooms/2.jpg";
import img5 from "../../assets/rooms/5.jpg";
import img6 from "../../assets/rooms/2.jpg";

const GridContainer = styled.div`
  display: grid;
  margin-left:40px;
  margin-right:40px;
    grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 50px;
`;

const RoomCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;


  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomInfo = styled.div`
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const RoomTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  color: #333;
`;

const RoomPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #b8860b;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #A17A0B;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a17709;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  color: #555;
`;

const ModalFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 15px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  color: #444;
`;

const ModalAmenities = styled.p`
  font-size: 0.9rem;
  margin-bottom: 15px;
  color: #666;
`;

const ModalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ModalButton = styled(Button)`
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
`;

const RoomSelectionGrid = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      name: "Budget Double Room",
      image: img1,
      description: "Cozy room with a garden view, perfect for budget-conscious travelers.",
      features: { wifi: true, size: "25 m²/269 ft²", capacity: 2, view: "Garden" },
      price: "Contact for price",
      amenities: "Garden view, Basic amenities"
    },
    {
      name: "Deluxe Double or Twin Room with Garden View",
      image: img2,
      description: "Spacious room offering a beautiful garden view and modern comforts.",
      features: { wifi: true, size: "Spacious", capacity: 2, view: "Garden", shower: true },
      price: "Contact for price",
      amenities: "Garden view, Shower, Deluxe amenities"
    },
    {
      name: "Deluxe Double Room with Balcony",
      image: img3,
      description: "Luxurious room featuring a private balcony overlooking the garden.",
      features: { wifi: true, size: "25 m²/269 ft²", capacity: 2, view: "Garden" },
      price: "Contact for price",
      amenities: "Private balcony, Garden view, Deluxe amenities"
    },
    {
      name: "Basic Room",
      image: img4,
      description: "Simple and comfortable room with a nature view, ideal for solo travelers or couples.",
      features: { wifi: true, size: "20 m²/215 ft²", capacity: 3, view: "Nature" },
      price: "Contact for price",
      amenities: "1 double bed and 1 single bed, Nature view"
    },
    {
      name: "Standard Double or Twin Room with Garden View",
      image: img5,
      description: "Comfortable room with a refreshing garden view and essential amenities.",
      features: { wifi: true, size: "Standard", capacity: 2, view: "Garden", shower: true },
      price: "Contact for price",
      amenities: "Garden view, Shower, Standard amenities"
    },
    {
      name: "Basic Double or Twin Room, Private Bathroom, Garden View",
      image: img6,
      description: "Cozy room with private facilities and a pleasant garden view.",
      features: { wifi: true, size: "Standard", capacity: 2, view: "Garden" },
      price: "Contact for price",
      amenities: "Garden view, Private bathroom, 2 single beds, Non-smoking"
    }
  ];

  const openModal = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <GridContainer>
        {rooms.map((room, index) => (
          <RoomCard key={index}>
            <RoomImage src={room.image} alt={room.name} />
            <RoomInfo>
              <RoomTitle>{room.name}</RoomTitle>
              <RoomPrice><DollarSign size={18} /> {room.price}</RoomPrice>
              <ButtonContainer>
                <Button onClick={() => openModal(room)}>See Details</Button>
                <Button onClick={() => openModal(room)}>Book Now</Button>
              </ButtonContainer>
            </RoomInfo>
          </RoomCard>
        ))}
      </GridContainer>

      {selectedRoom && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}><X /></CloseButton>
            <ModalTitle>{selectedRoom.name}</ModalTitle>
            <ModalDescription>{selectedRoom.description}</ModalDescription>
            <ModalFeatures>
              <FeatureItem><Maximize size={18} /> Size: {selectedRoom.features.size}</FeatureItem>
              <FeatureItem><Users size={18} /> Capacity: {selectedRoom.features.capacity} guests</FeatureItem>
              <FeatureItem><Eye size={18} /> View: {selectedRoom.features.view}</FeatureItem>
              {selectedRoom.features.wifi && <FeatureItem><Wifi size={18} /> WiFi: Available</FeatureItem>}
              {/* {selectedRoom.features.shower && <FeatureItem><Shower size={18} /> Shower: Available</FeatureItem>} */}
            </ModalFeatures>
            <ModalAmenities>Amenities: {selectedRoom.amenities}</ModalAmenities>
            <ModalPrice><DollarSign size={18} /> {selectedRoom.price}</ModalPrice>
            <ModalButton onClick={closeModal}>Book Now</ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default RoomSelectionGrid;