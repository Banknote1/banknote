import React from 'react';
import styles from './Home.module.css';
import IconsSocial from '../Social-icons/IconsSocial';
import '../../index.css'
function Home() {
    return (
        <>
            <div className={styles.bg}></div>
            <div className={styles.overlay}>
                <div className={styles.finance}>
                    <h1 className={styles.mainTitleWhite}>Connecting the Worlds,</h1>
                    <h1 className={styles.mainTitleYellow}> Exporting Success</h1>
                    <p>
                        From customs compliance to logistics management, we are dedicated to helping you navigate the complexities of international trade, ensuring your business thrives in the global
                    </p>
                    <div className={`d-flex justify-content-start align-items-start ${styles.count}`}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className={`${styles.box}`} >
                                <span className={styles.subTitleYellow}>+</span>
                                <span className={styles.subTitleWhite}>14</span>
                            </div>

                            <h2 className={styles.subMainTitleWhite}>Years</h2>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className={`${styles.box}`}>
                                <span className={styles.subTitleYellow}>+</span>
                                <span className={styles.subTitleWhite}>500</span>
                            </div>
                            <h2 className={styles.subMainTitleWhite}>Happy Clients</h2>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className={`${styles.box}`} >
                                <span className={styles.subTitleYellow}>+</span>
                                <span className={styles.subTitleWhite}>80</span>
                            </div>

                            <h2 className={styles.subMainTitleWhite}>Parteners</h2>
                        </div>
                    </div>
                </div >
                <div className={styles.ship}>
                    <img src="/ship.png" alt="Ship Icon" />
                </div>

                <div>
                    <IconsSocial />
                </div>
            </div >

        </>
    );
}

export default Home;

