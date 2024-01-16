import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import style from '../LandingPage/Home.module.css'
import IconsSocial from '../Social-icons/IconsSocial';
import '../../index.css'
const Hero = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after the component has mounted
        setAnimate(true);
    }, []);

    return (
        <div className={styles.homeContainer}>
            <div className={styles.bg}></div>
            <div className={style.overlay}>
                <div className={styles.finance}>
                    <div className={styles.headline} style={{ display: 'flex', flexDirection: 'row' }} >
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>Y</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>o</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>u</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>r</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}> &nbsp;</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>B</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>e</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>s</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>t</h1>


                    </div>
                    <h1 className={styles.mainTitleYellow}>Financial</h1>
                    <h1 className={styles.mainTitleYellow}>solutions</h1>
                    <p>
                        We are a Financial Consulting Company offering essential methods for both large and small projects, aiding companies and institutions.
                    </p>

                    <div className={`d-flex justify-content-start align-items-start ${styles.count}`}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='p-3'>
                                <span className={styles.subTitleYellow}>+</span>
                                <span className={styles.subTitleWhite}>14</span>
                            </div>
                            <h2 className={styles.subMainTitleWhite}>Years</h2>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='p-3'>
                                <span className={styles.subTitleYellow}>+</span>
                                <span className={styles.subTitleWhite}>500</span>
                            </div>
                            <h2 className={styles.subMainTitleWhite}>Happy Clients</h2>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='p-3'>
                                <span className={styles.subTitleYellow}>+</span>
                                <span className={styles.subTitleWhite}>80</span>
                            </div>
                            <h2 className={styles.subMainTitleWhite}>Partners</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.Coinbg}>
                    <img src="./hero-image.png" alt="" />
                </div>
                <div>
                    <IconsSocial />
                </div>
            </div>
        </div>
    );
}

export default Hero;
