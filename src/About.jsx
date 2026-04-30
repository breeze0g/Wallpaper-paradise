import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function About() {
  // Navigation links for mobile menu
  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Wallpapers', path: '/Wallpapers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="about-container">
      {/* Desktop Navigation Links */}
      <div className="home-nav-links desktop-nav">
        <Link to="/">Start</Link>
        <Link to="/Wallpapers">Wallpapers</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Mobile Menu - Hamburger Icon */}
      <MobileMenu links={navLinks} />
  
      <Link to="/" className="back-home-btn">
        ← Back to Home
      </Link>

      <div className="about-header">
        <h1>About Us</h1>
        <p>Meet the passion behind the pixels</p>
      </div>
      
      <div className="about-content">
        <div className="about-card">
          <div className="about-icon">🎨</div>
          <h2>Our Mission</h2>
          <p>Welcome to our wallpaper collection! We are here to provide you with the best selection of high-quality wallpapers for your devices. Whether you prefer landscapes, abstract art, or themed designs, we have all designs to target our Mobile users and desktop enthusiasts.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">💡</div>
          <h2>Our Vision</h2>
          <p>To be the leading destination for stunning, high-resolution wallpapers that inspire creativity and bring life to every screen across the globe.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">❤️</div>
          <h2>Support & Growth</h2>
          <p>Your support is our progress. Every download, every share, and every visit fuels our passion to create more amazing content just for you.</p>
        </div>

        <div className="about-card developer-card">
          <div className="about-icon">👨‍💻</div>
          <h2>Designed & Developed</h2>
          <p>Designed and developed with passion by <strong className="developer-name">Bildad Mwita</strong></p>
          <div className="developer-badge">
            <span>&hearts;</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Wallpapers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Downloads</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1000+</div>
          <div className="stat-label">Happy Users</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support</div>
        </div>
      </div>

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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/Wallpapers">Wallpapers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
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
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Wallpaper Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
