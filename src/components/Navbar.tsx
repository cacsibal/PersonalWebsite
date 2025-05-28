import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Navbar.css';

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          AS
        </Link>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div 
        id="navbar-menu"
        className={`navbar-menu ${isOpen ? 'active' : ''}`}
        role="navigation"
      >
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`navbar-item ${location.pathname === path ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/cacsibal"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/charles-anton-sibal-3b3439209"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://instagram.com/anton.s.214"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;