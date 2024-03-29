import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import style from '../LandingPage/Home.module.css'
import IconsSocial from '../Social-icons/IconsSocial';
import '../../index.css'
import { isVisible } from '@testing-library/user-event/dist/utils';
import { Howl, Howler } from 'howler';
const Hero = ({ isVisible, backFromDot }) => {
    const [animate, setAnimate] = useState(false);
    const [leaveAnimate, SetLeaveAnimate] = useState(false);
    useEffect(() => {
        // Trigger animation after the component has mounted
        setAnimate(true);
        SetLeaveAnimate(isVisible);
    }, [isVisible]);
    useEffect(() => {
        // Initialize Howler
        Howler.volume(1); // Adjust volume (0.0 to 1.0)


        // Play the sound
        const sound = new Howl({
            src: './sound.mp3',
            autoplay: true,
            loop: false,
            volume: 0.5, // Adjust volume (0.0 to 1.0)

        });
        // Clear listener after first call.
        sound.once('load', function () {
            sound.play();
        });
        sound.play();
        // Clean up function
        return () => {
            sound.unload();
        };
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (


        <div className='overlay'>
            <div className={`${styles.cont} `}>
                <div className={styles.finance}>
                    <div className={`${styles.headline} `} style={{ display: 'flex', flexDirection: 'row' }} >
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>Y</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>o</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>u</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>r</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}> &nbsp;</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>B</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-700%)', transition: 'transform .5s' }}>e</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-800%)', transition: 'transform .5s' }}>s</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-900%)', transition: 'transform .5s' }}>t</h1>
                    </div>
                    <div className={`${styles.headline} ${styles.fadeInThird}`}>
                        <h2>Financial</h2>
                        <h2>solutions</h2>
                    </div>
                    <div className={`${styles.des} ${styles.fadeInThird} `}>
                        <p>
                            We are a Financial Consulting Company offering essential methods for both large and small projects, aiding companies and institutions.
                        </p>
                    </div>
                    <div className={styles.numbers}>
                        <div className={styles.count}>
                            <div className={`${styles.numbCont}`}>

                                <div className={styles.subnumber}>
                                    <div className={styles.subTitleYellow} style={{ display: 'flex', flexDirection: 'row' }} >
                                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>+</h1>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>1</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>4</h2>
                                    </div>

                                </div>
                                <div className={styles.subMainTitleWhite} style={{ display: 'flex', flexDirection: 'row' }} >
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>Y</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>e</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>a</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>r</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}>s</h2>
                                </div>
                            </div>
                            <div className={`${styles.numbCont} `}>
                                <div className={styles.subnumber}>
                                    <div className={styles.subTitleYellow} style={{ display: 'flex', flexDirection: 'row' }} >
                                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>+</h1>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>5</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>0</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>0</h2>
                                    </div>

                                </div>
                                <div className={styles.subnumber}>
                                    <div className={styles.subMainTitleWhite} style={{ display: 'flex', flexDirection: 'row' }} >
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>H</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>a</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>p</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>p</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}>y</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>&nbsp;</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-700%)', transition: 'transform .5s' }}>C</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-800%)', transition: 'transform .5s' }}>l</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-900%)', transition: 'transform .5s' }}>i</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-1000%)', transition: 'transform .5s' }}>e</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-1100%)', transition: 'transform .5s' }}>n</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-1200%)', transition: 'transform .5s' }}>t</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-1300%)', transition: 'transform .5s' }}>s</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.numbCont} `}>
                                <div className={styles.subnumber}>
                                    <div className={styles.subTitleYellow} style={{ display: 'flex', flexDirection: 'row' }} >
                                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>+</h1>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>8</h2>
                                        <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>0</h2>
                                    </div>
                                </div>
                                <div className={styles.subMainTitleWhite} style={{ display: 'flex', flexDirection: 'row' }} >
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>P</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>a</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>r</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>t</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}>n</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>e</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-700%)', transition: 'transform .5s' }}>r</h2>
                                    <h2 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-800%)', transition: 'transform .5s' }}>s</h2>
                                </div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.Coinbg}>
                    <img src="./hero-image.png" alt="" />
                </div>

            </div>
        </div >

    );
}

export default Hero;