import React from 'react';
import styled from 'styled-components';
import imag from  '../../assets/hotel/hotel2.jpg'

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background-image: url('${imag}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 50px;
   &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
`;

const WelcomeText = styled.p`
  font-size: 18px;
  color: #FFA500;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
`;


const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <WelcomeText>Wellcome To Our Hotel</WelcomeText>
        <Title>About Us</Title>
      </Content>
    </HeroSection>
  );
};

export default Hero;