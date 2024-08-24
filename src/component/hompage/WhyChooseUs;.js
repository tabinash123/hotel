import React from 'react';
import styled from 'styled-components';
import { Check, ChevronRight } from 'lucide-react';
import img1 from '../../assets/resort/garden3.jpg';

const SectionContainer = styled.section`
  background-color: #f4efe1;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
    font-family: Arial, sans-serif;



  @media (min-width: 768px) {
    padding: 50px 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    padding: 60px 40px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    flex: 1;
    min-width: 300px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 0.9rem;
  color: #ff6b35;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const MainTitle = styled.h3`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #000000;
  margin-bottom: 30px;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #1a3c34;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const CheckIcon = styled(Check)`
  color: #ff6b35;
  margin-right: 10px;
`;

const ReadMoreButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 30px;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #e55a2b;
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  margin-top: 30px;

  @media (min-width: 768px) {
    flex: 1;
    min-width: 300px;
    margin-top: 0;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background-color: #1a3c34;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    padding: 15px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const WhyChooseUs = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SectionTitle>Why Choose Us</SectionTitle>
        <MainTitle>Why Guests Love Eco Adventure Resort?</MainTitle>
        <Description>
          Experience the perfect blend of adventure, comfort, and authentic Nepalese hospitality.
          Our prime location and exceptional services make us the ideal choice for your Chitwan getaway.
        </Description>
        <FeatureList>
          <FeatureItem><CheckIcon size={20} /> Prime jungle location</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Expert wildlife guides</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Authentic cultural experiences</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Eco-friendly practices</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Comfortable accommodations</FeatureItem>
          <FeatureItem><CheckIcon size={20} /> Delicious local cuisine</FeatureItem>
        </FeatureList>
       
      </ContentContainer>
      <ImageContainer>
        <MainImage src={img1} alt="Chitwan Jungle Lodge experience" />
        <ExperienceBadge>
          20+ Years<br />
          of jungle hospitality
        </ExperienceBadge>
      </ImageContainer>
    </SectionContainer>
  );
};

export default WhyChooseUs;