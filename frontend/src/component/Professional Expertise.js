import React, { useEffect, useRef, useState } from 'react';
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

const SkillsCard = styled.div`
  margin: 10px;
  flex: 1 1 300px;
  max-width: 400px;
  box-sizing: border-box;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #333333, #555555); /* Darker gradient */
  transform-style: preserve-3d;
  transition: transform 0.2s ease-out; /* Transition for smooth effect */
  position: relative;
  margin: 50px;

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: transform 0.3s, color 0.3s ease-in-out;
    z-index: 1;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    opacity: 0.85;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover h2 {
    transform: scale(1.2); /* Grow the title on hover */
    color: #3498db; /* Accent color */
  }

  &:hover p {
    opacity: 1; /* Make content fully visible on hover */
  }
`;

const SkillsComponent = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      setRotation({ x: xAxis, y: yAxis });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    boxRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      boxRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ProfessionalExpertiseSection>
      <SectionHeading>Professional Expertise</SectionHeading>
      <SkillSection>
        {skills.map((skill, index) => (
          <SkillsCard key={index}>
            <Box
              ref={boxRef}
              style={{
                transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
              }}
            >
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </Box>
          </SkillsCard>
        ))}
      </SkillSection>
    </ProfessionalExpertiseSection>
  );
};

export default SkillsComponent;
