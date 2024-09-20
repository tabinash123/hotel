import React from 'react';
import styled from 'styled-components';

const AmenitiesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;

  @media (max-width: 1024px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const SectionTitle = styled.h2`
  color: #A17A0B;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const MainTitle = styled.h1`
  color: #000;
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

const AmenityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  color: #A17A0B;
  margin-bottom: 10px;
`;

const AmenityTitle = styled.h3`
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const AmenityDescription = styled.p`
  color: #5a5a5a;
  font-size: 0.9rem;
  max-width: 250px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;

const Icon = ({ d }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const amenities = [
  { 
    icon: "M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.42 9.42c5.857-5.857 15.355-5.857 21.213 0",
    title: 'High Speed Wifi'
  },
  { 
    icon: "M5 17h14M5 17a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M5 17l-2 4M19 17l2 4M12 17v4M7 9h.01M17 9h.01",
    title: 'Safari Tours'
  },
  { 
    icon: "M4 7h16M4 7v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7M4 7l6-3h4l6 3M8 12h8",
    title: 'Nature View Rooms'
  },
  { 
    icon: "M2 12h20M2 12c2-3 4-4 6-4s4 1 6 4 4 4 6 4-4-1-6-4-4-4-6-4-4 1-6 4z",
    title: 'Riverside Pool'
  },
  { 
    icon: "M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 2v6M10 2v6",
    title: 'Local Cuisine'
  },
  { 
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm7 3h2v6h-2V9zm-4 6h10v2H7v-2z",
    title: 'Eco-Friendly Accommodations'
  },
];

const ChitwanResortAmenities = () => {
  return (
    <AmenitiesSection>
      <SectionTitle>AMENITIES</SectionTitle>
      <MainTitle>Experience Chitwan's Natural Beauty</MainTitle>
      <AmenitiesGrid>
        {amenities.map((amenity, index) => (
          <AmenityItem key={index}>
            <IconWrapper>
              <Icon d={amenity.icon} />
            </IconWrapper>
            <AmenityTitle>{amenity.title}</AmenityTitle>
            <AmenityDescription>
              Immerse yourself in the wonders of Chitwan National Park with our thoughtful amenities.
            </AmenityDescription>
          </AmenityItem>
        ))}
      </AmenitiesGrid>
    </AmenitiesSection>
  );
};

export default ChitwanResortAmenities;