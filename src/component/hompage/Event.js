import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import birthdayImage from '../../assets/events/Birthday.jpg';
import celebrationImage from '../../assets/events/Celebration.jpg';
import weddingImage from '../../assets/events/Wedding.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  color: #333;
  letter-spacing: 1px;
`;

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background-color: #e67e22;
  margin: 0 auto 25px;
  position: relative;
  &::before, &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 8px;
    height: 8px;
    background-color: #e67e22;
    border-radius: 50%;
    transform: translateY(-50%);
  }
  &::before {
    left: -15px;
  }
  &::after {
    right: -15px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  line-height: 1.6;
`;

const EventCard = styled.div`
  position: relative;
  width: 350px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${EventCard}:hover & {
    transform: scale(1.05);
  }
`;

const EventOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
  color: white;
  transition: background 0.3s ease;

  ${EventCard}:hover & {
    background: linear-gradient(to top, rgba(230,126,34,0.9), rgba(230,126,34,0));
  }
`;

const EventType = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
`;

const EventName = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
`;

const NavButton = styled.button`
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #e67e22;
    color: white;
  }
`;

const PrevButton = styled(NavButton)`
  left: -20px;
`;

const NextButton = styled(NavButton)`
  right: -20px;
`;

const SliderWrapper = styled.div`
  margin: 0 -10px;
  .slick-slide > div {
    padding: 0 10px;
  }
`;

const Event = () => {
  const events = [
    { name: 'Birthday Bash', image: birthdayImage },
    { name: 'Grand Celebration', image: celebrationImage },
    { name: 'Dream Wedding', image: weddingImage },
    { name: 'Business Conference', image: birthdayImage },
    { name: 'Tech Seminar', image: celebrationImage },
    { name: 'Charity Gala', image: weddingImage },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <EventSection>
      <Title>Events</Title>
      <Divider />
      <Subtitle>
        Create lasting memories with our exceptional facilities and services. From intimate gatherings to grand celebrations, we cater to all your special moments.
      </Subtitle>
      <SliderWrapper>
        <Slider {...sliderSettings}>
          {events.map((event, index) => (
            <EventCard key={index}>
              <EventImage src={event.image} alt={`${event.name} event`} />
              <EventOverlay>
                <EventType>Signature Event</EventType>
                <EventName>{event.name}</EventName>
              </EventOverlay>
            </EventCard>
          ))}
        </Slider>
      </SliderWrapper>
    </EventSection>
  );
};

export default Event;