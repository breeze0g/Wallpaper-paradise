import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Wallpapers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation links for mobile menu
  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Wallpapers', path: '/Wallpapers' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' }
  ];

  // All your wallpapers
  const wallpapers = [
    { id: 1, src: "/boy.png", name: "Boy Art", category: "Anime", resolution: "4K", downloads: "12.5K" },
    { id: 2, src: "/dabi.jpg", name: "Dabi", category: "Anime", resolution: "4K", downloads: "8.2K" },
    { id: 3, src: "/gut.png", name: "Guts", category: "Anime", resolution: "4K", downloads: "15.3K" },
    { id: 4, src: "/miles.png", name: "Miles Morales", category: "Gaming", resolution: "4K", downloads: "10.7K" },
    { id: 5, src: "/sasuke.jpg", name: "Sasuke", category: "Anime", resolution: "HD", downloads: "9.8K" },
  ];

  // Get unique categories
  const categories = ['All', ...new Set(wallpapers.map(w => w.category))];

  // Filter wallpapers based on search and category
  const filteredWallpapers = wallpapers.filter(wallpaper => {
    const matchesSearch = wallpaper.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || wallpaper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <div className="home-container">
      {/* Desktop Navigation Links - RIGHT TOP CORNER */}
      <div className="home-nav-links desktop-nav">
        <Link to="/">Start</Link>
        <Link to="/Wallpapers">Wallpapers</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      {/* Mobile Menu - Hamburger Icon */}
      <MobileMenu links={navLinks} />

      {/* Hero Section */}
      <div className="home-hero">
        <h1>Wallpaper Gallery</h1>
        <p>Discover and download stunning wallpapers</p>
      </div>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search wallpapers..."
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

      {/* Wallpaper Grid - 4 per row */}
      <div className="wallpaper-grid">
        {filteredWallpapers.map((wallpaper, index) => (
          <div key={wallpaper.id} className="wallpaper-card">
            <div className="card-image" onClick={() => openModal(wallpaper, index)}>
              <img src={wallpaper.src} alt={wallpaper.name} />
              <div className="image-overlay">
                <span className="view-icon">👁️ View</span>
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
                className="download-btn"
                onClick={() => handleDownload(wallpaper.src, wallpaper.name)}
              >
                📥 Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredWallpapers.length === 0 && (
        <div className="no-results">
          <p>No wallpapers found. Try a different search!</p>
        </div>
      )}

      {/* Modal for viewing image before download */}
      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal} onKeyDown={handleKeyDown} tabIndex={0}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            
            {/* Previous Arrow */}
            {currentIndex > 0 && (
              <button className="modal-nav modal-prev" onClick={goToPrevious}>
                ‹
              </button>
            )}
            
            {/* Next Arrow */}
            {currentIndex < filteredWallpapers.length - 1 && (
              <button className="modal-nav modal-next" onClick={goToNext}>
                ›
              </button>
            )}
            
            <img src={selectedImage.src} alt={selectedImage.name} />
            
            <div className="modal-info">
              <h2>{selectedImage.name}</h2>
              <p>Category: {selectedImage.category} | Resolution: {selectedImage.resolution}</p>
              <p className="image-counter">
                {currentIndex + 1} / {filteredWallpapers.length}
              </p>
              <button 
                className="modal-download-btn"
                onClick={() => {
                  handleDownload(selectedImage.src, selectedImage.name);
                  closeModal();
                }}
              >
                📥 Download Now
              </button>
            </div>
          </div>
        </div>
      )}

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
              <li><Link to="/Wallpapers">Wallpapers</Link></li>
              <li><Link to="/about">About Us</Link></li>
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

export default Wallpapers;