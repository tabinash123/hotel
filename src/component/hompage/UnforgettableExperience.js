import React from 'react';
import styled from 'styled-components';
import { Calendar, Clock, Users, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images

import bbq from '../../assets/activities/bbq.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import elephantBreeding from '../../assets/activities/elephantBreeding.jpg';
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #f8f8f8;

  @media (max-width: 1024px) {
    padding: 50px 15px;
  }

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #C1A267;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.h2`
    font-size: 2.5rem;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
`;

const PackageImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PackageCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 220px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const PackageInfo = styled.div`
  padding: 25px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const PackagePrice = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 15px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 18px;
  color: #2C3E50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 8px 12px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

const PackageName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #2C3E50;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;



const PackageFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ecf0f1;
  padding-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding-top: 15px;
  }

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #7f8c8d;
  width: 50%;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ViewMoreLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 40px;
  padding: 15px 30px;
  background-color: #C1A267;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 200px;

  &:hover {
    background-color: #A3895A;
  }

  @media (max-width: 1024px) {
    margin-top: 35px;
    padding: 12px 25px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const TourPackagesSection = () => {
  const tourPackages = [
    {
    name: 'BBQ Night',
    image: bbq,
    price: '$70',
    description: 'Enjoy a cozy BBQ night under the stars with delicious grilled food and great company.',
    features: ['3 Hours', 'Evening', 'Max 15', 'Easy'],
  },
  {
    name: 'Bishajari Lake Tour',
    image: bishajariLake,
    price: '$45',
    description: 'Explore the serene Bishajari Lake, a Ramsar site, and witness its rich biodiversity.',
    features: ['5 Hours', 'Morning', 'Max 20', 'Moderate'],
  },
  {
    name: 'Cultural Program',
    image: culturalProgram,
    price: '$30',
    description: 'Immerse yourself in the local culture with a traditional Tharu cultural program.',
    features: ['2 Hours', 'Evening', 'Max 50', 'Easy'],
  },
  {
    name: 'Elephant Bathing Experience',
    image: elephantBath,
    price: '$25',
    description: 'Participate in the joyful tradition of bathing elephants in the Rapti River, creating unforgettable memories.',
    features: ['1 Hour', 'Morning', 'Max 6', 'Easy'],
  },
  {
    name: 'Elephant Breeding Center Tour',
    image: elephantBreeding,
    price: '$20',
    description: 'Visit the Elephant Breeding Center to learn about the conservation efforts and see baby elephants.',
    features: ['2 Hours', 'Morning', 'Max 10', 'Easy'],
  },
  ];

  return (
    <Section>
      <Subtitle>EXPLORE SAURAHA</Subtitle>
      <Title>Discover the Natural Wonders of Chitwan with Our Curated Tour Packages</Title>
      <PackageGrid>
        {tourPackages.map((pkg, index) => (
          <PackageCard key={index}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <PackageImage src={pkg.image} alt={pkg.name} />
              <PackagePrice>{pkg.price}<sup>/person</sup></PackagePrice>
            </div>
            <PackageInfo>
              <PackageName>{pkg.name}</PackageName>
              <PackageFeatures>
                <Feature>
                  <Clock size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {pkg.features[0]}
                </Feature>
                <Feature>
                  <Calendar size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {pkg.features[1]}
                </Feature>
                <Feature>
                  <Users size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {pkg.features[2]}
                </Feature>
                <Feature>
                  <Map size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {pkg.features[3]}
                </Feature>
              </PackageFeatures>
            </PackageInfo>
          </PackageCard>
        ))}
      </PackageGrid>
      <ViewMoreLink to="/tour">View More Packages</ViewMoreLink>
    </Section>
  );
};

export default TourPackagesSection;