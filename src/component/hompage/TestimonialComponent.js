import React from 'react';
import styled from 'styled-components';
import { Star, User } from 'lucide-react';

const ReviewSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #f0f4f0;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ReviewCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #B8860B;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const ReviewerInfo = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h3`
  font-size: 1.1rem;
  color: #2c3e50;
  margin: 0;
`;

const ReviewDate = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  color: #f39c12;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
`;

const ClientReviewComponent = () => {
  const reviews = [
    {
      name: "John D.",
      date: "May 2024",
      rating: 5,
      text: "An incredible eco-friendly resort! The staff was amazing, and the wildlife experiences were unforgettable. Highly recommend for nature lovers."
    },
    {
      name: "Sarah M.",
      date: "April 2024",
      rating: 4,
      text: "Beautiful location and great service. The rooms were comfortable and the food was delicious. Wish we could have stayed longer!"
    },
    {
      name: "Raj P.",
      date: "June 2024",
      rating: 5,
      text: "Perfect blend of adventure and relaxation. The guided tours were informative and exciting. Can't wait to come back!"
    }
  ];

  return (
    <ReviewSection>
      <Title>What Our Guests Say</Title>
      <ReviewGrid>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewHeader>
              <Avatar>
                <User size={24} color="white" />
              </Avatar>
              <ReviewerInfo>
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewerInfo>
            </ReviewHeader>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={i < review.rating ? "currentColor" : "none"} 
                />
              ))}
            </Rating>
            <ReviewText>{review.text}</ReviewText>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </ReviewSection>
  );
};

export default ClientReviewComponent;