// Slider.jsx
import React from 'react';
import styles from './FinancialService.module.css'; // Assuming the CSS module is in the same directory

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContent}>
        <div className={styles.sliderText}>
          <h2 className={styles.head1}>  Accounting</h2>
          <h2 className={styles.head2}>Advisory Services</h2>
          <p>Banknote experts guide you through difficult, complicated challenges brought on by transactions and corporate choices.</p>
        </div>
        <div className={styles.sliderImage}>
          <img src="/AAS.png" alt="Slider Image" />
        </div>
      </div>
     
        
      </div>
  
  );
};

export default Slider;
