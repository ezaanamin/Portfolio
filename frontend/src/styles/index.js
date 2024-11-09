import styled, { keyframes } from "styled-components";
<<<<<<< HEAD

=======
import { Tabs as ReactTabs, TabList as ReactTabList, Tab as ReactTab, TabPanel as ReactTabPanel } from 'react-tabs';
>>>>>>> e1e8599 (machine learning)

const expandAnimation = keyframes`
  0% {
    transform: scale(0);
    transform-origin: 50% 100%;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const Body = styled.div`
  background-color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Background = styled.div`
  position: relative;
  height: 80vh; /* Use relative height */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  @media (max-width: 768px) {
    height: 40vh; /* Adjusted height for mobile */
  }

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    animation: ${fadeIn} 30s ease forwards;
  }

  &::before {
    background-color: black;
    animation: initialBackground 0s 3s forwards;
  }

  @keyframes initialBackground {
    to {
      opacity: 0;
    }
  }

  &::after {
    background-image: url(${(props) => props.headerImage});
    background-size: cover;
    background-position: center;
    animation-delay: 10s;
  }

  animation: ${expandAnimation} 3s ease forwards;
`;

export const Heading = styled.h1`
  font-size: 3rem; /* Use rem for scalability */
  filter: brightness(100%);

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjusted font size for mobile */
  }
`;

export const SubHeading = styled.h3`
  color: white;
`;

export const HeaderButton = styled.button`
  position: relative; 
<<<<<<< HEAD
  width: 80%;
  max-width: 319px;
  min-width:400px;
  height: 50px;
=======
  width: 80%; /* Ensuring the button takes up 80% of its parent */
  max-width: 319px; /* Maximum width for larger screens */
  min-width: 200px; /* Set a reasonable minimum width for mobile screens */
  height: 50px; /* Default height */
>>>>>>> e1e8599 (machine learning)
  border-radius: 50px;
  color: black;
  background-color: #87CEEB;
  font-size: 1rem; 
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: 1;
  overflow: hidden;

  &:hover {
    background-color: #6EA4C9;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    height: 45px; /* Adjusted height for mobile */
    font-size: 0.875rem; /* Adjusted font size for mobile */
<<<<<<< HEAD
=======
    min-width: 150px; /* Adjusted minimum width for smaller screens */
    max-width: 90%; /* Allow the button to expand more on mobile */
>>>>>>> e1e8599 (machine learning)
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
<<<<<<< HEAD
    right: 15px;
=======
    right: 15px; /* Keep some distance from the right edge */
>>>>>>> e1e8599 (machine learning)
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 12px solid #000; /* Arrow color */
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(-50%) rotate(180deg); /* Fixed rotation to rotate down */
  }
`;




export const cardStyle = {
  width: '350px',
  height: '350px',
  perspective: '1000px',
  marginRight: '20px', // Fixed typo here
};

export const cardWrapperStyle = (isFlipped) => ({
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 1s',
  transform: isFlipped ? 'rotateY(360deg)' : 'rotateY(0deg)',
});

export const cardFaceStyle = (props) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  backgroundColor: props.isFlipped ? props.flippedBackgroundColor || '#2ecc71' : props.frontBackgroundColor || '#3498db',
  color: props.isFlipped ? `rgba(255, 255, 255, 0.7)` : '#fff',
  backgroundImage: props.isFlipped ? `url(${props.backImage})` : 'none',
  backgroundSize: 'cover',
  boxShadow: props.is3D ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
});
export const AboutSection = styled.div`
  background-color: #111111;
  height: auto; 
  padding: 20px; 

  @media (max-width: 768px) {
    padding: 10px; /* Reduced padding for mobile */
  }
`;

export const AboutFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse; 
    align-items: center; 
  }
`;

export const SectionHeading = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

export const AnimatedParagraph = styled.p`
  color: white;
  font-size: 16px;
  max-width: 1400px; 
  margin-top: 25px;
  margin-left: 30px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 1s ease-in-out, transform 5s ease-in-out; 

  &.scale-up {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: 768px) {
    font-size: 12px; 
    margin-left: 10px; 
    max-width: 100%; /* Full width on mobile */
  }
`;

export const AnimatedProfilePic = styled.img`
  border-radius: 20px;
  width: 200px;
  height: 200px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: 30px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 1s ease-in-out, transform 5s ease-in-out;

  &.scale-up {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: 768px) {
    width: 100px; 
    height: 100px; 
    margin: 20px auto; /* Center on mobile */
  }
