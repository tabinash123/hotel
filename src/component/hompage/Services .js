import React from 'react';
import styled from 'styled-components';
import { 
  Wifi, 
  Utensils, 
  Car, 
  Dumbbell, 
  Sun, 
  GlassWater, 
  Shirt
} from 'lucide-react';

const ServicesSection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 40px auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const ServiceName = styled.h3`
  font-size: 18px;
  color: #2C3E50;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  line-height: 1.4;
`;

const HotelServices = () => {
  const services = [
    { 
      icon: <Wifi size={30} />, 
      name: 'Free Wi-Fi', 
      description: 'Stay connected with high-speed internet throughout the property' 
    },
    { 
      icon: <Utensils size={30} />, 
      name: 'Fine Dining', 
      description: 'Enjoy exquisite cuisine at our on-site restaurants' 
    },
    { 
      icon: <Car size={30} />, 
      name: 'Valet Parking', 
      description: 'Convenient and secure parking service for your vehicle' 
    },
    { 
      icon: <Dumbbell size={30} />, 
      name: 'Fitness Center', 
      description: 'State-of-the-art gym equipment for your workout needs' 
    },
    { 
      name: 'Swimming Pool', 
      description: 'Relax and unwind in our luxurious swimming pool' 
    },
    { 
      name: 'Spa & Wellness', 
      description: 'Indulge in rejuvenating treatments at our spa' 
    },
    { 
      icon: <GlassWater size={30} />, 
      name: 'Bar & Lounge', 
      description: 'Enjoy a wide selection of drinks in a cozy atmosphere' 
    },
    { 
      icon: <Shirt size={30} />, 
      name: 'Laundry Service', 
      description: 'Professional cleaning and pressing services available' 
    }
  ];

  return (
    <ServicesSection>
      <SectionTitle>Our Services</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <IconWrapper>
              {service.icon}
            </IconWrapper>
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default HotelServices;