import React from 'react';
import styled from 'styled-components';
import { Check, ChevronRight } from 'lucide-react';

import img1 from '../../assets/resort/garden3.jpg';
const SectionContainer = styled.section`
  background-color: #f4efe1;
  padding: 60px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin:0 auto;
`;

const ContentContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  color: #ff6b35;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const MainTitle = styled.h3`
  font-size: 2.5rem;
  color: #1a3c34;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #1a3c34;
`;

const CheckIcon = styled(Check)`
  color: #ff6b35;
  margin-right: 10px;
`;

const ReadMoreButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55a2b;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  position: relative;
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
  padding: 15px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const WhyChooseUs = () => {
  return (
    <SectionContainer>
      
      <ImageContainer>
        <MainImage src={img1} alt="Chitwan Jungle Lodge experience" />
        <ExperienceBadge>
          20+ Years<br />
          of jungle hospitality
        </ExperienceBadge>
      </ImageContainer>
      <ContentContainer>
        <SectionTitle>Why Choose Us</SectionTitle>
        <MainTitle>Why Guests Love Chitwan Jungle Lodge?</MainTitle>
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
    </SectionContainer>
  );
};

export default WhyChooseUs;