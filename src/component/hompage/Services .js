import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Utensils, Sun, Dumbbell, Droplet, Coffee } from 'lucide-react';

import bufImage from '../../assets/servics/buf.jpg';
import fitnessImage from '../../assets/servics/fitness.jpg';
import poolImage from '../../assets/servics/pool.jpg';
import restaurantImage from '../../assets/servics/restaurant.jpg';
import spaImage from '../../assets/servics/spa.jpg';

const ServicesSection = styled.section`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #FF6B35;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionSubtitle = styled.h3`
  font-size: 28px;
  margin-bottom: 40px;
  color: #333;
  font-weight: 300;
`;

const ServiceCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  color: white;
  transition: background 0.3s ease;

  ${ServiceCard}:hover & {
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%);
  }
`;

const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #FF6B35;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ViewMoreButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 8px 16px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);

  ${ServiceCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #FF6B35;
    border-color: #FF6B35;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 15px;
  }
  .slick-list {
    margin: 0 -15px;
  }
  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background-color: #FF6B35;
    border-radius: 50%;
    z-index: 1;

    &:before {
      color: white;
      font-size: 20px;
    }

    &:hover {
      background-color: #e55a2b;
    }
  }
  .slick-prev {
    left: -30px;
  }
  .slick-next {
    right: -30px;
  }
  .slick-dots li button:before {
    font-size: 12px;
    color: #FF6B35;
  }
`;

const OurServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    { title: 'Restaurant', image: restaurantImage, icon: Utensils },
    { title: 'Spa Center', image: spaImage, icon: Sun },
    { title: 'Fitness Center', image: fitnessImage, icon: Dumbbell },
    { title: 'Health Club & Pool', image: poolImage, icon: Droplet },
    { title: 'Buf', image: bufImage, icon: Coffee },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipe: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <ServicesSection>
      <SectionTitle>Our Services</SectionTitle>
      <SectionSubtitle>Sailing Hotel provides all services you need</SectionSubtitle>
      <StyledSlider {...settings}>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceContent>
              <ServiceIcon>
                <service.icon size={24} color="white" />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ViewMoreButton>View More</ViewMoreButton>
            </ServiceContent>
          </ServiceCard>
        ))}
      </StyledSlider>
    </ServicesSection>
  );
};

export default OurServices;