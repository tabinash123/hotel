import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ChevronDown, Globe, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${({ isScrolled }) => isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${({ isScrolled }) => isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 15px 20px;
  }
`;

const Logo = styled.img`
  height: 50px;
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: ${({ isScrolled }) => isScrolled ? '#333' : '#fff'};
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  margin: 0 15px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #bf9b30;
  }
`;

const BookNowButton = styled.a`
  background-color: #bf9b30;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-left: 20px;
  
  &:hover {
    background-color: #a3842b;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(163, 132, 43, 0.3);
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 12px;
  }
`;






const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ isScrolled }) => isScrolled ? '#333' : '#fff'};

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 1000;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 400px;
  background-color: #fff;
  padding: 40px;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  animation: ${({ isOpen }) => isOpen && css`${slideIn} 0.3s ease-in-out`};
  z-index: 1001;
`;

const MobileNavItem = styled(NavItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  padding: 10px 0;
  color: #333;
  font-size: 20px;
  border-bottom: 1px solid #eaeaea;
  transition: all 0.3s ease;

  &:hover {
    color: #bf9b30;
    transform: translateX(10px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    color: #bf9b30;
    transform: rotate(90deg);
  }
`;

const MobileFooter = styled.div`
  margin-top: auto;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #333;

  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  transition: all 0.3s ease;

  &:hover {
    color: #bf9b30;
    transform: translateX(5px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    color: #bf9b30;
    transform: scale(1.2);
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #bf9b30, transparent);
  margin: 20px 0;
`;

const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

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

  const toggleLanguageSelector = () => {
    setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsLanguageSelectorOpen(false);
  };

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <HeaderContent>
        <Logo src="/path-to-your-logo.png" alt="Hotel Logo" />
        <NavGroup>
          <Nav>
            <NavItem href="/" isScrolled={isScrolled}>Home</NavItem>
            <NavItem href="/rooms" isScrolled={isScrolled}>Rooms & Suites</NavItem>
            <NavItem href="/dining" isScrolled={isScrolled}>Dining</NavItem>
            <NavItem href="/experiences" isScrolled={isScrolled}>Experiences</NavItem>
            <NavItem href="/wellness" isScrolled={isScrolled}>Wellness</NavItem>
            <NavItem href="/contact" isScrolled={isScrolled}>Contact</NavItem>
          </Nav>

          <MobileMenuToggle isScrolled={isScrolled} onClick={toggleMobileMenu}>
            ☰
          </MobileMenuToggle>
        </NavGroup>
      </HeaderContent>
      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu}>
          <X size={24} />
        </CloseButton>
        <MobileNavItem href="/">Home <ChevronRight size={20} /></MobileNavItem>
        <MobileNavItem href="/rooms">Rooms & Suites <ChevronRight size={20} /></MobileNavItem>
        <MobileNavItem href="/dining">Dining <ChevronRight size={20} /></MobileNavItem>
        <MobileNavItem href="/experiences">Experiences <ChevronRight size={20} /></MobileNavItem>
        <MobileNavItem href="/wellness">Wellness <ChevronRight size={20} /></MobileNavItem>
        <MobileNavItem href="/contact">Contact <ChevronRight size={20} /></MobileNavItem>
        <Divider />
        <MobileFooter>
          <ContactInfo>
            <ContactItem><Phone size={16} /> +977 1234 5678</ContactItem>
            <ContactItem><Mail size={16} /> info@himalayanhaven.com</ContactItem>
            <ContactItem><MapPin size={16} /> Lakeside, Pokhara, Nepal</ContactItem>
          </ContactInfo>
          <SocialIcons>
            <SocialIcon href="#"><Facebook size={24} /></SocialIcon>
            <SocialIcon href="#"><Instagram size={24} /></SocialIcon>
            <SocialIcon href="#"><Twitter size={24} /></SocialIcon>
          </SocialIcons>
        </MobileFooter>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default HeaderComponent;