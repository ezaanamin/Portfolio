import React from "react";
// import HeaderImage from "../images/Header_Section.jpg";
import HeaderImage from "../images/Header_Section_2.jpg";

import { HeaderButton,Heading,Body,Background,SubHeading} from "../styles/index";

const Header = () => {
  return (
    <Body>
      <Background headerImage={HeaderImage}>
        <Heading>Ezaan Amin</Heading>
        <SubHeading>Software Engineer</SubHeading>
        <HeaderButton>Get in Touch</HeaderButton>
      </Background>
    </Body>
  );
};

export default Header;
