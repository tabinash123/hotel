import React from 'react';
import styled from 'styled-components';
import { Quote } from 'lucide-react';

const MessageSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #c59d5f, #e2c275, #c59d5f);
  }

  @media (min-width: 768px) {
    padding: 3rem;
    margin: 5rem auto;
  }

  @media (min-width: 1024px) {
    padding: 4rem;
    margin: 6rem auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const MessageContent = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 2rem;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    width: 70%;
    padding-right: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Message = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #c59d5f;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7;
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const DirectorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const DirectorImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #f0f0f0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

const DirectorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DirectorDetails = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const DirectorName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0;
  font-family: 'Playfair Display', serif;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const DirectorTitle = styled.p`
  font-size: 1rem;
  color: #c59d5f;
  margin: 0.25rem 0 0;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const QuoteIcon = styled(Quote)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #f0f0f0;
  width: 40px;
  height: 40px;
  opacity: 0.5;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

const DirectorMessageComponent = () => {
  return (
    <MessageSection>
      <QuoteIcon />
      <ContentWrapper>
        <MessageContent>
          <Title>A Personal Welcome</Title>
          <Message>
            At our hotel, we believe in creating more than just a place to stay – we craft experiences that linger in your memories long after you've returned home. Our dedicated team works tirelessly to ensure every aspect of your visit exceeds expectations, from our meticulously designed rooms to our world-class amenities and personalized service. We look forward to welcoming you and making your stay truly exceptional.
          </Message>
        </MessageContent>
        <DirectorInfo>
          <DirectorImageWrapper>
            <DirectorImage src="/api/placeholder/250/250" alt="Emily Thompson, Hotel Director" />
          </DirectorImageWrapper>
          <DirectorDetails>
            <DirectorName>Mr.Rishi Tiwari</DirectorName>
            <DirectorTitle>Managing Hotel Director</DirectorTitle>
          </DirectorDetails>
        </DirectorInfo>
      </ContentWrapper>
    </MessageSection>
  );
};

export default DirectorMessageComponent;