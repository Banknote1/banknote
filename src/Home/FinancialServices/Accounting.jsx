<<<<<<< HEAD
import React from 'react';
import Slider from './Slider';  
import styles from './FinancialService.module.css'; // Assuming you have a CSS module for styling

function FinancialServices() {
  return (
    <div className={styles.pageContainer}>
      {/* Other content for Financial Services component */}
      <Slider />
      {/* Additional components or content */}
    </div>
  );
}

export default FinancialServices;
=======
import React from 'react'
import styles from './FinancialServices.modules.css'
function FinancialServices() {
    return (
        <>
            <div className={styles.servicesbg} >
                <img src="/image.png" alt="" />
                <img src="/image2.png" alt="" />

            </div>
        </>
    )
}

export default FinancialServices
>>>>>>> 236c07eac71ccd4aae06a9d1ea3653d6dfaa7a47
