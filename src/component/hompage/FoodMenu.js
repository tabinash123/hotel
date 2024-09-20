import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import buffMomoImg from '../../assets/food/buffMomoImg.jpg'
import chickenTarkariImg from '../../assets/food/chickenTarkariImg.jpg'
import dhidoGundrukImg from '../../assets/food/dhidoGundrukImg.jpg'
import fishCurryImg from '../../assets/food/fishCurryImg.jpg'
import thaliSetImg from '../../assets/food/thaliSetImg.jpg'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MenuSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Playfair Display', serif;
  background-color: #fafafa;
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 60px 40px;
  }

  @media (min-width: 1024px) {
    padding: 80px 60px;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const TitleGroup = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Navigation = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
  }
`;

const SubTitle = styled.h3`
  font-size: 14px;
  color: #e74c3c;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 0 10px;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: #2c3e50;
  margin: 0;
  font-weight: bold;
  position: relative;

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const NavButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: #2c3e50;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #e74c3c;
    color: #fff;
    transform: translateY(-2px);
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 40px 60px;
  }
`;

const MenuItem = styled.div`
  display: flex;
  gap: 20px;
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;
  
  &:nth-child(odd) {
    animation-delay: 0.2s;
  }
  &:nth-child(even) {
    animation-delay: 0.4s;
  }
`;

const MenuImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const MenuContent = styled.div`
  flex: 1;
`;

const MenuTitle = styled.h4`
  font-size: 20px;
  color: #2c3e50;
  margin: 0 0 10px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const MenuDescription = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  margin: 0;
  line-height: 1.6;
  font-family: 'Lato', sans-serif;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 60px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }

  @media (min-width: 768px) {
    width: calc(33.333% - 14px);
  }
`;

// Keep the menuItems array as it is
const menuItems = [
  {
    title: "Chitwan-style Fish Curry",
    description: "Fresh fish caught from the Rapti River, cooked in a flavorful curry with local spices.",
    image: fishCurryImg
  },
  {
    title: "Chicken Tarkari",
    description: "A rich, spicy chicken curry made with local ingredients and herbs.",
    image: chickenTarkariImg
  },
  {
    title: "Dhido and Gundruk",
    description: "A traditional Nepali dish made from buckwheat or millet, served with fermented leafy greens and a side of spicy pickles.",
    image: dhidoGundrukImg
  },
  {
    title: "Buff Momo",
    description: "Buffalo meat dumplings, a Nepali favorite, served with spicy tomato chutney.",
    image: buffMomoImg
  },


  {
    title: "Nepali Thali Set",
    description: "A complete meal featuring rice, lentils, chicken or fish curry, and various vegetable dishes.",
    image: thaliSetImg
  },

];


const ITEMS_PER_PAGE = 4;

const FoodMenu = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(menuItems.length / ITEMS_PER_PAGE);

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pageCount - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : 0));
  };

  const visibleItems = menuItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <MenuSection>
      <MenuHeader>
        <TitleGroup>
          <SubTitle>TASTE OF SAURAHA</SubTitle>
          <Title>Local Delights</Title>
        </TitleGroup>
        <Navigation>
          <NavButton onClick={handlePrevClick}><ChevronLeft size={24} /></NavButton>
          <NavButton onClick={handleNextClick}><ChevronRight size={24} /></NavButton>
        </Navigation>
      </MenuHeader>
      <MenuGrid>
        {visibleItems.map((item, index) => (
          <MenuItem key={index}>
            <MenuImage src={item.image} alt={item.title} />
            <MenuContent>
              <MenuTitle>{item.title}</MenuTitle>
              <MenuDescription>{item.description}</MenuDescription>
            </MenuContent>
          </MenuItem>
        ))}
      </MenuGrid>
      {/* <ImageGallery>
        <GalleryImage src={img3} alt="Gallery 1" />
        <GalleryImage src={img4} alt="Gallery 2" />
        <GalleryImage src={img5} alt="Gallery 3" />
      </ImageGallery> */}
    </MenuSection>
  );
};

export default FoodMenu;