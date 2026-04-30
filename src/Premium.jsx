import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Premium.css';

function Premium() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Premium wallpapers collection
  const premiumWallpapers = [
    { id: 1, src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600", name: "Mystic Forest", category: "Nature", resolution: "4K", downloads: "25.5K", premium: true },
    { id: 2, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600", name: "Mountain Peak", category: "Nature", resolution: "4K", downloads: "18.2K", premium: true },
    { id: 3, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600", name: "Sunset Valley", category: "Nature", resolution: "4K", downloads: "32.1K", premium: true },
    { id: 4, src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600", name: "Northern Lights", category: "Nature", resolution: "4K", downloads: "42.8K", premium: true },
    { id: 5, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600", name: "Ocean Waves", category: "Nature", resolution: "4K", downloads: "15.3K", premium: true },
    { id: 6, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600", name: "Lake Reflection", category: "Nature", resolution: "4K", downloads: "22.7K", premium: true },
    { id: 7, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600", name: "Autumn Path", category: "Nature", resolution: "4K", downloads: "19.4K", premium: true },
    { id: 8, src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600", name: "Desert Dunes", category: "Nature", resolution: "4K", downloads: "11.9K", premium: true },
    { id: 9, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600", name: "Waterfall Dreams", category: "Nature", resolution: "4K", downloads: "28.3K", premium: true },
    { id: 10, src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600", name: "Majestic Canyon", category: "Nature", resolution: "4K", downloads: "31.6K", premium: true },
    { id: 11, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600", name: "Tranquil Lake", category: "Nature", resolution: "4K", downloads: "14.2K", premium: true },
    { id: 12, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600", name: "Starry Night", category: "Abstract", resolution: "4K", downloads: "45.1K", premium: true },
  ];

  // Get unique categories
  const categories = ['All', ...new Set(premiumWallpapers.map(w => w.category))];

  // Filter wallpapers based on search and category
  const filteredWallpapers = premiumWallpapers.filter(wallpaper => {
    const matchesSearch = wallpaper.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || wallpaper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Navigation links for mobile menu
  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Wallpapers', path: '/Wallpapers' },
    { name: 'Premium', path: '/Premium' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Function to handle download
  const handleDownload = async (imageSrc, imageName) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${imageName}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      const link = document.createElement('a');
      link.href = imageSrc;
      link.download = imageSrc.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Open modal with selected image
  const openModal = (wallpaper, index) => {
    setSelectedImage(wallpaper);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Navigate to previous image
  const goToPrevious = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredWallpapers[newIndex]);
    }
  };

  // Navigate to next image
  const goToNext = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < filteredWallpapers.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredWallpapers[newIndex]);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className="premium-container">
      {/* Desktop Navigation Links */}
      <div className="premium-nav-links desktop-nav">
        <Link to="/">Start</Link>
        <Link to="/Wallpapers">Wallpapers</Link>
        <Link to="/Premium">Premium</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Mobile Menu */}
      <MobileMenu links={navLinks} />

      {/* Premium Hero Section */}
      <div className="premium-hero">
        <div className="premium-badge">✨ PREMIUM COLLECTION ✨</div>
        <h1>Exclusive 4K Wallpapers</h1>
        <p>Curated collection of the most stunning high-resolution wallpapers</p>
        <div className="premium-stats">
          <span>📸 500+ Premium Images</span>
          <span>⭐ 4.9 Rating</span>
          <span>💎 100% Curated</span>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search premium wallpapers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Premium Wallpaper Grid */}
      <div className="premium-grid">
        {filteredWallpapers.map((wallpaper, index) => (
          <div key={wallpaper.id} className="premium-card">
            <div className="card-badge">⭐ PREMIUM</div>
            <div className="card-image" onClick={() => openModal(wallpaper, index)}>
              <img src={wallpaper.src} alt={wallpaper.name} />
              <div className="image-overlay">
                <span className="view-icon">👁️ Preview</span>
              </div>
            </div>
            <div className="card-info">
              <h3>{wallpaper.name}</h3>
              <div className="card-details">
                <span className="category">{wallpaper.category}</span>
                <span className="resolution">{wallpaper.resolution}</span>
                <span className="downloads">⬇️ {wallpaper.downloads}</span>
              </div>
              <button 
                className="download-btn premium-btn"
                onClick={() => handleDownload(wallpaper.src, wallpaper.name)}
              >
                💎 Download Premium
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredWallpapers.length === 0 && (
        <div className="no-results">
          <p>No premium wallpapers found. Try a different search!</p>
        </div>
      )}

      {/* Modal for viewing image before download */}
      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal} onKeyDown={handleKeyDown} tabIndex={0}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            
            {currentIndex > 0 && (
              <button className="modal-nav modal-prev" onClick={goToPrevious}>‹</button>
            )}
            
            {currentIndex < filteredWallpapers.length - 1 && (
              <button className="modal-nav modal-next" onClick={goToNext}>›</button>
            )}
            
            <img src={selectedImage.src} alt={selectedImage.name} />
            
            <div className="modal-info">
              <div className="premium-tag">⭐ PREMIUM QUALITY ⭐</div>
              <h2>{selectedImage.name}</h2>
              <p>Category: {selectedImage.category} | Resolution: {selectedImage.resolution}</p>
              <p className="image-counter">{currentIndex + 1} / {filteredWallpapers.length}</p>
              <button 
                className="modal-download-btn"
                onClick={() => {
                  handleDownload(selectedImage.src, selectedImage.name);
                  closeModal();
                }}
              >
                💎 Download Premium Wallpaper
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Wallpaper Paradise Premium</h3>
            <p>Exclusive 4K wallpapers for true enthusiasts</p>
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
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Nature</a></li>
              <li><a href="#">Abstract</a></li>
              <li><a href="#">City</a></li>
              <li><a href="#">Space</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Get premium wallpapers directly to your inbox</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Wallpaper Paradise Premium. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Premium;