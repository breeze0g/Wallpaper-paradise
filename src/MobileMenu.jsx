import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu">
      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="mobile-dropdown">
          <div className="mobile-dropdown-content">
            {links.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="mobile-link"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;