import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imag from '../../assets/hotel/hotel2.jpg';

const TestimonialSection = styled.section`
  background-image: url('${imag}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Content = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 90%;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    width: 80%;
    max-width: 1000px;
    padding: 0;
  }

  .slick-dots li button:before {
    color: #fff;
  }
`;

const Subtitle = styled.h3`
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: normal;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Divider = styled.hr`
  width: 50px;
  border: 2px solid #f39c12;
  margin: 0 0 1rem 0;
`;

const TestimonialText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 1.5rem;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 0.95rem;
    min-height: 120px;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    min-height: 150px;
  }
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;

  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

const ReviewerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarRating = styled.div`
  display: flex;
  color: #B8860B;
  margin-bottom: 0.25rem;
`;

const ReviewerName = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const ReviewerTitle = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis odio ac eros sollicitudin consequat. Proin a tortor tortor. Nullam consequat dictum metus in vulputate.",
    name: "Abdur Rahim",
    title: "Guest Review",
    avatar: "/path-to-avatar-image-1.jpg",
    rating: 5
  },
  {
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    name: "Jane Doe",
    title: "Business Traveler",
    avatar: "/path-to-avatar-image-2.jpg",
    rating: 4
  },
  {
    text: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
    name: "John Smith",
    title: "Family Vacation",
    avatar: "/path-to-avatar-image-3.jpg",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false // This removes the prev and next buttons
  };

  return (
    <TestimonialSection>
      <Content>
        <Subtitle>Testimonials</Subtitle>
        <Title>What Client's Say?</Title>
        <Divider />
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <ReviewerInfo>
                <Avatar src={testimonial.avatar} alt={testimonial.name} />
                <ReviewerDetails>
                  <StarRating>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#B8860B" strokeWidth={0} />
                    ))}
                  </StarRating>
                  <ReviewerName>{testimonial.name}</ReviewerName>
                  <ReviewerTitle>{testimonial.title}</ReviewerTitle>
                </ReviewerDetails>
              </ReviewerInfo>
            </div>
          ))}
        </Slider>
      </Content>
    </TestimonialSection>
  );
};

export default TestimonialCarousel;