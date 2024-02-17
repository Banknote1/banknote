import React from 'react';
import styles from './IconsSocial.module.css'; // Correct import statement

function IconsSocial() {
  const handleMouseOver = (event) => {
    event.target.src = event.target.dataset.hover;
  };

  const handleMouseOut = (event) => {
    event.target.src = event.target.dataset.normal;
  };

  return (
    <div className={styles.socialButtons}>
      <a href="https://eg.linkedin.com/company/banknoteeg">
        <i>
          <img style={{ width: '32px' }}
            src="/socialicons/Linkedin.svg"
            alt="Linkedin"
            data-hover="/socialicons/Linkedin_hover.svg"
            data-normal="/socialicons/Linkedin.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      <a href="https://api.whatsapp.com/send?phone=01154440599">
        <i>
          <img style={{ width: '32px' }}
            src="/socialicons/Whatsupp.svg"
            alt="Whatsapp"
            data-hover="/socialicons/Whatsup_hover.svg"
            data-normal="/socialicons/Whatsupp.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      <a href="https://www.facebook.com/Banknoteeg">
        <i>
          <img style={{ width: '32px' }}
            src="/socialicons/Facebook.svg"
            alt="Facebook"
            data-hover="/socialicons/Facebook_hover.svg"
            data-normal="/socialicons/Facebook.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      <a href="https://www.instagram.com/banknoteeg/">
        <i>
          <img style={{ width: '32px' }}
            src="/socialicons/insta.svg"
            alt="Instagram"
            data-hover="/socialicons/Insta_hover.svg"
            data-normal="/socialicons/insta.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      {/* <a href="#">
        <i>
          <img
            src="https://test.banknoteconsult.com/wp-content/uploads/2024/01/X.svg"
            alt="X"
            data-hover="https://test.banknoteconsult.com/wp-content/uploads/2024/01/X_hover.svg"
            data-normal="https://test.banknoteconsult.com/wp-content/uploads/2024/01/X.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a> */}
    </div>
  );
}

export default IconsSocial;
