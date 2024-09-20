import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TestimonialSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 10px 1rem;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    padding: 10px 2rem;
  }

  @media (min-width: 1024px) {
    padding: 20px 0px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 5rem;
  font-family: 'Playfair Display', serif;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #B8860B;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const TestimonialCarousel = styled.div`
  position: relative;
  overflow: hidden;
  
`;

const TestimonialGrid = styled.div`
  display: flex;
    margin-bottom: 5rem;

  transition: transform 0.3s ease;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  // box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  flex: 0 0 100%;
  margin-right: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  }

  @media (min-width: 768px) {
    flex: 0 0 calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    flex: 0 0 calc(33.333% - 20px);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 1rem;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const ReviewMeta = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const ReviewText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const MoreLink = styled.button`
  background: none;
  border: none;
  color: #B8860B;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #9A7B0A;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <TestimonialSection>
      <SectionTitle>What Our Guests Say</SectionTitle>
      <TestimonialCarousel>
        <TestimonialGrid style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <UserInfo>
                <Avatar src={`https://i.pravatar.cc/150?u=${testimonial.id}`} />
                <div>
                  <UserName>{testimonial.name}</UserName>
                  <ReviewMeta>{testimonial.reviews} reviews · {testimonial.photos} photos</ReviewMeta>
                </div>
              </UserInfo>
              <Rating>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < testimonial.rating ? "#fbbc04" : "none"} color="#fbbc04" />
                ))}
              </Rating>
              <ReviewText>
                {expandedId === testimonial.id ? testimonial.text : 
                  testimonial.text.slice(0, 150) + (testimonial.text.length > 150 ? '... ' : '')}
                {testimonial.text.length > 150 && (
                  <MoreLink onClick={() => toggleExpand(testimonial.id)}>
                    {expandedId === testimonial.id ? 'Show less' : 'Read more'}
                  </MoreLink>
                )}
              </ReviewText>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
        <CarouselButton direction="left" onClick={handlePrev}>
          <ChevronLeft size={24} />
        </CarouselButton>
        <CarouselButton direction="right" onClick={handleNext}>
          <ChevronRight size={24} />
        </CarouselButton>
      </TestimonialCarousel>
    </TestimonialSection>
  );
};

export default TestimonialComponent;