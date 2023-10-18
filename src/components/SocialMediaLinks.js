// src/components/SocialMediaLinks.js

import React from 'react';

function SocialMediaLinks() {
  const socialMedia = [
    { name: 'GitHub', icon: '/github.png', link: 'https://github.com/yourusername' },
  ];

  return (
    <div className="social-media-links">
      {socialMedia.map((platform, index) => (
        <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
          <img src={platform.icon} alt={platform.name} />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
