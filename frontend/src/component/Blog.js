import React from 'react'
import styled from 'styled-components';
import { SectionHeading } from '../styles';
const BlogSection = styled.div`
  background-color: #2c2c2c;
  height: 500px; /* Adjust the height as needed */
  color: white; /* Text color for the blog section */
`;


function Blog() {
  return (
    <BlogSection>
        <SectionHeading>Blog</SectionHeading>
    </BlogSection>
  )
}

export default Blog