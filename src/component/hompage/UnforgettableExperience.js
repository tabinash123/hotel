import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bbq from '../../assets/activities/bbq.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: #FFFFFF;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #B8860B;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PackageCard = styled.div`
  background: #FFF5E6;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PackageImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const PackageInfo = styled.div`
  padding: 20px;
`;

const BestSeller = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  color: #333;
  padding: 5px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
`;

const PackageName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

const PackageDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const BookNowButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #A17A0B;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #B8860B;
  }
`;

const SeeMoreButton = styled(Link)`
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

const TourPackagesSection = () => {
  const tourPackages = [
    {
      name: 'BBQ Night',
      image: bbq,
      duration: '3 Hours',
      groupSize: 'Max 15',
      price: '$70/person',
      bestSeller: true,
    },
    {
      name: 'Bishajari Lake Tour',
      image: bishajariLake,
      duration: '5 Hours',
      groupSize: 'Max 20',
      price: '$45/person',
      bestSeller: false,
    },
    {
      name: 'Cultural Program',
      image: culturalProgram,
      duration: '2 Hours',
      groupSize: 'Max 50',
      price: '$30/person',
      bestSeller: true,
    },
  ];

  return (
    <Section>
      <Subtitle>EXPLORE SAURAHA</Subtitle>
      <Title>Tour Packages</Title>
      <PackageGrid>
        {tourPackages.map((pkg, index) => (
          <PackageCard key={index}>
            <div style={{ position: 'relative' }}>
              <PackageImage src={pkg.image} alt={pkg.name} />
              {pkg.bestSeller && <BestSeller>Best Seller</BestSeller>}
            </div>
            <PackageInfo>
              <PackageName>{pkg.name}</PackageName>
              <PackageDetails>{pkg.duration} • {pkg.groupSize} • {pkg.price}</PackageDetails>
              <BookNowButton to="/book-tour">BOOK NOW</BookNowButton>
            </PackageInfo>
          </PackageCard>
        ))}
      </PackageGrid>
      <SeeMoreButton to="/tour">SEE MORE TOURS-Packages</SeeMoreButton>
    </Section>
  );
};

export default TourPackagesSection;