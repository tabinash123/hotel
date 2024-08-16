import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, ChevronLeft, ChevronRight, ThumbsUp, MessageSquare } from 'lucide-react';

import reviewer1 from '../../assets/wildlife/11.jpg';
import reviewer2 from '../../assets/wildlife/11.jpg';
import reviewer3 from '../../assets/wildlife/11.jpg';
import reviewer4 from '../../assets/wildlife/11.jpg';
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ReviewsContainer = styled.div`
  position: relative;
  padding: 20px 0;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ReviewCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  // transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 0.5s ease-out;

  // &:hover {
  //   transform: translateY(-10px);
  //   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  // }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f3f5;
`;

const ReviewerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const ReviewerInfo = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h3`
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 5px;
`;

const ReviewDate = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const ReviewBody = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const StarIcon = styled(Star)`
  color: ${props => props.filled ? '#ffa500' : '#ffa500'};
  margin-right: 2px;
`;

const ReviewMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ecf0f1;
  padding-top: 15px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  color: #7f8c8d;
  font-size: 0.9rem;

  svg {
    margin-right: 5px;
    color: #e74c3c;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);

  &:hover {
    background-color: #c0392b;
    box-shadow: 0 7px 20px rgba(231, 76, 60, 0.5);
  }

  ${props => props.direction === 'left' ? 'left: -20px;' : 'right: -20px;'}
`;

const ClientReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  const reviews = [
    {
      name: "Emily Thompson",
      image: reviewer1,
      date: "August 15, 2023",
      text: "Our stay at Chitwan Resort was absolutely magical! The jungle safari was a highlight - we saw rhinos, deer, and even caught a glimpse of a tiger. The staff was incredibly attentive and made sure every part of our stay was perfect.",
      rating: 5,
      likes: 42,
      comments: 7
    },
    {
      name: "Michael Chen",
      image: reviewer2,
      date: "July 22, 2023",
      text: "The cultural tour was an eye-opening experience. We learned so much about the Tharu people and their traditions. The accommodation was comfortable and the food was delicious. Highly recommend for anyone wanting to experience Nepali culture.",
      rating: 4,
      likes: 38,
      comments: 5
    },
    {
      name: "Sophie Dubois",
      image: reviewer3,
      date: "September 5, 2023",
      text: "The elephant bathing experience was unforgettable! It was amazing to interact with these gentle giants. The resort's commitment to ethical animal treatment was evident. The guides were knowledgeable and passionate about conservation.",
      rating: 5,
      likes: 56,
      comments: 9
    },
    {
      name: "John Smith",
      image: reviewer4,
      date: "August 30, 2023",
      text: "Bishajari Tal was a birdwatcher's paradise! We saw so many species in just one morning. The canoeing was peaceful and the scenery was breathtaking. The resort's location is perfect for nature lovers.",
      rating: 4,
      likes: 31,
      comments: 3
    }
  ];

  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pageCount - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : 0));
  };

  const displayedReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <Section>
      <Title>What Our Guests Say</Title>
      <Subtitle>Discover the authentic experiences of travelers who have explored Chitwan with us.</Subtitle>
      <ReviewsContainer>
        <ReviewsGrid>
          {displayedReviews.map((review, index) => (
            <ReviewCard key={index}>
              <ReviewHeader>
                <ReviewerImage src={review.image} alt={review.name} />
                <ReviewerInfo>
                  <ReviewerName>{review.name}</ReviewerName>
                </ReviewerInfo>
              </ReviewHeader>
              <ReviewBody>
                {/* <Rating>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={20} filled={star <= review.rating} />
                  ))}
                </Rating> */}
                <ReviewText>{review.text}</ReviewText>
                {/* <ReviewMeta>
                  <MetaItem>
                    <ThumbsUp size={16} />
                    {review.likes} Likes
                  </MetaItem>
                  <MetaItem>
                    <MessageSquare size={16} />
                    {review.comments} Comments
                  </MetaItem>
                </ReviewMeta> */}
              </ReviewBody>
            </ReviewCard>
          ))}
        </ReviewsGrid>
        {/* {pageCount > 1 && (
          <>
            <NavigationButton direction="left" onClick={handlePrevious}>
              <ChevronLeft size={24} />
            </NavigationButton>
            <NavigationButton direction="right" onClick={handleNext}>
              <ChevronRight size={24} />
            </NavigationButton>
          </>
        )} */}
      </ReviewsContainer>
    </Section>
  );
};

export default ClientReviewsSection;