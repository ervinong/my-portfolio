import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <div className="desktop_menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#footer">Contact</a>
      </div>
      <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✕" : "☰"}
      </div>
      {isMobileMenuOpen && (
        <div className={`mobile_menu_overlay ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile_menu">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#footer" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
