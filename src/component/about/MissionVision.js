import React from 'react';
import styled from 'styled-components';
import { Compass, Heart, Leaf, Users, Eye, Star, Globe, Zap } from 'lucide-react';

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    margin: 60px auto;
  }

  @media (min-width: 1024px) {
    margin: 80px auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #000;
  text-align: center;
  margin-bottom: 30px;
  
  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 50px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (min-width: 1024px) {
    gap: 40px;
  }
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const CardTitle = styled.h3`
  font-size: 22px;
  color: #000;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  background-color: #d2b48c;
  border-radius: 50%;
  padding: 8px;
  display: inline-flex;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    margin-top: 20px;
    gap: 15px;
  }
`;

const ValueItem = styled.li`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ValueIcon = styled.span`
  margin-right: 8px;
  color: #d2b48c;
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 16px;
  color: #666;
  text-align: center;
  margin: 30px 0;
  padding: 0 20px;
  position: relative;
  
  &:before, &:after {
    content: '"';
    font-size: 40px;
    color: #d2b48c;
    position: absolute;
    top: -10px;
  }
  
  &:before {
    left: 0;
  }
  
  &:after {
    content: '"';
    right: 0;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    margin: 40px 0;
    padding: 0 30px;

    &:before, &:after {
      font-size: 50px;
      top: -15px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    margin: 50px 0;
    padding: 0 40px;

    &:before, &:after {
      font-size: 60px;
      top: -20px;
    }
  }
`;

const MissionVisionSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Our Purpose</SectionTitle>
      <ContentWrapper>
        <Card>
          <CardTitle>
            <IconWrapper><Compass size={20} color="#fff" /></IconWrapper>
            Our Mission
          </CardTitle>
          <CardContent>
            At Orbitza, we are dedicated to providing an unparalleled hospitality experience that seamlessly blends Nepali tradition with modern luxury. Our mission is to:
          </CardContent>
          <ValuesList>
            <ValueItem>
              <ValueIcon><Heart size={16} /></ValueIcon>
              Create unforgettable memories
            </ValueItem>
            <ValueItem>
              <ValueIcon><Leaf size={16} /></ValueIcon>
              Promote sustainable tourism
            </ValueItem>
            <ValueItem>
              <ValueIcon><Users size={16} /></ValueIcon>
              Empower local communities
            </ValueItem>
            <ValueItem>
              <ValueIcon><Compass size={16} /></ValueIcon>
              Showcase Nepali culture
            </ValueItem>
          </ValuesList>
        </Card>
        <Card>
          <CardTitle>
            <IconWrapper><Eye size={20} color="#fff" /></IconWrapper>
            Our Vision
          </CardTitle>
          <CardContent>
            We envision Orbitza as a beacon of Nepali hospitality, recognized globally for its:
          </CardContent>
          <ValuesList>
            <ValueItem>
              <ValueIcon><Star size={16} /></ValueIcon>
              Uncompromising service excellence
            </ValueItem>
            <ValueItem>
              <ValueIcon><Globe size={16} /></ValueIcon>
              Cultural authenticity
            </ValueItem>
            <ValueItem>
              <ValueIcon><Zap size={16} /></ValueIcon>
              Innovative guest experiences
            </ValueItem>
            <ValueItem>
              <ValueIcon><Heart size={16} /></ValueIcon>
              Commitment to sustainability
            </ValueItem>
          </ValuesList>
        </Card>
      </ContentWrapper>
      <Quote>
        "Embracing our heritage, we create a sanctuary where luxury meets authenticity, and every guest becomes part of our story."
      </Quote>
    </SectionContainer>
  );
};

export default MissionVisionSection;