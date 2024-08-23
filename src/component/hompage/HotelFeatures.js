import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 20px auto;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

const HotelFeatures = () => {
  const features = [
    {
      icon: (
        <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
      ),
      title: "Free Shipping",
      description: "Free ship"
    },
    {
      icon: (
        <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
      ),
      title: "Payment Secure",
      description: "Got 100% Payment Safe"
    },
    {
      icon: (
        <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3L15 9M15 9V3M15 9H21M3 21L9 15M9 15H3M9 15V21" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
      ),
      title: "Support 24/7",
      description: "quality 24/7 Support"
    },
    {
      icon: (
        <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 9V7C17 5.89543 16.1046 5 15 5H5C3.89543 5 3 5.89543 3 7V13C3 14.1046 3.89543 15 5 15H7M9 19H19C20.1046 19 21 18.1046 21 17V11C21 9.89543 20.1046 9 19 9H9C7.89543 9 7 9.89543 7 11V17C7 18.1046 7.89543 19 9 19ZM13 13V15M13 15V17M13 15H11M13 15H15" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
      ),
      title: "100% Money Back",
      description: "Cutomers Money Back"
    },
    {
      icon: (
        <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 9V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V9M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9M14 9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H10" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
      ),
      title: "Quality Products",
      description: "We Insure Product Qua"
    },
  ];

  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <IconWrapper>{feature.icon}</IconWrapper>
          <TextWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </TextWrapper>
        </FeatureItem>
      ))}
    </FeaturesContainer>
  );
};

export default HotelFeatures;