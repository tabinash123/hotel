import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';

const TestimonialSection = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 0.5rem;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

const ReviewMeta = styled.p`
  color: #666;
  font-size: 0.8rem;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ReviewText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const MoreLink = styled.a`
  color: #1a73e8;
  text-decoration: none;
  font-weight: bold;
`;

const testimonials = [
  {
    id: 1,
    name: "Barnita Amatya",
    reviews: 4,
    photos: 2,
    rating: 5,
    text: "Excellent hospitality, clean environment, and delicious food options. Spent a week here and got fully recharged. Clean, affordable, and easy in and out service. Highly recommended."
  },
  {
    id: 2,
    name: "deepika kenkere",
    reviews: 7,
    photos: 5,
    rating: 4,
    text: "A homely touch to our stay at the resort. Sadikshya accompanied us personally to the elephant breeding camp. Our requests for beverages at odd hours were immediately attended to.The place is beautiful, in the midst of nature. All in all a great experience!!"
  },
  {
    id: 3,
    name: "Ankit Adhikari",
    reviews: 3,
    photos: 1,
    rating: 5,
    text: "Very quite place with friendly staffs making it feel like home. The sound of birds singing early in the morning is a great way to start the day and they provide all the details about adventures available in Sauraha area."
  },
  {
    id: 4,
    name: "Bharat",
    reviews: 10,
    photos: 8,
    rating: 4,
    text: "Hotel is worth visiting enjoyed our stay Cooperative  staff enjoyed fresh food as per our choice"
  },
  {
    id: 5,
    name: "Milan Aryal",
    reviews: 2,
    photos: 3,
    rating: 5,
    text: "Boked Jungle Safari through this hotel and got to see so many wild animals like tiger, bear, croc, pythonetc .Amazing experience ",
  }
];

const TestimonialComponent = () => {
  return (
    <TestimonialSection>
      <SectionTitle>What Our Guests Say</SectionTitle>
      <TestimonialGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <UserInfo>
              <Avatar />
              <div>
                <UserName>{testimonial.name}</UserName>
                <ReviewMeta>{testimonial.reviews} reviews · {testimonial.photos} photos</ReviewMeta>
              </div>
            </UserInfo>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < testimonial.rating ? "#fbbc04" : "none"} color="#fbbc04" />
              ))}
            </Rating>
            <ReviewText>
              {testimonial.text.slice(0, 150)}
              {testimonial.text.length > 150 && '... '}
              {/* <MoreLink href="#">More</MoreLink> */}
            </ReviewText>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialSection>
  );
};

export default TestimonialComponent;