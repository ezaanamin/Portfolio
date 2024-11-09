import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles';
import CardFlip from './CardFlip';
<<<<<<< HEAD
import { ProjectsDesc } from '../project';
import ReactCardFlip from 'react-card-flip';
import { ProjectsDiv,ProjectsSection,ViewGithub } from '../styles';


function MyProjects() {
=======
import { ProjectsDesc } from '../web_project';
import { ML_Project } from '../ml_project';
import ReactCardFlip from 'react-card-flip';
import { ProjectsDiv,ProjectsSection,ViewGithub } from '../styles';
import { Tabs,TabList,TabPanel,Tab } from '../styles';
import 'react-tabs/style/react-tabs.css';
function MyProjects() {

>>>>>>> e1e8599 (machine learning)
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
<<<<<<< HEAD
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
=======
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Machine Learning</Tab>
        </TabList>
        
        <TabPanel>
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
        </TabPanel>
        
        <TabPanel>
          <ProjectsSection>
            {ML_Project.map((project) => (
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
        </TabPanel>
      </Tabs>
>>>>>>> e1e8599 (machine learning)
    </ProjectsDiv>
  );
}

export default MyProjects;
