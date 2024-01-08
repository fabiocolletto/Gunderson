import React from 'react';
import './SocialMediaLinks.css';

import instagramLogo from '../images/instagram.svg';
import facebookLogo from '../images/facebook.svg';
import linkedinLogo from '../images/linkedin.svg';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-section">
      <a href="https://www.instagram.com/gundersonmarine" target="_blank" rel="noopener noreferrer">
        <img src={instagramLogo} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61554089351804" target="_blank" rel="noopener noreferrer">
        <img src={facebookLogo} alt="Facebook" />
      </a>
      <a href="https://www.linkedin.com/company/gunderson-marine-llc" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
