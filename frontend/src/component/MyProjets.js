import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles';
import CardFlip from './CardFlip';
import { ProjectsDesc } from '../project';
import ReactCardFlip from 'react-card-flip';
import { ProjectsDiv,ProjectsSection,ViewGithub } from '../styles';


function MyProjects() {
  const [flippedStates, setFlippedStates] = useState({});

  const handleFlip = (projectName) => {
    setFlippedStates((prevState) => ({
      ...prevState,
      [projectName]: !prevState[projectName],
    }));
  };

  return (
    <ProjectsDiv>
      <SectionHeading>My Projects</SectionHeading>
      <ProjectsSection>
        {ProjectsDesc.map((project) => (
          <ReactCardFlip
            key={project.name}
            isFlipped={flippedStates[project.name] || false}
            flipDirection="horizontal"
          >
            <div
              style={{
                width: '350px',
                height: '350px',
                backgroundColor: '#333333', 
                color: 'white', 
                borderRadius: '8px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer', 
              }}
              onClick={() => handleFlip(project.name)}
              className="front"
            >
              <h2 style={{ textAlign: 'center', padding: 20 }}>{project.name}</h2>
              <h3 style={{ textAlign: 'center', padding: 20, fontWeight: 'normal' }}>
                {project.description}
              </h3>
            </div>
  
            <div
              style={{
                width: '350px',
                height: '350px',
                backgroundColor: '#2A2A2A', 
                color: 'white',
                borderRadius: '8px', 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer', 
              }}
              onClick={() => handleFlip(project.name)}
              className="back"
            >
              <a href={project.github} style={{ textDecoration: 'none' }}>
                <ViewGithub>View on Github</ViewGithub>
              </a>
            </div>
          </ReactCardFlip>
        ))}
      </ProjectsSection>
    </ProjectsDiv>
  );
}

export default MyProjects;
