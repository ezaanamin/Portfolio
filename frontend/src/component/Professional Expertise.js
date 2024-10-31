import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles';
import { skills } from '../skills';

const ProfessionalExpertiseSection = styled.div`
  background-color: #1a1a1a;
  height: 300px;
  width: 100%;

  @media (max-width: 768px) {
    height: 600px;
  }
`;

const Skills = styled.div`
  background-color: #333333;
  border: 2px solid #444444;
  height: 150px;
  width: 400px;
  border-radius: 10px;
  color: white;
  margin-right: 25px;
  opacity: 0;
  transform: translateY(20px); /* Initial translateY for the animation effect */
  transition: opacity 3s ease, transform 3s ease;
  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center the items vertically */
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
