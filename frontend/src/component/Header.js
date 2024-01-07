import React from "react";
import HeaderImage from "../images/Header_Section_2.jpg";
import { HeaderButton, Heading, Body, Background, SubHeading } from "../styles/index";
import { Link, animateScroll as scroll } from 'react-scroll';
function Header() {
  const scrollToContact = () => {
    scroll.scrollTo('#contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Body>
      <Background headerImage={HeaderImage}>
        <Heading>Ezaan Amin</Heading>
        <SubHeading>Software Engineer</SubHeading>
        {/* Use Link to scroll to the contact section */}
        <Link to="contact" smooth={true} duration={800}>
          <HeaderButton onClick={scrollToContact}>Get in Touch</HeaderButton>
        </Link>
      </Background>
    </Body>
  );
}

export default Header;
