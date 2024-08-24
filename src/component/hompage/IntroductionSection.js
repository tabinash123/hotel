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
        Eco Adventure Resort is more than just a place to stay; it's a gateway to the incredible wildlife and natural beauty of Chitwan National Park. Located in the heart of this UNESCO World Heritage Site, the resort offers a unique opportunity to experience Nepal's diverse ecosystem up close.

Wildlife Safaris:
Elephant Back Safaris: Embark on a thrilling adventure through the jungle on the back of a gentle giant.
Jeep Safaris: Explore the park's diverse habitats, from grasslands to forests, in comfortable jeeps.
Bird Watching: Spot a variety of bird species, including the endangered Bengal florican and the great hornbill.
Cultural Experiences:
Tharu Village Visits: Immerse yourself in the rich culture of the Tharu people, learning about their traditions, customs, and way of life.
Cultural Programs: Enjoy traditional dance performances, music, and storytelling.
Other Activities:
Canoeing: Paddle along the Rapti River, enjoying the scenic views and spotting wildlife along the banks.
Jungle Walks: Explore the park on foot, guided by experienced naturalists who will share their knowledge of the flora and fauna.
Nature Photography: Capture stunning photos of the park's wildlife and landscapes.
Eco Adventure Resort is committed to sustainability and responsible tourism. The resort takes steps to minimize its environmental impact and supports local communities. With its focus on wildlife, culture, and adventure, it's the perfect choice for travelers seeking a truly unforgettable experience in Chitwan.









      </Description>
    </IntroductionContainer>
  );
};

export default SaurahaHotelIntroduction;