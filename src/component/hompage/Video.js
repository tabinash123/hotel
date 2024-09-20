import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import partner logos
import agoda from '../../assets/agoda.png';
import trip from '../../assets/trip.png';
import expe from '../../assets/expe.png';
import booking from '../../assets/booking.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PartnersSection = styled.section`
  max-width: 1200px;
  margin: 100px auto;
  padding: 60px 40px;
  background-color: #f8f9fa;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  color: #e74c3c;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 0 10px;
  letter-spacing: 3px;
`;

const Title = styled.h2`
  font-size: 42px;
  color: #2c3e50;
  margin: 0;
  font-weight: bold;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #e74c3c;
    margin: 20px auto 0;
    border-radius: 2px;
  }
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;
`;

const PartnerLogo = styled.img`
  max-width: 180px;
  max-height: 90px;
  object-fit: contain;
  transition: all 0.3s ease;
  opacity: 0.7;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;

  &:hover {
    transform: scale(1.1) translateY(-5px);
    filter: grayscale(0%);
    opacity: 1;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const partners = [
  { name: "Agoda", logo: agoda },
  { name: "TripAdvisor", logo: trip },
  { name: "Expedia", logo: expe },
  { name: "Booking.com", logo: booking },
];

const OurPartners = () => {
  return (
    <PartnersSection>
      <ContentWrapper>
        <SectionHeader>
          <SubTitle>OUR NETWORK</SubTitle>
          <Title>Trusted Partners</Title>
        </SectionHeader>
        <PartnersGrid>
          {partners.map((partner, index) => (
            <PartnerLogo 
              key={index} 
              src={partner.logo} 
              alt={partner.name} 
              index={index}
            />
          ))}
        </PartnersGrid>
      </ContentWrapper>
    </PartnersSection>
  );
};

export default OurPartners;