`;

export const ContactMeSection = styled.div`
  background-color: #444444;
<<<<<<< HEAD
  height: auto; /* Change height to auto for responsiveness */
  color: white;
  padding: 20px; /* Added padding for better spacing */

  @media (max-width: 768px) {
    height: auto; /* Allow height to adjust on mobile */
    padding: 10px; /* Adjust padding for mobile */
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
`;

export const ContactMeInput = styled.input`
  background-color: #333333;
  border: 2px solid #555555;
  color: white;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%; /* Make input width responsive */
  max-width: 500px; /* Max width for larger screens */
`;

export const ContactMeButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: #87CEEB;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color: #6EA4C9;
    opacity: 0.8;
  }
`;

export const ContactMeTextarea = styled.textarea`
  background-color: #333333;
  border: 2px solid #555555;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%; /* Make textarea width responsive */
  max-width: 500px; /* Max width for larger screens */
  height: 100px;
`;

=======
  color: white;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ContactText = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  color: #cccccc;
`;

export const ContactLink = styled.a`
  color: #87ceeb;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    color: #6ea4c9;
    text-decoration: underline;
  }
`;

// Icon styling
export const Icon = styled.span`
  margin-right: 8px;
  color: #87ceeb;
  font-size: 18px;
  vertical-align: middle;
`;
>>>>>>> e1e8599 (machine learning)
export const ProjectsDiv = styled.div`
  background-color: #222222;
  width: 100%;
  height: auto; /* Height remains auto for responsiveness */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center align contents vertically */
  align-items: center; /* Center align items horizontally */
  padding: 10px;
  overflow-y: auto;
  color: white; 

  @media (max-width: 768px) {
    height: auto;
    padding: 5px; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
`;
export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px; 
  justify-content: center; 
  width: 100%; 

  @media (max-width: 768px) {
    flex-direction: column; /* Stack projects on smaller screens */
    align-items: center; /* Center items horizontally in column layout */
    gap: 10px; /* Reduced gap for smaller screens */
  }
`;

export const ViewGithub = styled.button`
  display: block;
  margin: 0;
  position: relative;
  padding: 10px 20px;
  background-color: #87CEEB;
  color: black;
  text-align: center;
  font-size: 20px;
  border: none; 
  border-radius: 5px; 
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color: #6EA4C9; 
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 16px; 
    width: 100%; /* Full width on mobile */
  }
`;

export const BlogSection = styled.div`
  background-color: #2c2c2c;
  padding: 40px; 
  color: white; 

  @media (max-width: 768px) {
    padding: 20px; /* Reduced padding for mobile */
  }
`;

export const BlogList = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  margin-top: 20px; 

  @media (max-width: 768px) {
    flex-direction: column; /* Stack blog items on smaller screens */
  }
`;

export const BlogItem = styled.div`
  background-color: #3c3c3c; 
  border-radius: 8px; 
  padding: 20px; 
  margin: 10px; 
  flex: 1 1 calc(30% - 20px); 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
  transition: transform 0.2s; 

  &:hover {
    transform: translateY(-5px); 
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Full width on mobile */
  }
`;

export const BlogTitle = styled.h3`
  color: #ffcc00; 
`;

export const BlogDescription = styled.p`
  color: #e0e0e0; 
`;

export const BlogLink = styled.a`
  color: #ffcc00; 
  text-decoration: none; 
  font-weight: bold;

  &:hover {
    text-decoration: underline; 
  }
`;
<<<<<<< HEAD
=======
export const Tabs = styled(ReactTabs)`
  width: 100%;
  color: white;
  margin: 0 auto;
`;

export const TabList = styled(ReactTabList)`
  display: flex;
  justify-content: center;
  background-color: #444444; 
  border-bottom: 2px solid #87CEEB;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack tabs on smaller screens */
    align-items: center;
  }
`;

export const Tab = styled(ReactTab)`
  list-style: none;
  padding: 10px 20px;
  cursor: pointer;
  color: #cccccc;
  font-weight: bold;
 
  transition: color 0.3s, border-color 0.3s;

  &.react-tabs__tab--selected {
    color: #87CEEB; 
    border-color: #87CEEB;
  }

  &:hover {
    color: #6EA4C9;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    text-align: center;
  }
`;

export const TabPanel = styled(ReactTabPanel)`
  padding: 20px;
  color: #e0e0e0;
  background-color: #222222; 

  border-top: none;

  &.react-tabs__tab-panel--selected {
    display: block;
  }
`;
>>>>>>> e1e8599 (machine learning)
