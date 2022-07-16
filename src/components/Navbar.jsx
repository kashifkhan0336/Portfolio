import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <nav className="navbar">
            <div className="navbar__brand">
                <NavLink to="/">My Portfolio</NavLink>
            </div>
            <ul className="navbar__links">
                <NavLink to="/about" className="navbar__links--link">About</NavLink>
                <NavLink to="/skills" className="navbar__links--link">Skills</NavLink>
                <NavLink to="/projects" className="navbar__links--link">Projects</NavLink>
            </ul>
            <div className="navbar__contact-btn">
                <NavLink to="/contact" className="contact-btn">Contact</NavLink>
            </div>
        </nav>
    </div>
  )
}
