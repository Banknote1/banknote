import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import IconsSocial from '../Social-icons/IconsSocial';
import '../../index.css'


function Home() {
    const [animate, setAnimate] = useState(false);
    console.log(animate);
    useEffect(() => {
        // Trigger animation whenever the 'animate' prop changes

        setAnimate(true);

    }, [setAnimate]);
    return (
        <>

            {/* <div className={styles.overlay}> */}
            <div className={styles.cont}>
                <div className={styles.finance}>
                    <div className={`${styles.headline} `} style={{ display: 'flex', flexDirection: 'row' }} >
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>C</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>o</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>n</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>n</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}>e</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>c</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-700%)', transition: 'transform .5s' }}>t</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-800%)', transition: 'transform .5s' }}>i</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-900%)', transition: 'transform .5s' }}>n</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-1000%)', transition: 'transform .5s' }}>g</h1>
                    </div>
                    <div className={`${styles.headline} `} style={{ display: 'flex', flexDirection: 'row' }} >
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-100%)', transition: 'transform .5s' }}>W</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-200%)', transition: 'transform .5s' }}>o</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-300%)', transition: 'transform .5s' }}>r</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-400%)', transition: 'transform .5s' }}>l</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-500%)', transition: 'transform .5s' }}>d</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-600%)', transition: 'transform .5s' }}>s</h1>
                        <h1 style={{ transform: animate ? 'translateY(0%)' : 'translateY(-700%)', transition: 'transform .5s' }}>,</h1>
                    </div>
                    <div className={`${styles.headline} `}>
                        <h2>Exporting</h2>
                        <h2>Success</h2>
                    </div>
                    <div className={`${styles.des}`}>
                        <p>
                            From customs compliance to logistics management, we are dedicated to helping you navigate the complexities of international trade, ensuring your business thrives in the global
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
                                </div>                            </div>
                        </div>
                    </div >



                </div >


                <div className={styles.ship}>
                    <img src="/EmptyShip.png" alt="Ship Icon" />

                </div>
                <div className={styles.ship2}>
                    <img src="/fullShip.png" alt="Ship Icon" />

                </div>
                <div className={styles.bg}></div>

            </div >
            {/* </div > */}
        </>
    );
}

export default Home;