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
        Hey there! 🚀 I'm Ezaan Amin, and diving into the world of software engineering has been an exhilarating journey. When it comes to coding, I bring unwavering enthusiasm, dedicating my all to every project. It's not just about the lines of code; when challenges arise, I channel that passion into finding creative solutions.

I hold a strong belief in the transformative power of technology to bring about meaningful change, and the excitement about the possibilities ahead keeps me fueled. From web development with Angela Yu to delving into machine learning and app development through Andrew Ng's courses, my skill set has become quite versatile.

Embarking on various projects, whether it's crafting restaurant websites or contributing to platforms with a positive impact, showcases my commitment and adaptability. The creativity I inject into finding solutions has become a valuable asset in this dynamic field.

I'm eager to share more about my coding journey, and if you check out my portfolio, you'll get a deeper insight into the diverse projects I've been a part of! 🌐 Let's connect and explore the endless possibilities that lie ahead in the ever-evolving world of software engineering! 🤝✨
</AnimatedParagraph>

          <AnimatedProfilePic ref={profilePicRef} src={Profile} />
        </AboutFlex>
      </AboutSection>
    </>
  );
}

export default About;
