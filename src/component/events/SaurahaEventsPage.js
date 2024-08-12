import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

import eventImg1 from "../../assets/gallary/1.jpg";
import eventImg2 from "../../assets/gallary/2.jpg";
import eventImg3 from "../../assets/gallary/3.jpg";
import eventImg4 from "../../assets/gallary/4.jpg";
import eventImg5 from "../../assets/gallary/5.jpg";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #2C3E50;
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #555;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturedEventSection = styled.section`
  margin-bottom: 4rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturedEventImage = styled.div`
  width: 50%;
  height: 400px;
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

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const FeaturedEventInfo = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeaturedEventTitle = styled.h2`
  font-size: 1.8rem;
  color: #2C3E50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FeaturedEventDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FeaturedEventDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const EventDetail = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background-color: #8B4513;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #6B3611;
  }
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 200px;
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
`;

const EventInfo = styled.div`
  padding: 1.5rem;
`;

const EventTitle = styled.h3`
  font-size: 1.3rem;
  color: #2C3E50;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const EventCardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const CardEventDetail = styled(EventDetail)`
  font-size: 0.8rem;
  margin-right: 0.75rem;
`;

const ViewMoreButton = styled(Button)`
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
      <PageTitle>Discover Sauraha's Enchanting Events</PageTitle>
      <Subtitle>
        Immerse yourself in the rich culture and natural wonders of Sauraha through our carefully curated events. 
        From vibrant festivals to intimate nature experiences, each event promises unforgettable memories.
      </Subtitle>

      {featuredEvent && (
        <FeaturedEventSection>
          <FeaturedEventImage src={featuredEvent.image} />
          <FeaturedEventInfo>
            <FeaturedEventTitle>{featuredEvent.title}</FeaturedEventTitle>
            <FeaturedEventDescription>{featuredEvent.description}</FeaturedEventDescription>
            <FeaturedEventDetails>
              <EventDetail>
                <Calendar size={16} style={{marginRight: '8px', color: '#8B4513'}} />
                {new Date(featuredEvent.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </EventDetail>
              <EventDetail>
                <Clock size={16} style={{marginRight: '8px', color: '#8B4513'}} />
                {featuredEvent.time}
              </EventDetail>
              <EventDetail>
                <MapPin size={16} style={{marginRight: '8px', color: '#8B4513'}} />
                {featuredEvent.location}
              </EventDetail>
              <EventDetail>
                <Users size={16} style={{marginRight: '8px', color: '#8B4513'}} />
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
                  <Calendar size={14} style={{marginRight: '6px', color: '#8B4513'}} />
                  {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </CardEventDetail>
                <CardEventDetail>
                  <Clock size={14} style={{marginRight: '6px', color: '#8B4513'}} />
                  {event.time}
                </CardEventDetail>
                <CardEventDetail>
                  <MapPin size={14} style={{marginRight: '6px', color: '#8B4513'}} />
                  {event.location}
                </CardEventDetail>
              </EventCardDetails>
              <ViewMoreButton>View Details <ChevronRight size={14} style={{marginLeft: '6px'}} /></ViewMoreButton>
            </EventInfo>
          </EventCard>
        ))}
      </EventGrid>
    </PageContainer>
  );
};

export default SaurahaEventsPage;