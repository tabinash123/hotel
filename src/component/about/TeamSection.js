import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Facebook, Twitter, Instagram } from 'lucide-react';

// Import images
import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
  background-color: #faf7f2;
  font-family: 'Poppins', Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }

  @media (min-width: 1024px) {
    padding: 60px 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const MainTitle = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 25px;
    padding: 15px 0;
  }

  @media (min-width: 1024px) {
    gap: 30px;
    padding: 20px 0;
  }
`;

const TeamMember = styled.div`
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;


`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.3s ease;

  ${TeamMember}:hover & {
    transform: scale(1.1);
  }
`;

const MemberInfo = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const MemberName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const MemberRole = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 15px;
  }
`;

const SocialIcon = styled.a`
  color: #999;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #333;
    transform: translateY(-3px);
  }
`;

const TeamSection = () => {
  const teamMembers = [
    { name: 'Rishi Tiwari', role: 'Owner & CEO', image: img1 },
    { name: 'Sophia Jenkins', role: 'Founder & CEO', image: img2 },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Behind the Scene</SectionTitle>
      <MainTitle>Our Team</MainTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <ImageContainer>
              <MemberImage src={member.image} alt={member.name} />
            </ImageContainer>
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </SectionContainer>
  );
};

export default TeamSection;