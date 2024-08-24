import React, { useState } from 'react';
import styled from 'styled-components';
import { Wifi, Maximize, Users, Mountain, Droplet } from 'lucide-react';

import img1 from "../../assets/rooms/1.jpg";
import img2 from "../../assets/rooms/2.jpg";
import img3 from "../../assets/rooms/3.jpg";
import img4 from "../../assets/rooms/2.jpg";
import img5 from "../../assets/rooms/5.jpg";
import img6 from "../../assets/rooms/3.jpg";

import agoda from '../../assets/agoda.png'
import trip from '../../assets/trip.png'
import expe from '../../assets/expe.png'
import booking from '../../assets/booking.png'

// ... (keep all the styled components as they are)

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
  // background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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



const BookingSites = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

const BookingIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  text-decoration: none;
  color: #2c3e50;
  font-size: 0.7rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  img {
 width: 60px;
    // height: 24px;
    object-fit: contain;
    margin-bottom: 5px;
  }
`;
const RoomsSection = () => {
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

  
const bookingSites = [
  {
    name: 'Booking.com',
    icon: booking, // Correct
    url: 'https://www.booking.com/hotel/np/eco-adventure-resort-chitawan.html'
  },
  {
    name: 'agoda',
    icon: agoda, // Correct
    url: 'https://www.agoda.com/eco-adventure-resort/hotel/chitwan-np.html?cid=1844104&ds=WMroRYQzmDMDx86E'
  },
  {
    name: 'TripAdvisor',
    icon: trip, // Correct
    url: 'https://www.tripadvisor.com/Hotel_Review-g1367591-d6433921-Reviews-Eco_Adventure_Resort-Sauraha_Chitwan_District_Narayani_Zone_Central_Region.html'
  },
  {
    name: 'Expedia',
    icon: expe, // Correct
    url: 'https://www.expedia.com/Sauraha-Hotels-Eco-Adventure-Resort.h10989661.Hotel-Information'
  }
];

  return (
    <Section>
      <Title>Our Accommodations</Title>
      <Subtitle>Experience the beauty of nature with our range of comfortable rooms at Eco Adventure Resort.</Subtitle>
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
                {room.features.shower && <Feature><Droplet size={16} /> Shower</Feature>}
              </RoomFeatures>
              <BookingSites>
  {bookingSites.map((site, index) => (
    <BookingIcon key={index} href={site.url} target="_blank" rel="noopener noreferrer">
      <img src={site.icon} alt={site.name} />
      {site.name}
    </BookingIcon>
  ))}
</BookingSites>
            </RoomInfo>
          </RoomCard>
        ))}
      </RoomsGrid>
      
    </Section>
  );
};

export default RoomsSection;