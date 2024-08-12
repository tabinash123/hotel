import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';

import '@fontsource/poppins';
import '@fontsource/cormorant-garamond';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #2c1a05 0%, #462b0b 50%, #5e3a0f 100%);
  border-bottom: 3px solid #d4af37;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  min-height: 120px;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.2);

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 80px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  max-width: 1400px;
  // margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px 20px;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, #e9c46a, #f4a261);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  border-radius: 50%;
  border: 2px solid #e9c46a;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #f4e0a1;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #d4af37, #f4e0a1);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    &::after {
      transform: scaleX(1);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #f4e0a1;
  font-family: 'Poppins', sans-serif;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const BookNowButton = styled.a`
  background: linear-gradient(45deg, #d4af37, #f4e0a1);
  color: #2c1a05;
  padding: 12px 24px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-left: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #d4af37, #f4e0a1, #d4af37);
    z-index: -1;
    filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    color: #1a0f00;
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #f4e0a1;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  bottom: 0;
  width: 300px;
  background: linear-gradient(135deg, #2c1a05 0%, #462b0b 50%, #5e3a0f 100%);
  transition: right 0.3s ease-in-out;
  z-index: 1001;
  border-left: 3px solid #d4af37;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const MobileNavItem = styled(NavItem)`
  font-size: 20px;
  margin: 15px 0;
  text-align: right;
`;

const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoWrapper>
          <Logo src={logo} alt="Himalayan Haven Hotel" />
        </LogoWrapper>
        <Nav>
          <NavItem to="/" isScrolled={isScrolled}>Home</NavItem>
            <NavItem to="/room" isScrolled={isScrolled}>Rooms & Suites</NavItem>
            <NavItem to="/gallary" isScrolled={isScrolled}>Gallary</NavItem>
            <NavItem to="/about" isScrolled={isScrolled}>About-us</NavItem>
            <NavItem to="/tour" isScrolled={isScrolled}>Tour-Pack</NavItem>
            <NavItem to="/event" isScrolled={isScrolled}>event</NavItem>
            <NavItem to="/contact" isScrolled={isScrolled}>Contact</NavItem>
        </Nav>
        <ContactInfo>
          <ContactItem><Phone size={16} /> +977 1234 5678</ContactItem>
          <ContactItem><Mail size={16} /> info@himalayanhaven.com</ContactItem>
        </ContactInfo>
        <MobileMenuToggle onClick={toggleMobileMenu}>
          <Menu size={24} />
        </MobileMenuToggle>
      </HeaderContent>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <X size={24} color="#f4e0a1" onClick={toggleMobileMenu} style={{ alignSelf: 'flex-end', cursor: 'pointer' }} />
        <MobileNavItem to="/" onClick={toggleMobileMenu}>Home</MobileNavItem>
        <MobileNavItem to="/room" onClick={toggleMobileMenu}>Rooms & Suites</MobileNavItem>
        <MobileNavItem to="/tour" onClick={toggleMobileMenu}>Tour-Pack</MobileNavItem>
        <MobileNavItem to="/about" onClick={toggleMobileMenu}>About</MobileNavItem>
        <MobileNavItem to="/contact" onClick={toggleMobileMenu}>Contact</MobileNavItem>
        <MobileNavItem to="/event" onClick={toggleMobileMenu}>Event</MobileNavItem>
        
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default HeaderComponent;