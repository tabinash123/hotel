import React from 'react';
import styled from 'styled-components';
import { Binoculars, Trees, Users, Utensils } from 'lucide-react';

const IntroductionContainer = styled.section`
  background-color: #f4efe1;
  padding: 80px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const HotelName = styled.h1`
  font-size: 2rem;
  color: #0c2e1c;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: -0.5px;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 30px;
  font-style: italic;
  font-weight: 300;
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.8;
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 90%;
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: left;
  }
`;

// Other styled components remain unchanged

const SaurahaHotelIntroduction = () => {
  return (
    <IntroductionContainer>
      <HotelName>Eco Adventure Resort</HotelName>
      <Tagline>Experience the Wild Heart of Nepal</Tagline>
      <Description>
        Located in Sauraha, one mile from Tharu Cultural Museum, Eco Adventure Resort provides accommodations with a garden, free private parking, a terrace and a restaurant. This 2-star hotel offers room service and a 24-hour front desk. Guests can use a bar.
        Rooms are complete with a private bathroom equipped with a bidet and free toiletries, while some units at the hotel also have a balcony. All guest rooms will provide guests with a desk and an electric tea pot.
        Breakfast is available every morning, and includes buffet, à la carte and American options.
        The nearest airport is Bharatpur Airport, 10 miles from Eco Adventure Resort.
      </Description>
    </IntroductionContainer>
  );
};

export default SaurahaHotelIntroduction;