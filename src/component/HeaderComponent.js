import React, { useState } from 'react';
import styled from 'styled-components';
import { Phone, Email, LocationOn, Language, Search, ExpandMore, Menu, Close } from '@mui/icons-material';

const HeaderContainer = styled.header`
  font-family: 'Arial', sans-serif;
`;

const TopBar = styled.div`
  background-color: #C8A27A;
  color: #333;
  padding: 10px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
  display: none;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MainBar = styled.div`
  background-color: #1E293B;
  color: white;
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 1024px) {
    order: 3;
    width: 100%;
    margin-top: 15px;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #C8A27A;
  }

  @media (max-width: 1024px) {
    padding: 10px 0;
  }
`;

const SearchIconWrapper = styled.div`
  background-color: #C8A27A;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

const BookNowButton = styled.button`
  background-color: #C8A27A;
  color: #333;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #B8925A;
  }

  @media (max-width: 1024px) {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 15px;
    width: 100%;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <TopBar>
        <ContactInfo>
          <InfoItem>
            <Phone fontSize="small" />
            +800-123-4567 6587
          </InfoItem>
          <InfoItem>
            <Email fontSize="small" />
            info@gmail.com
          </InfoItem>
          <InfoItem>
            <LocationOn fontSize="small" />
            Beverley, New York 224 USA
          </InfoItem>
        </ContactInfo>
        <LanguageSelector>
          <Language fontSize="small" />
          {language}
          <ExpandMore fontSize="small" />
        </LanguageSelector>
      </TopBar>
      <MainBar>
        <Logo>
          <LogoIcon />
          Orbitza
        </Logo>
        <MobileMenuIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <Close /> : <Menu />}
        </MobileMenuIcon>
        <Nav isOpen={isMobileMenuOpen}>
          <NavItem href="/">Home </NavItem>
          <NavItem href="about">About</NavItem>
          <NavItem href="room">Room </NavItem>
          <NavItem href="pages">Page </NavItem>
          <NavItem href="blogs">Blog </NavItem>
          <NavItem href="contact">Contact</NavItem>
        
        </Nav>
       
      </MainBar>
    </HeaderContainer>
  );
};

export default Header;