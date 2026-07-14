import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="navbar__logo">
        RAJU
      </a>

      <button
        className="navbar__toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT ME
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            SKILLS
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            PORTFOLIO
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;