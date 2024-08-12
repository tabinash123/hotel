import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Utensils, Wifi, Dumbbell, Sun, Coffee, Car } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ServicesSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  color: #2C3E50;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  // transition: all 0.3s ease;
  // animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  background-color: #C1A267;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: #2C3E50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const services = [
  {
    icon: <Utensils size={24} />,
    title: "Gourmet Dining",
    description: "Indulge in exquisite culinary experiences at our world-class restaurants, featuring both local and international cuisines."
  },
  {
    icon: <Wifi size={24} />,
    title: "High-Speed Wi-Fi",
    description: "Stay connected with complimentary high-speed Wi-Fi available throughout the hotel premises."
  },
  {
    icon: <Dumbbell size={24} />,
    title: "Fitness Center",
    description: "Maintain your fitness routine in our state-of-the-art gym equipped with modern exercise machines and free weights."
  },
  {
    icon: <Sun size={24} />,
    title: "Luxury Spa",
    description: "Rejuvenate your body and mind with our range of spa treatments, featuring traditional and modern therapies."
  },
  {
    icon: <Coffee size={24} />,
    title: "24/7 Room Service",
    description: "Enjoy the convenience of round-the-clock room service, offering a wide selection of meals and refreshments."
  },
  {
    icon: <Car size={24} />,
    title: "Concierge Services",
    description: "Let our expert concierge assist you with travel arrangements, tour bookings, and local recommendations."
  }
];

const HotelServicesComponent = () => (
  <ServicesSection>
    <SectionTitle>Our Services</SectionTitle>
    <SectionSubtitle>
      At Sauraha Serenity, we offer a range of world-class amenities to ensure your stay is nothing short of exceptional.
      From gourmet dining to personalized concierge services, we cater to your every need.
    </SectionSubtitle>
    <ServicesGrid>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <IconWrapper>{service.icon}</IconWrapper>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </ServicesGrid>
  </ServicesSection>
);

export default HotelServicesComponent;