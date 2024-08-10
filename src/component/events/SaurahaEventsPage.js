import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

// Import images as specified
import eventImg1 from "../../assets/gallary/1.jpg";
import eventImg2 from "../../assets/gallary/2.jpg";
import eventImg3 from "../../assets/gallary/3.jpg";
import eventImg4 from "../../assets/gallary/4.jpg";
import eventImg5 from "../../assets/gallary/5.jpg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;

  @media (max-width: 1024px) {
    padding: 60px 15px;
  }

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const PageTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #2C3E50;
  margin-bottom: 60px;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 1024px) {
    font-size: 42px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const FeaturedEventSection = styled.section`
  margin-bottom: 80px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    border-radius: 15px;
  }
`;

const FeaturedEventImage = styled.div`
  width: 50%;
  height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const FeaturedEventInfo = styled.div`
  width: 50%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FeaturedEventTitle = styled.h2`
  font-size: 36px;
  color: #2C3E50;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const FeaturedEventDescription = styled.p`
  font-size: 18px;
  color: #7f8c8d;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const FeaturedEventDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const EventDetail = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #7f8c8d;
  margin-right: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 15px;
  }
`;

const Button = styled.button`
  background-color: #C1A267;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #A88A4F;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(168, 138, 79, 0.4);
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 16px;
  }
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const EventCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    border-radius: 15px;
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4));
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const EventInfo = styled.div`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const EventTitle = styled.h3`
  font-size: 24px;
  color: #2C3E50;
  margin-bottom: 15px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 12px;
  }
`;

const EventDescription = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`;

const EventCardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const CardEventDetail = styled(EventDetail)`
  font-size: 14px;
  margin-right: 15px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-right: 12px;
  }
`;

const ViewMoreButton = styled(Button)`
  font-size: 16px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 20px;
  }
`;

// Sample event data
const events = [
  {
    id: 1,
    title: "Tharu Cultural Festival",
    image: eventImg1,
    description: "Immerse yourself in the vibrant Tharu culture with traditional dances, music, and cuisine.",
    date: "2024-10-15",
    time: "17:00",
    location: "Tharu Village, Sauraha",
    attendees: 500,
    featured: true
  },
  {
    id: 2,
    title: "Annual Bird Watching Competition",
    image: eventImg2,
    description: "Join bird enthusiasts from around the world in spotting and identifying Chitwan's diverse avian species.",
    date: "2024-11-20",
    time: "06:00",
    location: "Chitwan National Park",
    attendees: 200
  },
  {
    id: 3,
    title: "Elephant Bath Painting Exhibition",
    image: eventImg3,
    description: "Watch as elephants create unique paintings during their bath time in the Rapti River.",
    date: "2024-09-05",
    time: "09:00",
    location: "Rapti River Bank",
    attendees: 150
  },
  {
    id: 4,
    title: "Sauraha Food Festival",
    image: eventImg4,
    description: "Taste a variety of local and international cuisines prepared by Sauraha's best chefs.",
    date: "2024-12-01",
    time: "11:00",
    location: "Sauraha Main Square",
    attendees: 1000
  },
  {
    id: 5,
    title: "Jungle Night Walk",
    image: eventImg5,
    description: "Experience the nocturnal life of Chitwan National Park with expert guides.",
    date: "2024-08-15",
    time: "20:00",
    location: "Chitwan National Park Entrance",
    attendees: 50
  }
];

const SaurahaEventsPage = () => {
  const featuredEvent = events.find(event => event.featured);
  const otherEvents = events.filter(event => !event.featured);

  return (
    <PageContainer>
      <PageTitle>Discover Sauraha's Exciting Events</PageTitle>

      {featuredEvent && (
        <FeaturedEventSection>
          <FeaturedEventImage src={featuredEvent.image} />
          <FeaturedEventInfo>
            <FeaturedEventTitle>{featuredEvent.title}</FeaturedEventTitle>
            <FeaturedEventDescription>{featuredEvent.description}</FeaturedEventDescription>
            <FeaturedEventDetails>
              <EventDetail>
                <Calendar size={18} style={{marginRight: '10px', color: '#C1A267'}} />
                {new Date(featuredEvent.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </EventDetail>
              <EventDetail>
                <Clock size={18} style={{marginRight: '10px', color: '#C1A267'}} />
                {featuredEvent.time}
              </EventDetail>
              <EventDetail>
                <MapPin size={18} style={{marginRight: '10px', color: '#C1A267'}} />
                {featuredEvent.location}
              </EventDetail>
              <EventDetail>
                <Users size={18} style={{marginRight: '10px', color: '#C1A267'}} />
                {featuredEvent.attendees} attendees
              </EventDetail>
            </FeaturedEventDetails>
            <Button>Register Now</Button>
          </FeaturedEventInfo>
        </FeaturedEventSection>
      )}

      <EventGrid>
        {otherEvents.map(event => (
          <EventCard key={event.id}>
            <EventImage src={event.image} />
            <EventInfo>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              <EventCardDetails>
                <CardEventDetail>
                  <Calendar size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </CardEventDetail>
                <CardEventDetail>
                  <Clock size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {event.time}
                </CardEventDetail>
                <CardEventDetail>
                  <MapPin size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {event.location}
                </CardEventDetail>
              </EventCardDetails>
              <ViewMoreButton>View Details <ChevronRight size={16} style={{marginLeft: '8px'}} /></ViewMoreButton>
            </EventInfo>
          </EventCard>
        ))}
      </EventGrid>
    </PageContainer>
  );
};

export default SaurahaEventsPage;