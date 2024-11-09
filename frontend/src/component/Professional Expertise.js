import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles';
import { skills } from '../skills';

const ProfessionalExpertiseSection = styled.div`
  background-color: #1a1a1a;
  padding: 20px; 
  width: 100%;
  box-sizing: border-box; 
  
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Skills = styled.div`
  background-color: #333333;
  border: 2px solid #444444;
  border-radius: 10px;
  color: white;
  margin: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease; 
  flex: 1 1 300px; 
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px 0;
    height: auto; 
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

const animateOnScroll = () => {
  const skillBoxes = document.querySelectorAll('.skill-box');

  const options = {
    threshold: 0.2, // Adjust as needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view'); // Remove the class when not intersecting
      }
    });
  }, options);

  skillBoxes.forEach((box) => {
    observer.observe(box);
  });
};

const SkillsComponent = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <ProfessionalExpertiseSection>
      <SectionHeading>Professional Expertise</SectionHeading>
      <SkillSection>
        {skills.map((skill, index) => (
          <Skills className="skill-box" key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </Skills>
        ))}
      </SkillSection>
    </ProfessionalExpertiseSection>
  );
};

export default SkillsComponent;
