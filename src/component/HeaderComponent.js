import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Menu, X, ChevronRight } from 'lucide-react';

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeaderContainer = styled.header`
  background-color:#ffffff;;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  backdrop-filter: blur(10px);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1.25rem 4rem;
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 800;
  color: #B8860B;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }

  &:hover {
    color: #FFD700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }
`;

const NavMenu = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

const NavItem = styled.a`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  font-family: 'Poppins', sans-serif;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #B8860B;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #B8860B;
    
    &:after {
      width: 80%;
      left: 10%;
    }
  }
`;

const BookNowButton = styled.button`
  background-color: #B8860B;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 10px rgba(184, 134, 11, 0.3);
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    padding: 0.7rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  &:hover {
    background-color: #FFD700;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(255, 215, 0, 0.4);
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  color: #B8860B;
  transition: color 0.3s ease;
  padding: 0.5rem;

  &:hover {
    color: #FFD700;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
  overflow-y: auto;

  ${props => props.isOpen && css`
    transform: translateX(0);
    animation: ${slideIn} 0.3s ease-in-out;
  `}
`;

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 1000;

  ${props => props.isOpen && css`
    opacity: 1;
    visibility: visible;
    animation: ${fadeIn} 0.3s ease-in-out;
  `}
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
`;

const DrawerLogo = styled(Logo)`
  font-size: 2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #B8860B;
  cursor: pointer;
`;

const DrawerNavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: #f0f0f0;
    color: #B8860B;
  }
`;

const DrawerBookNowButton = styled(BookNowButton)`
  display: block;
  width: calc(100% - 3rem);
  margin: 1.5rem;
  text-align: center;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <HeaderContent>
          <Logo href="/">Echo Adventure Resort</Logo>
          <MenuToggle onClick={toggleMenu}>
            <Menu size={24} />
          </MenuToggle>
          <NavMenu>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/room">Rooms</NavItem>
            <NavItem href="/tour">Tour-Packages</NavItem>
            <NavItem href="/about">About-Us</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </NavMenu>
        </HeaderContent>
      </HeaderContainer>

      <DrawerOverlay isOpen={isMenuOpen} onClick={toggleMenu} />
      <Drawer isOpen={isMenuOpen}>
        <DrawerHeader>
          <DrawerLogo href="/">Echo Adventure</DrawerLogo>
          <CloseButton onClick={toggleMenu}>
            <X size={24} />
          </CloseButton>
        </DrawerHeader>
        <DrawerNavItem href="/">Home <ChevronRight size={20} /></DrawerNavItem>
        <DrawerNavItem href="/room">Rooms <ChevronRight size={20} /></DrawerNavItem>
        <DrawerNavItem href="/tour">Tour-package <ChevronRight size={20} /></DrawerNavItem>
        <DrawerNavItem href="/about">About-us <ChevronRight size={20} /></DrawerNavItem>
        <DrawerNavItem href="/contact">Contact <ChevronRight size={20} /></DrawerNavItem>
        <DrawerBookNowButton>Book Now</DrawerBookNowButton>
      </Drawer>
    </>
  );
};

export default Header;