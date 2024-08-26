import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg'; // Ensure this path is correct

const HeaderContainer = styled.header`
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: ${props => props.isScrolled ? 'sticky' : 'relative'};
  top: 0;
  z-index: 1000;
`;

const TopBar = styled.div`
  background-color: #1a4d2e;
  color: #fff;
  padding: 5px 5%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
  display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 5%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1a4d2e;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  margin-right: 10px;
  border-radius:10px;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: #1a4d2e;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 5px 0;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ff9800;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ff9800;
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #1a4d2e;
  z-index: 1001;
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    display: block;
  }

  ${props => props.isOpen && `
    transform: rotate(90deg);
  `}
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'block' : 'none'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease;
  z-index: 999;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: #f4f1e8;
  padding: 80px 20px 20px;
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const MobileNavItem = styled(NavItem)`
  display: block;
  padding: 15px 0;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }

  &:after {
    display: none;
  }

  &:hover {
    background-color: rgba(255, 152, 0, 0.1);
  }
`;



const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #1a4d2e;
  cursor: pointer;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <HeaderContainer isScrolled={isScrolled}>
      <TopBar>
        <ContactInfo>
          <span>📞 +977-9855057182/9845068777</span>
          <span>✉️ ecoadventureresortchitwan@gmail.com</span>
        </ContactInfo>
        <span>🐘 Discover the Wild Beauty of Chitwan</span>
      </TopBar>
      <HeaderContent>
        <Logo href="/">
          <LogoImage src={logo} alt="Sauraha Resort Logo" />
          {/* Echo Adventure Reosrt */}
        </Logo>
        <Nav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/room">Rooms</NavItem>
          <NavItem href="/tour">Tour & Activities</NavItem>
          <NavItem href="/gallary">Gallery</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </Nav>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          ☰
        </MobileMenuIcon>
      </HeaderContent>
  
      
      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu}>×</CloseButton>
        <MobileNavItem href="/" onClick={toggleMobileMenu}>Home</MobileNavItem>
        <MobileNavItem href="/about" onClick={toggleMobileMenu}>About</MobileNavItem>
        <MobileNavItem href="/room" onClick={toggleMobileMenu}>Rooms</MobileNavItem>
        <MobileNavItem href="/tour" onClick={toggleMobileMenu}>Tour & Activities</MobileNavItem>
        <MobileNavItem href="/gallary" onClick={toggleMobileMenu}>Gallery</MobileNavItem>
        <MobileNavItem href="/contact" onClick={toggleMobileMenu}>Contact</MobileNavItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;