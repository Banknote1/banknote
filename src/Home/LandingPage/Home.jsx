import React from 'react';
import styles from './Home.module.css';
import IconsSocial from '../Social-icons/IconsSocial';
import '../../index.css'
function Home() {
    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.bg}></div>
                <div className='overlay'>
                    <div className={styles.finance}>
                        <h1 className={styles.mainTitleWhite}>Connecting the Worlds,</h1>
                        <h1 className={styles.mainTitleYellow}> Exporting Success</h1>
                        <p>
                            From customs compliance to logistics management, we are dedicated to helping you navigate the complexities of international trade, ensuring your business thrives in the global
                        </p>
                        <div className=' d-flex justify-content-start align-items-start'>
                            <div>
                                <div>
                                    <span className={styles.subTitleYellow}>+</span>
                                    <span className={styles.subTitleWhite}>14</span>
                                </div>
                                <h1 className={styles.subMainTitleWhite}>Years</h1>
                            </div>
                            <div>
                                <div>
                                    <span className={styles.subTitleYellow}>+</span>
                                    <span className={styles.subTitleWhite}>500</span>
                                </div>
                                <h1 className={styles.subMainTitleWhite}>Happy Clients</h1>
                            </div>
                            <div>
                                <div>
                                    <span className={styles.subTitleYellow}>+</span>
                                    <span className={styles.subTitleWhite}>80</span>
                                </div>
                                <h1 className={styles.subMainTitleWhite}>Parteners</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Coinbg}>
                        <img src="/ship.png" alt="Ship Icon" />
                    </div>
                    <div>
                        <IconsSocial />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;
