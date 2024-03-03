import React from 'react';
import styles from './IconsSocial.module.css'; // Correct import statement

function IconsSocial() {
  const handleMouseOver = (event) => {
    event.target.src = event.target.getAttribute('data-hover');
  };

  const handleMouseOut = (event) => {
    event.target.src = event.target.getAttribute('data-normal');
  };

  return (
    <div className={styles.socialButtons}>
      <a href="https://eg.linkedin.com/company/banknoteeg">
        <img style={{ width: '32px' }}
          src="/socialicons/Linkedin.svg"
          alt="Linkedin"
          data-hover="/socialicons/Linkedin_hover.svg"
          data-normal="/socialicons/Linkedin.svg"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </a>
      <a href="https://api.whatsapp.com/send?phone=01154440599">
        <img style={{ width: '32px' }}
          src="/socialicons/Whatsupp.svg"
          alt="Whatsapp"
          data-hover="/socialicons/Whatsup_hover.svg"
          data-normal="/socialicons/Whatsupp.svg"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </a>
      <a href="https://www.facebook.com/Banknoteeg">
        <img style={{ width: '32px' }}
          src="/socialicons/Facebook.svg"
          alt="Facebook"
          data-hover="/socialicons/Facebook_hover.svg"
          data-normal="/socialicons/Facebook.svg"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </a>
      <a href="https://www.instagram.com/banknoteeg/">
        <img style={{ width: '32px' }}
          src="/socialicons/Insta.svg"
          alt="Instagram"
          data-hover="/socialicons/Insta_hover.svg"
          data-normal="/socialicons/Insta.svg"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </a>
    </div>
  );
}

export default IconsSocial;
