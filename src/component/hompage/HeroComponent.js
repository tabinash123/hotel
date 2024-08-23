import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ChevronLeft, ChevronRight, Calendar, Users } from 'lucide-react';

// Import your images here
import img1 from '../../assets/resort/hotel1.jpg';
import img2 from '../../assets/resort/hotel2.jpg';
import img3 from '../../assets/resort/hotel3.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  width: 100%;
  overflow: hidden;
  margin-top: 0px;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const CarouselSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.8s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const Content = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  color: white;
  z-index: 2;
  max-width: 600px;

  @media (max-width: 1024px) {
    bottom: 70px;
    left: 30px;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    bottom: 50px;
    left: 20px;
    max-width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  animation: ${fadeIn} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #B8860B;
  color: white;
  animation: ${slideUp} 0.8s ease-out 0.4s both;

  &:hover {
    transform: translateY(-2px);
    background-color: #9A7B0A;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.1);
  }

  ${props => props.left ? 'left: 20px;' : 'right: 20px;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 10px;
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const BookingWidget = styled.div`
  position: absolute;
  top: 100px;
  right: 50px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  animation: ${slideUp} 0.8s ease-out;

  @media (max-width: 1024px) {
    top: 70px;
    right: 30px;
    width: 250px;
  }

  @media (max-width: 768px) {
    position: static;
    width: 90%;
    margin: 20px auto;
    animation: none;
  }
`;

const BookingTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 8px 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  svg {
    color: #B8860B;
    margin-right: 10px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const images = [img1, img2, img3];
  const titles = [
    "Welcome to Eco Adventure Resort",
    "Experience Luxury in Nature",
    "Unforgettable Stays in Chitwan"
  ];
  const subtitles = [
    "Your gateway to natural wonders",
    "Comfort meets wilderness",
    "Create lasting memories with us"
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    restartTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    restartTimer();
  };

  const restartTimer = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(true);
  };

  return (
    <HeroSection>
      <CarouselContainer>
        {images.map((img, index) => (
          <CarouselSlide key={index} image={img} active={index === currentSlide}>
            <Overlay />
          </CarouselSlide>
        ))}
        <Content>
          <Title>{titles[currentSlide]}</Title>
          <Subtitle>{subtitles[currentSlide]}</Subtitle>
          <Button>Explore Our Resort</Button>
        </Content>
        <CarouselButton left onClick={prevSlide}>
          <ChevronLeft size={24} />
        </CarouselButton>
        <CarouselButton onClick={nextSlide}>
          <ChevronRight size={24} />
        </CarouselButton>
        <Dots>
          {images.map((_, index) => (
            <Dot 
              key={index} 
              active={index === currentSlide} 
              onClick={() => {
                setCurrentSlide(index);
                restartTimer();
              }}
            />
          ))}
        </Dots>
      </CarouselContainer>
      <BookingWidget>
        <BookingTitle>Book Your Stay</BookingTitle>
        <BookingForm>
          <FormGroup>
            <Calendar size={20} />
            <Input type="text" placeholder="Check-in Date" />
          </FormGroup>
          <FormGroup>
            <Calendar size={20} />
            <Input type="text" placeholder="Check-out Date" />
          </FormGroup>
          <FormGroup>
            <Users size={20} />
            <Input type="number" placeholder="Number of Guests" min="1" />
          </FormGroup>
          <Button>Check Availability</Button>
        </BookingForm>
      </BookingWidget>
    </HeroSection>
  );
};

export default Hero;