import React, { useEffect, useRef } from 'react';
import Profile from '../images/Profile.jpeg';
import { SectionHeading,AboutSection,AnimatedParagraph,AboutFlex,AnimatedProfilePic } from '../styles';
function About() {
  const paragraphRef = useRef(null);
  const profilePicRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scale-up');
        } else {
          entry.target.classList.remove('scale-up');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }
    if (profilePicRef.current) {
      observer.observe(profilePicRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
      if (profilePicRef.current) {
        observer.unobserve(profilePicRef.current);
      }
    };
  }, []);

  return (
    <>
      <AboutSection>
        <SectionHeading>About Me</SectionHeading>
        <AboutFlex>
        <AnimatedParagraph ref={paragraphRef}>
        Hey there! I’m Ezaan Amin, a passionate software developer and AI enthusiast based in Pakistan. My journey in technology is driven by a fascination with how innovation can transform and enhance human experiences.

With certifications in Web Development, Machine Learning, and Deep Learning, I bring a diverse skill set to the table. I’m currently focused on making an impact in the tech industry by securing a position in the UAE, where I can contribute to exciting projects and continue growing professionally.

My expertise spans web development and AI, and I’m always eager to tackle new challenges and explore cutting-edge technologies. I’m working on several projects, including a social media platform aimed at building supportive communities and a range of applications for restaurant management and user interactions. I also enjoy writing about various tech topics, including AI, web development, and machine learning, which you can explore in the blog section.

Feel free to explore my portfolio to learn more about my projects and blogs, and connect with me if you’re interested in collaboration, discussing innovative ideas, or simply chatting about the latest developments in technology. I’m excited about new opportunities and look forward to connecting with you!
 
</AnimatedParagraph>

          <AnimatedProfilePic ref={profilePicRef} src={Profile} />
        </AboutFlex>
      </AboutSection>
    </>
  );
}

export default About;
