import React from 'react';
import { FaHome, FaLinkedin, FaMailBulk, FaPhone ,FaInstagramSquare,FaGitSquare,} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <span>19 Semmancheri, Chennai, India</span>
          </div>
          <div className='phone'>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <span>9600214236</span>
          </div>
          <div className='email'>
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <span>saravananksearch@gmail.com.com</span>
          </div>
        </div>
        <div className='right'>
          
        </div>
        <div className='social'>
          {/*<FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />*/}
          <Link to="linkedin.com/in/saravanan-k-a11451271">
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </Link>
          <Link to="https://www.instagram.com/aldosaro/">
                <FaInstagramSquare size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </Link>
          <Link to="https://github.com/saravana-saro">
                <FaGitSquare size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
