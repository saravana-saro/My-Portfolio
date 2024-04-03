import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import './project.css';
import Footer from '../components/Footer';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" />
      <div className="text-column1 project">
        <h1>SpringBoot Project</h1>
        <h2>Online Movie Ticket Booking System</h2>
        <p>
          The Online Movie Ticket System is built on Spring Boot and uses Rest API architecture to simplify the booking and management of movie tickets. It provides a user-friendly interface, allowing customers to easily browse movies, choose showtimes, and securely buy tickets online. This improves the overall efficiency and convenience of the movie ticket booking process.
        </p>
        <h2>Technologies</h2>
        <p>Backend <small>:</small> <span>Spring Boot, Rest API</span></p>
        <p>FrontEnd <small>:</small> <span>HTML, CSS, JavaScript</span></p><br/><br/>
      </div>

      <div className="text-column1 project">
        <h1>React Project</h1>
        <h2>Built-in Portfolio</h2>
        <p>
          This portfolio showcases my expertise as a software developer specializing in ReactJS. With a passion for building dynamic and user-friendly web applications, I have utilized ReactJS extensively to create efficient and responsive solutions. My portfolio encompasses a range of projects demonstrating my proficiency in leveraging ReactJS to deliver exceptional user experiences.
        </p>
        <h2>Technologies</h2>
        <p>FrontEnd <small>:</small> <span>React JS</span></p>
      </div>
        <Footer />
    </div>
  )
}

export default Project;


