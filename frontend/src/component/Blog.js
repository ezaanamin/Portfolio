import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles';
import { blogPosts } from './blogpost.js';
import { BlogDescription,BlogItem,BlogSection,BlogTitle,BlogList,BlogLink } from '../styles';


function Blog() {
  return (
    <BlogSection>
      <SectionHeading>Blog</SectionHeading>
      <BlogList>
        {blogPosts.map((post, index) => (
          <BlogItem key={index}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogDescription>{post.description}</BlogDescription>
            <BlogLink href={post.link} target="_blank" rel="noopener noreferrer">Read more</BlogLink>
          </BlogItem>
        ))}
      </BlogList>
    </BlogSection>
  );
}

export default Blog;
