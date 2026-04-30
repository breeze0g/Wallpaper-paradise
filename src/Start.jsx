import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Start() {
  // Navigation links for mobile menu
  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Wallpapers', path: '/Wallpapers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="nav-links desktop-nav">
          <Link to="/">Start</Link>
          <Link to="/Wallpapers">Wallpapers</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="content">
          <h1>Welcome to Wallpaper Paradise</h1>
          <p>Discover stunning wallpapers for every mood and style</p>
        </div>
        {/* Moved Link OUTSIDE content div */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginTop: '-30px' }}>
          <Link to="/Premium" style={{ 
            textDecoration: 'none', 
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
            padding: '12px 30px',
            borderRadius: '50px',
            color: '#333',
            fontWeight: 'bold',
            transition: '0.3s',

          }}>
            Click to Download Premium Quality
          </Link>
        </div>
      </div>
      

      {/* Mobile Menu */}
      <MobileMenu links={navLinks} />
      
      {/* OLED Gallery Section */}
      <div className="oledgallery">
        <h1>Oled Display</h1>
      </div>
     
      {/* Gallery Images */}
      <div className="gallery">
        <img src="/boy.png" alt="boy" />
        <img src="/dabi.jpg" alt="dabi" />
        <img src="/miles.png" alt="miles" />
        <img src="/sasuke.jpg" alt="sasuke" />
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Wallpaper Paradise</h3>
            <p>Your ultimate destination for stunning HD wallpapers</p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
              <a href="#">🎨</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Start</Link></li>
              <li><Link to="/Wallpapers">Wallpapers</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/premium">Premium</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Anime</a></li>
              <li><a href="#">Nature</a></li>
              <li><a href="#">Gaming</a></li>
              <li><a href="#">Abstract</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Get latest wallpapers directly to your inbox</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Wallpaper Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Start;