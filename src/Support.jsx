import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Support() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Navigation links for mobile menu
  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Wallpapers', path: '/Wallpapers' },
    { name: 'Premium', path: '/Premium' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Support', path: '/support' }
  ];

  const donationAmounts = [5, 10, 20, 50, 100];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalAmount = selectedAmount || customAmount;
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedAmount(null);
        setCustomAmount('');
        setPaymentMethod('');
        setDonorName('');
        setDonorEmail('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="support-container">
      {/* Desktop Navigation */}
      <div className="support-nav-links desktop-nav">
        <Link to="/">Start</Link>
        <Link to="/Wallpapers">Wallpapers</Link>
        <Link to="/Premium">Premium</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/support">Support</Link>
      </div>

      {/* Mobile Menu */}
      <MobileMenu links={navLinks} />

      {/* Support Header */}
      <div className="support-header">
        <div className="support-badge">❤️ SUPPORT US ❤️</div>
        <h1>Help Us Grow</h1>
        <p>Your generous donations help us create more amazing wallpapers</p>
      </div>

      {/* Main Content */}
      <div className="support-wrapper">
        {/* Left Side - Donation Info */}
        <div className="support-info">
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>We provide high-quality wallpapers for free. Your support keeps this dream alive!</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">💝</div>
            <h3>Why Donate?</h3>
            <p>• Access to exclusive premium content<br />• Help us add more wallpapers weekly<br />• Support our development team<br />• Get early access to new features</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">🔒</div>
            <h3>Secure Payments</h3>
            <p>All transactions are encrypted and secure. Your payment information is safe with us.</p>
          </div>
        </div>

        {/* Right Side - Donation Form */}
        <div className="support-form-section">
          <h2>Make a Donation</h2>
          <p>Choose how much you'd love to donate</p>
          
          <form onSubmit={handleSubmit}>
            {/* Donor Information */}
            <div className="form-group">
              <label>Your Name (Optional)</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email Address (Optional)</label>
              <input
                type="email"
                placeholder="Enter your email for updates"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
              />
            </div>

            {/* Donation Amount */}
            <div className="form-group">
              <label>Donation Amount (USD)</label>
              <div className="amount-buttons">
                {donationAmounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    ${amount}
                  </button>
                ))}
                <div className="custom-amount">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    min="1"
                    step="1"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="form-group">
              <label>Payment Method</label>
              <div className="payment-methods">
                <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-icon">💳</div>
                  <div className="payment-info">
                    <strong>Credit/Debit Card</strong>
                    <span>Visa, Mastercard, American Express</span>
                  </div>
                </label>

                <label className={`payment-option ${paymentMethod === 'mpesa' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-icon">📱</div>
                  <div className="payment-info">
                    <strong>M-Pesa</strong>
                    <span>Pay with M-Pesa (Kenya)</span>
                  </div>
                </label>
              </div>
            </div>

            {/* M-Pesa Details (shown only when M-Pesa is selected) */}
            {paymentMethod === 'mpesa' && (
              <div className="mpesa-details">
                <div className="form-group">
                  <label>M-Pesa Phone Number</label>
                  <input
                    type="tel"
                    placeholder="07XX XXX XXX"
                    pattern="[0-9]{10}"
                  />
                  <small>Enter the phone number registered with M-Pesa</small>
                </div>
                <div className="mpesa-instruction">
                  <p>📱 You will receive a prompt on your phone to complete payment</p>
                </div>
              </div>
            )}

            {/* Card Details (shown only when Card is selected) */}
            {paymentMethod === 'card' && (
              <div className="card-details">
                <div className="form-row">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" maxLength="5" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="password" placeholder="123" maxLength="4" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="Name on card" />
                </div>
              </div>
            )}

            <button 
              type="submit" 
              className="donate-btn"
              disabled={!selectedAmount && !customAmount || !paymentMethod || isSubmitting}
            >
              {isSubmitting ? (
                <>⏳ Processing...</>
              ) : (
                <>❤️ Donate ${selectedAmount || customAmount || '0'}</>
              )}
            </button>

            {showSuccess && (
              <div className="success-message">
                ✓ Thank you for your generous donation! Your support means the world to us! ❤️
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
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
              <li><Link to="/Premium">Premium</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/support">Support</Link></li>
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

export default Support;