import React from 'react';
import styles from './Home.module.css';
import IconsSocial from '../Social-icons/IconsSocial';

function Home() {
    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.bg}></div>
                <div className={styles.overlay}>
                    <div className={styles.finance}>
                        <h1 className={styles.mainTitleWhite}>Connecting the Worlds,</h1>
                        <h1 className={styles.mainTitleYellow}> Exporting Success</h1>
                        <p>
                            From customs compliance to logistics management, we are dedicated to helping you navigate the complexities of international trade, ensuring your business thrives in the global
                        </p>
                    </div>
                    <div className={styles.Coinbg}>
                        <img src="/ship.png" alt="Ship Icon" />
                    </div>
                </div>
                <div>
                    <IconsSocial />
                </div>
            </div>
        </>
    );
}

export default Home;
