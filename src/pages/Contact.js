import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Phone, Mail, MapPin, Clock, Globe, DollarSign } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #2C3E50;
  margin-bottom: 1rem;
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

const ContactSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
`;

const ContactForm = styled.form`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;

  svg {
    margin-right: 1rem;
    color: #8B4513;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #8B4513;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #8B4513;
  }
`;

const SubmitButton = styled.button`
  background-color: #8B4513;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6B3611;
  }
`;

const MapSection = styled.div`
  margin-bottom: 4rem;
`;

const Map = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoBox = styled.div`
  background: white;
  border-left: 4px solid #8B4513;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
    color: #555;
    font-size: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      color: #8B4513;
      position: absolute;
      left: 0;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', country: '', message: '' });
  };

  return (
    <PageContainer>
      <PageTitle>Contact Us</PageTitle>
      <Subtitle>Experience the warmth of our hospitality. We're here to assist you in planning your perfect Sauraha adventure and ensuring your stay is nothing short of extraordinary.</Subtitle>

      <ContactSection>
        <ContactInfo>
          <SectionTitle>How to Reach Us</SectionTitle>
          <ContactDetail>
            <Phone size={20} />
            +977 1234567890 (Int'l: +977 1234567890)
          </ContactDetail>
          <ContactDetail>
            <Mail size={20} />
            info@saurahahotel.com
          </ContactDetail>
          <ContactDetail>
            <MapPin size={20} />
            Sauraha, Chitwan National Park, Nepal
          </ContactDetail>
          <ContactDetail>
            <Clock size={20} />
            Open 24/7 (Nepal Time: GMT+5:45)
          </ContactDetail>
          <ContactDetail>
            <Globe size={20} />
            www.saurahahotel.com
          </ContactDetail>
          <ContactDetail>
            <Globe size={20} />
            Languages: English, Nepali, Hindi
          </ContactDetail>
          <ContactDetail>
            <DollarSign size={20} />
            Currencies accepted: USD, EUR, NPR
          </ContactDetail>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <SectionTitle>Send Us a Message</SectionTitle>
          <InputGroup>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              name="country"
              placeholder="Your Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>

      <MapSection>
        <SectionTitle>Find Us</SectionTitle>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.979917565759!2d84.49641021503737!3d27.57614998284041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994ef9b7ece9e11%3A0x9d615cc97213bf1d!2sSauraha%2C%20Nepal!5e0!3m2!1sen!2sus!4v1628712733122!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        />
      </MapSection>

      <InfoBox>
        <SectionTitle>Essential Information for International Guests</SectionTitle>
        <InfoList>
          <li>Visa Requirements: Most visitors need a visa to enter Nepal. Obtain yours on arrival at Tribhuvan International Airport in Kathmandu.</li>
          <li>Currency: The local currency is Nepalese Rupee (NPR). We recommend exchanging money at the airport or official exchange offices.</li>
          <li>Best Time to Visit: Experience Sauraha at its finest from October to March when the weather is mild and dry.</li>
          <li>Transportation: We offer personalized airport pickup services. Contact us in advance to arrange your seamless transfer.</li>
          <li>Health Precautions: We advise consulting your doctor about necessary vaccinations and health precautions before your journey to Nepal.</li>
        </InfoList>
      </InfoBox>
    </PageContainer>
  );
};

export default Contact;