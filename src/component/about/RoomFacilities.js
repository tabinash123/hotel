import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Tv, Briefcase, Wifi, Lock, Building2 } from 'lucide-react';
import img1 from "../../assets/rooms/delux.jpg";
import img2 from "../../assets/rooms/family.jpg";
import img3 from "../../assets/rooms/single.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;

  @media (min-width: 768px) {
    flex: 3;
    padding: 40px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  height: 200px;
  position: relative;
  overflow: hidden;
    margin: auto 0px;


  @media (min-width: 576px) {
    height: 250px;
  }

  @media (min-width: 768px) {
    flex: 2;
    height: 300px;
  }

  @media (min-width: 992px) {
    height: 400px;
  }
`;

const Header = styled.h6`
  font-size: 12px;
  color: #333;
  margin-bottom: 10px;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 42px;
    margin-bottom: 30px;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    gap: 30px;
  }
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  margin-right: 15px;
  color: #A17A0B;
`;

const FacilityContent = styled.div``;

const FacilityTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const FacilityDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-rows: 300px 300px;
    margin-top: 30px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    grid-template-rows: 250px 250px;
    height: 500px;
    margin-top: 0;
    order: -1; // Move back to the left on desktop
  }
`;

const LargeImage = styled.img`
  grid-row: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RoomFacilities = () => {
  const facilities = [
    { icon: Tv, title: 'Cable TV' },
    { icon: Briefcase, title: 'Work Desk' },
    { icon: Wifi, title: 'Free Wifi' },
    { icon: Lock, title: 'Safebox' },
    { icon: Building2, title: 'Balcony' },
    { icon: Building2, title: 'City View' },
  ];

  return (
    <Container>
      <LeftSection>
        <Header>ROOMS & SUITES</Header>
        <Title>Room Facilities</Title>
        <FacilitiesGrid>
          {facilities.map((facility, index) => (
            <FacilityItem key={index}>
              <IconWrapper>
                <facility.icon size={24} />
              </IconWrapper>
              <FacilityContent>
                <FacilityTitle>{facility.title}</FacilityTitle>
                <FacilityDescription>
                  Sunt dolor aliquip consectetur laborum incididunt tempor.
                </FacilityDescription>
              </FacilityContent>
            </FacilityItem>
          ))}
        </FacilitiesGrid>
      </LeftSection>
      <RightSection>
        <ImageContainer>
        <LargeImage src={img1} alt="Hotel room 1" />
        <SmallImage src={img2} alt="Hotel room 2" />
        <SmallImage src={img3} alt="Hotel room 3" />
      </ImageContainer>
      </RightSection>
    </Container>
  );
};

export default RoomFacilities;