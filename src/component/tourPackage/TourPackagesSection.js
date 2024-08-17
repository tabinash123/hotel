import React, { useState } from 'react';
import styled from 'styled-components';
import { Compass, Clock, Users, Mountain, Sun, Moon, Camera, DollarSign, MapPin } from 'lucide-react';

import jungleSafari from '../../assets/activities/jungleSafari.jpg';
import bishajariLake from '../../assets/activities/bishajariLake.jpg';
import elephantBath from '../../assets/activities/elephantBath.jpg';
import culturalProgram from '../../assets/activities/culturalProgram.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    padding: 75px 20px;
  }

  @media (min-width: 1024px) {
    padding: 100px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 50px;
  }
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
`;

const PackageCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const PackageImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PackageInfo = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PackageName = styled.h3`
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const PackageDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.6;
  flex-grow: 1;
`;

const PackageFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #34495e;
  background-color: #f0f3f5;
  padding: 5px 10px;
  border-radius: 20px;

  svg {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const PackagePrice = styled.div`
  font-size: 1.1rem;
  color: #B8860B;
  font-weight: 600;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.primary ? '#B8860B' : 'transparent'};
  color: ${props => props.primary ? '#000000' : '#000000'};
  border: ${props => props.primary ? 'none' : '2px solid #B8860B'};
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 12px;
    font-size: 1rem;
  }

  &:hover {
    background-color: ${props => props.primary ? '#e69500' : 'rgba(255, 165, 0, 0.1)'};
  }
`;


const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  // padding: 15px;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  max-width: 400px; // Default for mobile
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    max-width: 600px; // Tablet
  }

  @media (min-width: 1024px) {
    max-width: 800px; // Desktop
  }
`;


const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ModalHeader = styled.div`
  position: relative;
  height: 200px;

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }
`;


const ModalHeaderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const ModalBody = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const ModalDescription = styled.p`
  font-size: 0.9rem;
  color: #34495e;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

const ModalFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const ModalFeature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #34495e;
  flex: 1;
  text-align: center;

  svg {
    margin-bottom: 5px;
    color: #e74c3c;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const ModalItinerary = styled.ul`
  font-size: 0.9rem;
  color: #34495e;
  margin-bottom: 20px;
  padding-left: 20px;

  li {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

const ModalPrice = styled.div`
  font-size: 1.3rem;
  color: #e74c3c;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BookButton = styled(Button)`
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TourPackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: "Jungle Safari Adventure",
      image: jungleSafari,
      description: "Embark on an exhilarating journey through Chitwan National Park. Our expert guides will lead you through lush forests and grasslands, bringing you face-to-face with the park's diverse wildlife, including the majestic Bengal tiger, one-horned rhinoceros, and various species of deer and monkeys.",
      features: { duration: "Full Day", groupSize: "Max 6", type: "Wildlife" },
      itinerary: [
        "Early morning pickup from the resort",
        "Jeep safari through various zones of the national park",
        "Lunch at a scenic spot within the park",
        "Afternoon wildlife spotting and bird watching",
        "Visit to the Gharial breeding center",
        "Evening return to the resort with a sunset view"
      ]
    },
    {
      name: "Bishajari Tal Exploration",
      image: bishajariLake,
      description: "Discover the serene beauty of Bishajari Tal, also known as Twenty Thousand Lakes. This wetland area is a paradise for bird watchers and nature enthusiasts, offering a unique ecosystem teeming with aquatic life and migratory birds.",
      features: { duration: "Half Day", groupSize: "Max 8", type: "Nature" },
      itinerary: [
        "Morning departure to Bishajari Tal",
        "Guided walk around the lake's perimeter",
        "Bird watching with provided binoculars",
        "Canoe ride to observe aquatic plants and animals",
        "Picnic lunch by the lakeside",
        "Return to the resort with stops for photography"
      ]
    },
    {
      name: "Elephant Bath Experience",
      image: elephantBath,
      description: "Get up close and personal with Chitwan's gentle giants. Join the mahouts as they take the elephants for their daily bath in the river. Learn about elephant care and conservation while enjoying this unique and interactive experience.",
      features: { duration: "2 Hours", groupSize: "Max 4", type: "Interactive" },
      itinerary: [
        "Brief introduction to elephant behavior and safety guidelines",
        "Walk to the river with the elephants and their mahouts",
        "Participate in bathing and scrubbing the elephants",
        "Learn about elephant care and conservation efforts",
        "Photo opportunities with the elephants",
        "Return to the resort with a newfound appreciation for these magnificent creatures"
      ]
    },
    {
      name: "Tharu Cultural Evening",
      image: culturalProgram,
      description: "Immerse yourself in the vibrant culture of the Tharu people, the indigenous inhabitants of the Terai region. Enjoy traditional dances, music, and cuisine in an authentic village setting, providing insight into the rich heritage of Chitwan.",
      features: { duration: "Evening", groupSize: "Max 15", type: "Cultural" },
      itinerary: [
        "Evening departure to a nearby Tharu village",
        "Welcome ceremony with traditional tikka",
        "Tour of the village and introduction to Tharu lifestyle",
        "Interactive session on Tharu arts and crafts",
        "Traditional Tharu dance performance",
        "Authentic Tharu dinner under the stars",
        "Return to the resort with cultural souvenirs"
      ]
    }
  ];

  return (
    <Section>
      <Title>Our Tour Packages</Title>
      <Subtitle>Discover the wonders of Chitwan National Park with our expertly curated tour packages.</Subtitle>
      <PackagesGrid>
        {packages.map((pkg, index) => (
          <PackageCard key={index}>
            <PackageImage src={pkg.image} alt={pkg.name} />
            <PackageInfo>
              <PackageName>{pkg.name}</PackageName>
              <PackageDescription>{pkg.description.substring(0, 100)}...</PackageDescription>
              <PackageFeatures>
                {/* <Feature><Clock size={16} /> {pkg.features.duration}</Feature> */}
                {/* <Feature><Users size={16} /> {pkg.features.groupSize}</Feature> */}
                {/* <Feature><Compass size={16} /> {pkg.features.type}</Feature> */}
              </PackageFeatures>
              <Button onClick={() => setSelectedPackage(pkg)}>Learn More</Button>
            </PackageInfo>
          </PackageCard>
        ))}
      </PackagesGrid>
      {selectedPackage && (
        <Modal onClick={() => setSelectedPackage(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalImage src={selectedPackage.image} alt={selectedPackage.name} />
              <ModalHeaderContent>
                <ModalTitle>{selectedPackage.name}</ModalTitle>
                {/* <Feature><MapPin size={16} /> Chitwan National Park</Feature> */}
              </ModalHeaderContent>
              <CloseButton onClick={() => setSelectedPackage(null)}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              {/* <ModalDescription>{selectedPackage.description}</ModalDescription> */}
              <ModalFeatures>
                {/* <ModalFeature>
                  <Clock size={24} />
                  {selectedPackage.features.duration}
                </ModalFeature> */}
                {/* <ModalFeature>
                  <Users size={24} />
                  {selectedPackage.features.groupSize}
                </ModalFeature> */}
                {/* <ModalFeature>
                  <Compass size={24} />
                  {selectedPackage.features.type}
                </ModalFeature> */}
              </ModalFeatures>
              <h3>Itinerary:</h3>
              <ModalItinerary>
                {selectedPackage.itinerary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ModalItinerary>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
}

export default TourPackagesSection;