import React, { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import Home from './Home';
import Slider from 'react-slick';
import '../../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
        setAnimate(true);
    };

    useEffect(() => {
        // Automatically move to the second slide after 3 seconds
        const autoMoveTimer = setTimeout(() => {
            setActiveIndex(1);
        }, 3000);

        return () => {
            clearTimeout(autoMoveTimer);
        };
    }, []);

    useEffect(() => {
        // Trigger animation when activeIndex is 1
        if (activeIndex === 1) {
            setAnimate(true);
        }
    }, [activeIndex]);

    return (
        <div className='overlay'>
            {activeIndex === 0 && <Hero />}
            {activeIndex === 1 && animate && <Home animate={animate} setAnimate={setAnimate} />}
            <div className={styles.arrows}>
                <button className={styles.TopArrow} onClick={handlePrev}></button>
                <div className={styles.dots}>
                    {[0, 1].map((index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles['active-dot'] : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
                <button className={styles.bottomArrow} onClick={handleNext}></button>
            </div>
        </div>
    );
}

export default Carousel;
