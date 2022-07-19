import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = "FrontEnd Portfolio - About";
  }, []);
  return (
    <div className="about-section">
      <div className="typewriter">
      <h1  className='about-heading heading'>About Me</h1>
      </div>
      <div className="about-container">
          <p>Hi there, My name is <span className='about-text'> Muhammad Maaz Ahmed</span>, I am a Frontend Developer. I can provide you a fully responsive good looking webiste with clean code i can also make a website more and more attractive with animations, I can also make basic <span className="about-text">Single Page Applications (SPA)</span> in ReactJs. I can also add backend functionality through PHP & MySql if you want <Link to="/contact" className='about-text'>Contact me</Link> if you are in need of a Developer</p>
      </div>
    </div>
  )
}
