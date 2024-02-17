import React from 'react';
import styles from './Footer.module.css';

function BottomButton() {
    return (
        <div className={styles.bottombuttoncontainer}>
            <button className={styles.button} >Contact Us</button>
        </div>
    );
}

export default BottomButton;
