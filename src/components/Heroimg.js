import React from 'react'
import "./Heroimg.css";
import IntroImg from "../assets/intro-bg.jpeg"
import { Link } from 'react-router-dom';


const Heroimg = (props) => {

  const handleDownload = () => {
    const url = 'https://drive.google.com/uc?export=download&id=19n-__vgcDAG9lnmjH2FfmqakNw6U5sM-';
    console.log("hi");
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Saravanan_Resume.pdf');
    document.body.appendChild(link);
    link.click();
};

  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt="IntroImg" width={"100%"} height={"100%"} />
        </div>
        <div className='content'>
            <p>HI, I'M Looking For A  job</p>
            <h1>FullStack Developer</h1>
        <div className='button'>
            <Link to="/project" className='btn pro'>Projects</Link>
            <Link onClick={handleDownload} to="#"className='btn btn-light dwonload'>Dwonload CV</Link>
         
        </div>
      </div>
    </div>
  )
}


export default Heroimg