import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Navigation links for mobile menu
  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Wallpapers', path: '/Wallpapers' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your WhatsApp number (without + or spaces)
    const phoneNumber = '254794475619'; // Replace with your WhatsApp number
    
    // Format the message for WhatsApp
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Desktop Navigation Links - Right Top Corner */}
      <div className="contact-nav-links desktop-nav">
        <Link to="/">Start</Link>
        <Link to="/Wallpapers">Wallpapers</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      {/* Mobile Menu - Hamburger Icon */}
      <MobileMenu links={navLinks} />

      {/* Contact Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries, special requests, or feedback</p>
      </div>

      {/* Contact Content */}
      <div className="contact-wrapper">
        <div className="contact-info-section">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p> Wallpaper Street<br />DC Universe</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email Us</h3>
            <p>Breezemarlon272@gmail.com<br />Breezemarlon272@gmail.com</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Call Us</h3>
            <p>0794475619<br />0794475619</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a message</h2>
          <p>We are looking forward to your interactions</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your queries, special requests, or feedback..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message ✉️
            </button>
            
            {submitted && (
              <div className="success-message">
                ✓ Redirecting to WhatsApp! Send your message there.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer - Same as Home */}
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
          
          {/* <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Get latest wallpapers directly to your inbox</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div> */}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Wallpaper Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;