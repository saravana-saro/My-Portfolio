import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {FaBars ,FaTimes} from "react-icons/fa";



const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    // color chane with scroll
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "Header header-bg" : 'Header'}>
        <Link to="/">
            <h1>Develop<span>er</span></h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
         <div className='contact'>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </div>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? ( <FaTimes Size={20} style={{color : "#fff"}} />) :( <FaBars Size={20} style={{color : "#fff"}} />) }
        </div>
    </div>
  )
}

export default Navbar