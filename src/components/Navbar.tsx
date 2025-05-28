import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          AS
        </a>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <a href="/about" className="navbar-item">About</a>
        <a href="/projects" className="navbar-item">Projects</a>
        <a href="/contact" className="navbar-item">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 