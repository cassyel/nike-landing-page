import React from 'react';
import './style.css';
import logo from '../../assets/nikeLogo.svg';
import facebookIcon from '../../assets/facebookicon.svg';
import instagramIcon from '../../assets/instagramicon.svg';
import youtubeIcon from '../../assets/youtubeicon.svg';

function Navbar() {
  return (
    <header>
      <div className="navbar-content">
        <div className="logo">
          <img src={ logo } alt="Logo NIKE" />
        </div>
        <div className="links">
          <p className="navbar-link">Home</p>
          <p className="navbar-link">Boys</p>
          <p className="navbar-link">Girls</p>
          <p className="navbar-link">Customize</p>
        </div>
        <div className="social-media">
          <a href="https://pt-br.facebook.com/nike/" target="_blank" rel="noreferrer">
            <img src={ facebookIcon } alt="Facebook NIKE Icon" />
          </a>
          <a href="https://www.instagram.com/nike/" target="_blank" rel="noreferrer">
            <img src={ instagramIcon } alt="Instagram NIKE Icon" />
          </a>
          <a href="https://www.youtube.com/c/nike/featured" target="_blank" rel="noreferrer">
            <img src={ youtubeIcon } alt="Youtube NIKE Icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
