import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, Leaf } from 'lucide-react';
import img1 from '../../assets/resort/family2.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background-color: #f8f5f0;
  padding: 60px 0;
  font-family: 'Playfair Display', serif;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const LeafDecoration = styled(Leaf)`
  position: absolute;
  color: rgba(74, 124, 89, 0.1);
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h3`
  color: #e74c3c;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 12px;
  animation: ${fadeIn} 1s ease-out;
`;

const MainTitle = styled.h2`
  color: #2c3e50;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease-out 0.2s backwards;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  color: #34495e;
  font-size: 16px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.4s backwards;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 500px;
  height: 400px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: -15px;
    bottom: -15px;
    border: 2px solid #e74c3c;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    flex: 0 0 400px;
    height: 320px;
  }

  @media (max-width: 768px) {
    flex: 0 0 300px;
    height: 240px;
    &::after {
      top: 10px;
      left: 10px;
      right: -10px;
      bottom: -10px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const FeaturesWrapper = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const FeatureText = styled.p`
  color: #2c3e50;
  font-size: 18px;
  font-style: italic;
  margin-bottom: 25px;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  color: #34495e;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledCheckCircle = styled(CheckCircle)`
  color: #27ae60;
  margin-right: 10px;
  flex-shrink: 0;
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <LeafDecoration size={250} style={{ top: -40, right: -40, transform: 'rotate(45deg)' }} />
      <LeafDecoration size={180} style={{ bottom: -25, left: -25, transform: 'rotate(-45deg)' }} />
      <Container>
        <SectionTitle>OUR FEATURES</SectionTitle>
        <MainTitle>Why Choose Chitwan Retreat</MainTitle>
        <Description>
          Immerse yourself in the untamed beauty of Chitwan National Park. Our retreat offers a perfect blend of 
          adventure, luxury, and conservation, creating unforgettable experiences that connect you with Nepal's 
          wild heart.
        </Description>
        <ContentWrapper>
          <ImageWrapper>
            <Image src={img1} alt="Chitwan Resort Experience" />
          </ImageWrapper>
          <FeaturesWrapper>
            <FeatureText>
              At Chitwan Retreat, we cater to the diverse expectations of our esteemed guests. 
              Our joy knows no bounds when you choose to return for another extraordinary adventure!
            </FeatureText>
            <FeatureList>
              <FeatureItem><StyledCheckCircle size={20} /> Guided Jungle Safaris</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Sunrise Meditation Sessions</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Expert-led Nature Walks</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Exotic Bird Watching Tours</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Scenic Canoe Adventures</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Ethical Elephant Encounters</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Vibrant Cultural Performances</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Eco-Luxury Accommodations</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Rejuvenating Wilderness Spa</FeatureItem>
              <FeatureItem><StyledCheckCircle size={20} /> Gourmet Riverside Dining</FeatureItem>
            </FeatureList>
          </FeaturesWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;