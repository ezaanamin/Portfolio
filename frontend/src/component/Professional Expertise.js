import React from 'react'
import styled from 'styled-components'
import { SectionHeading } from '../styles'
function ProfessionalExpertise() {
  const ProfessionalExpertiseSection=styled.div`
  background-color:#1a1a1a;
  height:200px;
  width:100%;
  
  
  
  
  `
  const Skills = styled.button`
  background-color: #333333;
  border: 2px solid #444444; 
  height: 100px;
  width: 200px;
  border-radius: 10px;
  color: white; 
`;


  return (
   <ProfessionalExpertiseSection>
<SectionHeading>Professional Expertise</SectionHeading>


   </ProfessionalExpertiseSection>
  )
}

export default ProfessionalExpertise