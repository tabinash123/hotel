import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Menu, Close, Search, Phone, Language, CalendarToday, Instagram, Facebook, Twitter } from '@mui/icons-material';
import logo from '../assets/logo.jpg'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const HeaderContainer = styled.header`
  background-color: ${props => props.isScrolled ? 'rgba(14, 64, 28, 0.95)' : 'rgba(14, 64, 28, 0.7)'};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.5rem 5%;
  display: flex;
  flex-direction: column;
  animation: ${slideDown} 0.5s ease-out;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(244, 240, 229, 0.2);
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #F4F0E5;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #F4F0E5;
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }
`;

const MainBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.img`
  height: 60px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: #F4F0E5;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #FFD700;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #FFD700;
    &:after {
      width: 100%;
    }
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #F4F0E5;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #FFD700;
    transform: translateY(-2px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #FFD700;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 80%;
  height: 100vh;
  background-color: rgba(14, 64, 28, 0.98);
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 1001;
  overflow-y: auto;
  animation: ${props => props.isOpen ? fadeIn : 'none'} 0.3s ease-out;
`;

const MobileNavItem = styled(NavItem)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
`;

const CloseButton = styled(IconButton)`
  align-self: flex-end;
  margin-bottom: 2rem;
`;

const BookNowButton = styled.button`
  background-color: #FFD700;
  color: #0E401C;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #F4F0E5;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(14, 64, 28, 0.98);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1002;
  animation: ${fadeIn} 0.3s ease-out;
`;

const SearchInput = styled.input`
  width: 80%;
  max-width: 600px;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: rgba(244, 240, 229, 0.1);
  border: 2px solid #F4F0E5;
  border-radius: 50px;
  color: #F4F0E5;
  outline: none;

  &::placeholder {
    color: rgba(244, 240, 229, 0.7);
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <TopBar>
        <ContactInfo>
          <Phone fontSize="small" />
          <span>+977 123 456 789</span>
          <Language fontSize="small" />
          <span>EN | NP</span>
        </ContactInfo>
        <SocialIcons>
          <SocialIcon href="#"><Instagram fontSize="small" /></SocialIcon>
          <SocialIcon href="#"><Facebook fontSize="small" /></SocialIcon>
          <SocialIcon href="#"><Twitter fontSize="small" /></SocialIcon>
        </SocialIcons>
      </TopBar>
      <MainBar>
        <Logo src={logo} alt="Chitwan Eco Resort" />
        <NavMenu>
          <NavItem href="#accommodations">Accommodations</NavItem>
          <NavItem href="#experiences">Experiences</NavItem>
          <NavItem href="#dining">Dining</NavItem>
          <NavItem href="#sustainability">Sustainability</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavMenu>
        <IconGroup>
          <IconButton onClick={() => setIsSearchOpen(true)}>
            <Search />
          </IconButton>
          <BookNowButton>
            <CalendarToday fontSize="small" />
            Book Now
          </BookNowButton>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <Menu />
          </MobileMenuButton>
        </IconGroup>
      </MainBar>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
          <Close />
        </CloseButton>
        {['Accommodations', 'Experiences', 'Dining', 'Sustainability', 'Contact'].map((item, index) => (
          <MobileNavItem key={item} href={`#${item.toLowerCase()}`} index={index} onClick={() => setIsMobileMenuOpen(false)}>
            {item}
          </MobileNavItem>
        ))}
        <BookNowButton style={{ marginTop: '2rem' }}>
          <CalendarToday fontSize="small" />
          Book Now
        </BookNowButton>
      </MobileMenu>
      <SearchOverlay isOpen={isSearchOpen}>
        <SearchInput placeholder="Search our resort..." />
        <CloseButton onClick={() => setIsSearchOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
          <Close />
        </CloseButton>
      </SearchOverlay>
    </HeaderContainer>
  );
};

export default Header;