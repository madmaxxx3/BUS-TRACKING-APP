// Footer.js
import React from 'react';
import './Footer.css';
import toogle_light from '../assets/night.png';
import toogle_dark from '../assets/day.png';

const Footer = ({ theme, toggleMode }) => {
  return (
    <div className={`footer-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <section className='footer-subscription'>
        <l className='footer-subscription-heading'>
        Islamic University Of Science And Technology
        </l>
        <p className='address'>
             Awantipora,Jammu & kashmir-192122</p>
      </section>
      <div className='footer-links'>
        {/* Your link sections */}
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          </div>
          
          <div className='social-icons'>
            {/* Your social icons */}
          </div>
        </div>
      </section>
      <img onClick={toggleMode} src={theme === 'light' ? toogle_light : toogle_dark} alt="" className="toggle-icon" />
    </div>
  );
};

export default Footer;
