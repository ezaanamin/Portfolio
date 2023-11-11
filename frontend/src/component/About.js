import React from 'react'
import styled from 'styled-components'

function About() {
    const AboutSection=styled.div`
    background-color:#111111;
    height:800px;
    
    
    `
    const AboutHeading=styled.h1`
    color:white;
    text-align:center;
  
    
    
    `
  return (
   <AboutSection>
<AboutHeading>About Me</AboutHeading>


   </AboutSection>
  )
}

export default About