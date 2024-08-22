import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Phone, Mail, MapPin, Clock, Globe, DollarSign } from 'lucide-react';

// ... (keep all the styled components as they are)

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;
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
  color: #000000;
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
  color: #000000;
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
  background-color: #B8860B;
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

const Contactpage = () => {
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
      <Subtitle>Experience the warmth of our eco-friendly hospitality. We're here to assist you in planning your perfect Chitwan adventure and ensuring your stay at Eco Adventure Resort is both comfortable and sustainable.</Subtitle>

      <ContactSection>
        <ContactInfo>
          <SectionTitle>How to Reach Us</SectionTitle>
          <ContactDetail>
            <Phone size={20} />
            Contact number not provided (please check with the resort)
          </ContactDetail>
          <ContactDetail>
            <Mail size={20} />
            Email not provided (please check with the resort)
          </ContactDetail>
          <ContactDetail>
            <MapPin size={20} />
            Eco Adventure Resort, Sauraha, Chitwan, Nepal
          </ContactDetail>
          <ContactDetail>
            <Clock size={20} />
            Check-in: 2:00 PM, Check-out: 12:00 PM
          </ContactDetail>
          <ContactDetail>
            <Globe size={20} />
            1 km from Sauraha city center
          </ContactDetail>
          <ContactDetail>
            <Globe size={20} />
            45 minutes drive from the airport
          </ContactDetail>
          <ContactDetail>
            <DollarSign size={20} />
            Established in 2013
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0248936876186!2d84.49528987645566!3d27.574569482850277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM0JzI4LjUiTiA4NMKwMjknNTAuOSJF!5e0!3m2!1sen!2sus!4v1628712733122!5m2!1sen!2sus"
      allowFullScreen=""
      loading="lazy"
    />
      </MapSection>

      <InfoBox>
        <SectionTitle>Essential Information for Guests</SectionTitle>
        <InfoList>
          <li>Eco-Friendly: We are committed to sustainable practices and preserving the natural beauty of Chitwan.</li>
          <li>Family-Friendly: Children aged 4-10 can stay free of charge.</li>
          <li>Location: Just 1 km from Sauraha city center, offering easy access to local attractions.</li>
          <li>Transportation: 45 minutes drive from the airport. Contact us for transfer arrangements.</li>
          <li>Nearby Attraction: Chitwan National Park is easily accessible from our resort.</li>
          <li>Amenities: We offer various facilities including a bar, garden area, and eco-friendly rooms.</li>
          <li>Activities: Enjoy jungle safaris, bird watching, and cultural experiences during your stay.</li>
        </InfoList>
      </InfoBox>
    </PageContainer>
  );
};

export default Contactpage;