import React, { useState } from 'react';
import styled from 'styled-components';
import { Minus, Plus } from 'lucide-react';
import img1 from '../../assets/resort/hotel2.jpg'

const FAQSection = styled.section`
  // max-width: 1200px;
  // margin: 30px auto;
  padding:50px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #f4efe1;

  @media (min-width: 768px) {
    margin: 40px auto;
    flex-direction: row;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    margin: 50px auto;
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
  font-size: 0.9rem;
  color: #ff4500;
  margin-bottom: 10px;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  color: #0c2e1c;
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
  color: #0c2e1c;
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
  background-color: ${props => props.isOpen ? '#ff4500' : '#f0f0f0'};
  border-radius: 4px;
  color: ${props => props.isOpen ? 'white' : '#0c2e1c'};

  @media (min-width: 768px) {

    width: 24px;
    height: 24px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: none;

    max-height: 400px;
  }

  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;

const FAQList = [
  {
    question: "What activities are available near the hotel?",
    answer: "Our hotel is located in Sauraha, gateway to Chitwan National Park. We offer jungle safaris, elephant rides, canoe trips, and bird watching tours. Our concierge can help arrange these activities for you."
  },
  {
    question: "Do you provide airport transfers?",
    answer: "Yes, we offer airport transfers from both Bharatpur Airport (25 km away) and Kathmandu International Airport (165 km away). Please contact us in advance to arrange your transfer."
  },
  {
    question: "What amenities are available in the rooms?",
    answer: "Our rooms come equipped with air conditioning, free Wi-Fi, flat-screen TVs, mini-fridges, and en-suite bathrooms. We also provide complimentary toiletries and bottled water."
  },
  {
    question: "Is there a restaurant on-site?",
    answer: "Yes, we have an on-site restaurant serving a mix of Nepali, Indian, and Continental cuisine. We also offer a complimentary breakfast buffet for all guests."
  },
  {
    question: "What is your check-in and check-out policy?",
    answer: "Check-in time is from 2:00 PM, and check-out time is by 12:00 PM. Early check-in or late check-out may be possible based on availability. Please contact our front desk for arrangements."
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