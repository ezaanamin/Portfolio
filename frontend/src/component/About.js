import React, { useEffect, useRef } from 'react';
import Profile from '../images/Profile.jpeg';
import { SectionHeading,AboutSection,AnimatedParagraph,AboutFlex,AnimatedProfilePic } from '../styles';
function About() {
  const paragraphRef = useRef(null);
  const profilePicRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scale-up');
        } else {
          entry.target.classList.remove('scale-up');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }
    if (profilePicRef.current) {
      observer.observe(profilePicRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
      if (profilePicRef.current) {
        observer.unobserve(profilePicRef.current);
      }
    };
  }, []);

  return (
    <>
      <AboutSection>
        <SectionHeading>About Me</SectionHeading>
        <AboutFlex>
        <AnimatedParagraph ref={paragraphRef}>
  Greetings! I'm Ezaan Amin, a self-taught programmer passionate about turning innovative ideas into digital realities. My coding journey started in 2019 with C++, evolving into a versatile software engineer crafting meaningful applications.
  <ul>
    <li>🚀 <strong>Self-Taught Adventure:</strong> I explored the intricacies of C++ through self-directed learning, unlocking a realm where every line of code holds boundless potential.</li>
    <li>🌐 <strong>MERN Universe Specialist:</strong> Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), I blend sleek design with powerful functionality for seamless digital experiences.</li>
    <li>📱 <strong>Crafting Digital Experiences:</strong> Beyond coding, I design user-centric applications where technology meets user experience.</li>
    <li>💡 <strong>Mastering the Machine:</strong> Enchanted by machine learning, I've become a maestro orchestrating the symphony of algorithms and model training.</li>
    <li>📚 <strong>The Bookworm Coder:</strong> Outside of coding, I'm immersed in books like "Rich Dad Poor Dad" and "Elon Musk," drawing inspiration from tenacious innovators.</li>
    <li>🌍 <strong>Beyond the Screen:</strong> A dedicated climate activist, I leverage technology for a sustainable future, aiming to be a catalyst for positive change.</li>
    <li>🚀 <strong>Career Aspirations:</strong> Navigating the MERN universe, crafting digital experiences, and mastering machine learning are just the beginning. My goal is to be a positive change catalyst, contributing to a sustainable future.</li>
  </ul>
  Let's not just talk about technology; let's create it. Whether you're here to explore my projects, connect on shared interests, or embark on a coding adventure together, I'm thrilled to have you along for the ride!
</AnimatedParagraph>

          <AnimatedProfilePic ref={profilePicRef} src={Profile} />
        </AboutFlex>
      </AboutSection>
    </>
  );
}

export default About;
