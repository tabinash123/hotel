import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Phone, Mail, MapPin, Clock, Globe, DollarSign } from 'lucide-react';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  position: relative;

  @media (max-width: 1024px) {
    padding: 80px 15px;
  }

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;

const PageTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #2C3E50;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    // flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 768px) {
      flex-direction: column;

    gap: 20px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 1024px) {
    padding: 35px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 1024px) {
    padding: 35px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #2C3E50;
  margin-bottom: 30px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 26px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  font-size: 18px;
  color: #7f8c8d;

  svg {
    margin-right: 15px;
    color: #C1A267;
  }

  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #C1A267;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #C1A267;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 12px;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background-color: #C1A267;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #A88A4F;
  }

  @media (max-width: 1024px) {
    font-size: 17px;
    padding: 11px 22px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const MapSection = styled.div`
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoBox = styled.div`
  background: #f0f0f0;
  border-left: 4px solid #C1A267;
  padding: 20px;
  margin-top: 30px;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 20px;
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
      <Subtitle>We're here to help you plan your perfect Sauraha adventure</Subtitle>

      <ContactSection>
        <ContactInfo>
          <SectionTitle>Contact Information</SectionTitle>
          <ContactDetail>
            <Phone size={24} />
            +977 1234567890 (International: +977 1234567890)
          </ContactDetail>
          <ContactDetail>
            <Mail size={24} />
            info@saurahahotel.com
          </ContactDetail>
          <ContactDetail>
            <MapPin size={24} />
            Sauraha, Chitwan National Park, Nepal
          </ContactDetail>
          <ContactDetail>
            <Clock size={24} />
            Open 24/7 (Nepal Time: GMT+5:45)
          </ContactDetail>
          <ContactDetail>
            <Globe size={24} />
            www.saurahahotel.com
          </ContactDetail>
          <ContactDetail>
            <Globe size={24} />
            We speak: English, Nepali, Hindi
          </ContactDetail>
          <ContactDetail>
            <DollarSign size={24} />
            We accept: USD, EUR, NPR
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
        <SectionTitle>Important Information for International Visitors</SectionTitle>
        <ul>
          <li>Visa Information: Most visitors require a visa to enter Nepal. You can obtain a visa on arrival at Tribhuvan International Airport in Kathmandu.</li>
          <li>Currency: The local currency is Nepalese Rupee (NPR). We recommend exchanging money at the airport or official exchange offices.</li>
          <li>Climate: Sauraha has a subtropical climate. The best time to visit is from October to March when the weather is mild and dry.</li>
          <li>Transportation: We offer airport pickup services. Please contact us in advance to arrange your transfer.</li>
          <li>Health: We recommend consulting your doctor about vaccinations and health precautions before traveling to Nepal.</li>
        </ul>
      </InfoBox>
    </PageContainer>
  );
};

export default Contact;