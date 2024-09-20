import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/resort/hotel1.jpg';
import agoda from '../../assets/agoda.png';
import trip from '../../assets/trip.png';
import expe from '../../assets/expe.png';
import booking from '../../assets/booking.png';

const Section = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Playfair Display', serif;
  background-color: #f8f5f0;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding-right: 60px;

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const WelcomeText = styled.h4`
  color: #e67e22;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 52px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 44px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  color: #34495e;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Quote = styled.blockquote`
  border-left: 4px solid #27ae60;
  padding-left: 25px;
  margin-bottom: 30px;
`;

const QuoteText = styled.p`
  color: #2c3e50;
  font-size: 20px;
  font-style: italic;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Author = styled.p`
  color: #2c3e50;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Role = styled.span`
  color: #27ae60;
  font-weight: normal;
`;

const ImageArea = styled.div`
  flex: 0 0 500px;
  height: 600px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex: 0 0 400px;
    height: 480px;
  }

  @media (max-width: 768px) {
    flex: 0 0 300px;
    height: 360px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const BookingPlatforms = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const PlatformText = styled.p`
  font-size: 18px;
  color: #34495e;
  margin-bottom: 15px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PlatformLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const PlatformLogo = styled.img`
  height: 50px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const IntroductionSection = () => {
  return (
    <Section>
      <ContentArea>
        <WelcomeText>Experience the Wild Heart of Nepal</WelcomeText>
        <Title>Welcome to Eco Adventure Resort</Title>
        <Description>
          Nestled on the edge of Chitwan National Park, our resort invites you to immerse yourself in the untamed beauty of Nepal's wilderness. Here, the spirit of adventure meets luxurious comfort, offering a unique blend of thrilling safari experiences and serene relaxation.
        </Description>
        <Quote>
          <QuoteText>
            "Our mission is to connect our guests with the raw beauty of Chitwan, creating unforgettable memories while preserving the delicate balance of this incredible ecosystem."
          </QuoteText>
          <Author>
            Mr.Rishi Tiwari<Role> (Eco Adventure Resort Manager)</Role>
          </Author>
        </Quote>
        <BookingPlatforms>
          <PlatformText>Book your stay through our partners:</PlatformText>
          <PlatformLogos>
            <PlatformLogo src={agoda} alt="Agoda" />
            <PlatformLogo src={trip} alt="TripAdvisor" />
            <PlatformLogo src={expe} alt="Expedia" />
            <PlatformLogo src={booking} alt="Booking.com" />
          </PlatformLogos>
        </BookingPlatforms>
      </ContentArea>
      <ImageArea>
        <Image src={img1} alt="Chitwan National Park view" />
      </ImageArea>
    </Section>
  );
};

export default IntroductionSection;