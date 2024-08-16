import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #B8860B;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #B8860B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent 100%
    );
    background-size: 20px 20px;
    animation: ${shimmer} 3s linear infinite;
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const MountainIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid white;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 8px;
    left: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 15px solid #B8860B;
  }

  @media (min-width: 768px) {
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 30px solid white;

    &::after {
      top: 10px;
      left: -10px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 18px solid #B8860B;
    }
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResortName = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Tagline = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  color: #666;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const EnhancedLogo = () => {
  return (
    <LogoContainer href="/">
    
      <LogoText>
        <ResortName>Echo Adventure</ResortName>
        <Tagline>Luxury Resort</Tagline>
      </LogoText>
    </LogoContainer>
  );
};

export default EnhancedLogo;