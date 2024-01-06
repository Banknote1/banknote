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
          <img
            src="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Linkedin.svg"
            alt="Linkedin"
            data-hover="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Linkedin_hover.svg"
            data-normal="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Linkedin.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      <a href="https://api.whatsapp.com/send?phone=01154440599">
        <i>
          <img
            src="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Whatsupp.svg"
            alt="Whatsapp"
            data-hover="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Whatsup_hover.svg"
            data-normal="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Whatsupp.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      <a href="https://www.facebook.com/Banknoteeg">
        <i>
          <img
            src="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Facebook.svg"
            alt="Facebook"
            data-hover="https://test.banknoteconsult.com/wp-content/uploads/2024/01/facebook_hover.svg"
            data-normal="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Facebook.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      <a href="https://www.instagram.com/banknoteeg/">
        <i>
          <img
            src="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Insta.svg"
            alt="Instagram"
            data-hover="https://test.banknoteconsult.com/wp-content/uploads/2024/01/insta_hover.svg"
            data-normal="https://test.banknoteconsult.com/wp-content/uploads/2024/01/Insta.svg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </i>
      </a>
      <a href="#">
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
      </a>
    </div>
  );
}

export default IconsSocial;
