import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <nav className="navbar">
            <div className="navbar__brand">
                <NavLink to="/" className="brand">
                    My Portfolio
                </NavLink>
            </div>
            <ul className="navbar__links">
                <NavLink to="/" className={({isActive})=>isActive?"navbar__links--link active":"navbar__links--link"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=>isActive?"navbar__links--link active":"navbar__links--link"}>About</NavLink>
                <NavLink to="/skills" className={({isActive})=>isActive?"navbar__links--link active":"navbar__links--link"}>Skills</NavLink>
                <NavLink to="/projects" className={({isActive})=>isActive?"navbar__links--link active":"navbar__links--link"}>Projects</NavLink>
            </ul>
            <Link to="/contact" className="navbar__contact-btn">
                <div  className="contact-btn">
                    <span className='contact-btn--skew-fix'>Contact</span>
                </div>
            </Link>
            <div className='navbar__hamburger'>
                <HiMenuAlt3 className='hamburger' />
            </div>
        </nav>
    </div>
  )
}
