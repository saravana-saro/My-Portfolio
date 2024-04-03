import React from 'react';
import "./Skills.css";
import Heroimg2 from '../components/Heroimg2';
import javaIcon from '../assets/java-icon.png';
import JSPIcon from '../assets/JSP.png';
import Spring1Icon from '../assets/Spring1.png';
import SQLIcon from '../assets/SQL.png';
import HTMLIcon from '../assets/HTML.png';
import ReactIcon from '../assets/react.png';
import JSIcon from '../assets/Javascript.png';
import CSSIcon from '../assets/CSS.png'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="SKILLS" />  
    
      <div className='border-container'>
        <div className='border-left'>
          <div className="skill-item">
            <img src={javaIcon} alt="Java Icon" className="icon" />
            <span className="text">Core Java</span>
          </div>
          <div className="skill-item">
            <img src={JSPIcon} alt="Java Icon" className="icon" />
            <span className="text">Advanced Java</span>
          </div>
          <div className="skill-item">
            <img src={Spring1Icon} alt="Java Icon" className="icon" />
            <span className="text">Spring Boot</span>
          </div>
          <div className="skill-item">
            <img src={SQLIcon} alt="Java Icon" className="icon" />
            <span className="text">SQL</span>
          </div>
        </div>
        <div className='border-center'>
          <span className='Text'>Api</span>
        </div>

        <div className='border-right'>
          <div className="skill-item">
            <img src={HTMLIcon} alt="Java Icon" className="icon" />
            <span className="text">HTML</span>
          </div>
          <div className="skill-item">
            <img src={CSSIcon} alt="Java Icon" className="icon" />
            <span className="text">CSS</span>
          </div>
          <div className="skill-item">
            <img src={JSIcon} alt="Java Icon" className="icon" />
            <span className="text">Javascript</span>
          </div>
          <div className="skill-item">
            <img src={ReactIcon} alt="Java Icon" className="icon" />
            <span className="text">React</span>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Skills;
