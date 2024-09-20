import React, { useState } from 'react';
import styled from 'styled-components';
import { Minus, Plus } from 'lucide-react';
import img1 from '../../assets/resort/garden1.jpg'

const FAQSection = styled.section`
  padding: 50px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #f9f9f9;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: #A17A0B;
  margin-bottom: 10px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  color: #000;
  margin-bottom: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Question = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 15px 0;
    font-size: 1rem;
  }
`;

const Answer = styled.div`
  padding: 0 0 12px 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 0 0 15px 0;
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${props => props.isOpen ? '#A17A0B' : '#f0f0f0'};
  border-radius: 4px;
  color: ${props => props.isOpen ? 'white' : '#000'};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;

const FAQList = [
  {
    question: "Does Eco Adventure Resort have bars on the premises?",
    answer: "Experience your holiday the finest way with a beverage in your hand at Eco Adventure Resort's bar accessible right in front of your doorstep for when you need a sip or two."
  },
  {
    question: "Does Eco Adventure Resort offer shuttle service for getting around?",
    answer: "For your convenience when traveling around the city, Eco Adventure Resort offers shuttle service right where you need it making it simple for you to get to places quickly."
  },
  {
    question: "What sort of non-water sports and outdoor activities are accessible at Eco Adventure Resort?",
    answer: "Eco Adventure Resort offers non-water sport and outdoor activities such as bicycle rental, and horse riding for you to delight in while staying here."
  },
  {
    question: "Does Eco Adventure Resort offer laundry services?",
    answer: "Yes! Eco Adventure Resort offers laundry service at your convenience for whenever you need your favorite outfits clean and fresh all throughout your holiday. Please contact the property for more information."
  },
  {
    question: "What is the typical travel time to the nearest airport from Eco Adventure Resort?",
    answer: "The average travel time to get from Eco Adventure Resort to the airport is 45 minutes, but please keep in mind that the travel time may differ based on traffic, weather conditions, and time of day."
  }
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <LeftColumn>
        <Title>Have Any Questions?</Title>
        <Subtitle>Frequently Asked Questions</Subtitle>
        {FAQList.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              {faq.question}
              <IconWrapper isOpen={openIndex === index}>
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </IconWrapper>
            </Question>
            {openIndex === index && (
              <Answer>{faq.answer}</Answer>
            )}
          </FAQItem>
        ))}
      </LeftColumn>
      <RightColumn>
        <Image src={img1} alt="Sauraha Hotel View" />
      </RightColumn>
    </FAQSection>
  );
};

export default FAQComponent;