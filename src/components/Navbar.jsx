import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    document.get
  }, [])

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar__brand">
          <NavLink to="/" className="brand">
            Maaz Ahmed
          </NavLink>
        </div>
        <ul className={menuOpen ? "navbar__links menu-open" : "navbar__links"}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar__links--link active" : "navbar__links--link"
            }
            onClick={() => {
                setMenuOpen(false)
                setOpen(false)
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar__links--link active" : "navbar__links--link"
            }
            onClick={() => {
              setMenuOpen(false)
              setOpen(false)
          }}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "navbar__links--link active" : "navbar__links--link"
            }
            onClick={() => {
              setMenuOpen(false)
              setOpen(false)
          }}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "navbar__links--link active" : "navbar__links--link"
            }
            onClick={() => {
              setMenuOpen(false)
              setOpen(false)
          }}
          >
            Projects
          </NavLink>
        <Link to="/contact" className={menuOpen ? "navbar__contact-btn btn-open" : "navbar__contact-btn"} onClick={() => {
                setMenuOpen(false)
                setOpen(false)
            }}>
          <div className="contact-btn">
            <span className="contact-btn--skew-fix">Contact</span>
          </div>
        </Link>
        </ul>
        <div className="navbar__hamburger">
          <Hamburger
          size={28}
            toggled={isOpen}
            toggle={setOpen}
            color="#FFB700"
            onToggle={(toggled) => {
              if (toggled) {
                setMenuOpen(prevState => !prevState)
              } else {
                setMenuOpen(prevState => !prevState)
              }
            }}
          />
        </div>
      </nav>
    </div>
  );
}
