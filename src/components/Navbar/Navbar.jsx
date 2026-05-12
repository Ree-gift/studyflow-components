import { useState, useEffect } from 'react';
import './Navbar.css';

/**
 * Navbar Component
 * A responsive navigation bar with logo, links, and action buttons.
 * 
 * @param {Array} links - Array of { label, href } objects for nav links
 * @param {Array} actions - Array of { label, variant, onClick } objects for buttons
 * @param {string} logoText - Text for the logo
 * @param {boolean} fixed - Whether navbar is fixed to top
 * @param {function} onMobileToggle - Callback for mobile menu toggle
 * @param {string} className - Additional CSS classes
 */
export default function Navbar({
  links = [],
  actions = [],
  logoText = 'StudyFlow',
  fixed = true,
  onMobileToggle,
  className = ''
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
    onMobileToggle?.();
  };

  return (
    <header className={`sf-navbar ${scrolled ? 'sf-navbar--scrolled' : ''} ${fixed ? 'sf-navbar--fixed' : ''} ${className}`}>
      <div className="sf-navbar__container">
        <a href="#" className="sf-navbar__logo">
          <span className="sf-navbar__logo-icon"></span>
          {logoText}
        </a>
        
        <nav className={`sf-navbar__nav ${mobileOpen ? 'sf-navbar__nav--open' : ''}`}>
          <ul className="sf-navbar__links">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="sf-navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="sf-navbar__actions">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`sf-navbar__action sf-navbar__action--${action.variant || 'outline'}`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        </nav>

        <button 
          className={`sf-navbar__mobile-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={handleMobileToggle}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}