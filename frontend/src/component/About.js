import React, { useEffect, useRef } from 'react';
import Profile from '../images/Profile.jpeg';
import { SectionHeading, AboutSection, AnimatedParagraph, AboutFlex, AnimatedProfilePic } from '../styles';

function About() {
  const paragraphRef = useRef(null);
  const profilePicRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-up');
          } else {
            entry.target.classList.remove('scale-up');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    );

    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (profilePicRef.current) observer.observe(profilePicRef.current);

    return () => {
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (profilePicRef.current) observer.unobserve(profilePicRef.current);
    };
  }, []);

  return (
    <AboutSection>
      <SectionHeading>About Me</SectionHeading>
      <AboutFlex>
        <AnimatedParagraph ref={paragraphRef}>
          Hey there! I’m Ezaan Amin, a passionate software developer and AI enthusiast based in Pakistan. My journey in technology is fueled by a fascination with how innovation can transform and enhance human experiences.

          With certifications in Web Development, Machine Learning, and Deep Learning, I bring a diverse skill set to the table. Currently, I’m focused on making an impact in the tech industry by securing a position in the UAE, where I can contribute to exciting projects and continue growing professionally.

          My expertise spans web development and AI, and I’m always eager to tackle new challenges and explore cutting-edge technologies. I’m currently working on several projects, including a social media platform designed to foster supportive communities and a range of applications for restaurant management and customer engagement. I also enjoy sharing insights on topics like AI, web development, and machine learning through my blog.

          Feel free to explore my portfolio to learn more about my projects and writings. If you’re interested in collaboration, discussing innovative ideas, or just chatting about the latest in tech, I’d love to connect!
        </AnimatedParagraph>

        <AnimatedProfilePic ref={profilePicRef} src={Profile} alt="Ezaan Amin" />
      </AboutFlex>
    </AboutSection>
  );
}

export default About;
