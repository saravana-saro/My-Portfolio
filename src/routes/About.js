import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import './About.css';
import Footer from '../components/Footer';

const About = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the first render
    setAnimate(false);
  }, []);

  return (
  <div>
    <div className="about-container"> 
      <Navbar />
      <Heroimg2 heading="ABOUT" />

      <div className={`About about-content ${animate ? 'animate' : ''}`}>
        <div className="text-column">
        <div className='certificate'>
          <h2>Basic Intro</h2>
          <p>
            Hello there! My name is <span>Saravanan</span>, and I am thrilled to share a bit about myself with you.<br /><br />
          </p>
          </div>

          <div className='certificate'>
          <h2>Education</h2>
          <p>
            I have completed my <span>Master of Computer Applications </span>(MCA), which has equipped me with a solid foundation in various aspects of computer science and software development.<br /><br />
          </p>

          </div>
          <div className='certificate'>
          <h2>Certificate Course</h2>
          <p>
            During my academic journey, I developed a keen interest in programming, particularly in Java. I successfully completed a comprehensive<span>Java course</span> , where I honed my skills and gained a deeper understanding of object-oriented programming principles and<span> advanced Java </span>concepts.<br /><br />
          </p>
          </div>

          <div className='certificate'>
          <h2>Additionally Larn</h2>
          <p>
            In addition to Java, I am proficient in a range of other technologies essential for modern software development. I am well-versed in <span>React.js</span> for building dynamic and interactive user interfaces, <span>HTML</span>and<span>CSS</span> for crafting visually appealing web pages, and <span>JavaScript</span> for adding functionality and interactivity to web applications. Moreover, I have a strong grasp of <span>SQL</span>, enabling me to efficiently manage and manipulate data in relational databases.<br /><br />
          </p>
        </div>

        <div className='certificate'>
          <h2>Thank You</h2>
          <p>
            Thank you for taking the time to learn more about me. I look forward to connecting with you and exploring potential collaborations.<br /><br />
          </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
