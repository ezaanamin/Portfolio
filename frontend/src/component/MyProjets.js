import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectsDesc } from "../project";
import { ML_Project } from "../ml_project";
import { ProjectsDiv, ProjectsSection, ViewGithub } from "../styles";
import { Tabs, TabList, TabPanel, Tab } from "../styles/index.js";
import CardFlip from "../component/CardFlip.jsx"

function MyProjects() {
  return (
    <ProjectsDiv>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Machine Learning</Tab>
        </TabList>

        <TabPanel>
          <ProjectsSection>
            {ProjectsDesc.map((project) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CardFlip 
                  title={project.name} 
                  description={project.description} 
                  link={project.github} 
                />
              </motion.div>
            ))}
          </ProjectsSection>
        </TabPanel>

        <TabPanel>
          <ProjectsSection>
            {ML_Project.map((project) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CardFlip 
                  title={project.name} 
                  description={project.description} 
                  link={project.github} 
                />
              </motion.div>
            ))}
          </ProjectsSection>
        </TabPanel>
      </Tabs>
    </ProjectsDiv>
  );
}

export default MyProjects;
