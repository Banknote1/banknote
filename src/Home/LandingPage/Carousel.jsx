import React, { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import Home from './Home';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import FinancialServices from '../FinancialServices/FinancialServices';
import FinancialSectors from '../FinancialServices/FinancialSectors';
import Partners from '../Partners/Partners';
import FAQS from '../FAQs/FAQs';
import { CSSTransition } from 'react-transition-group';
import './SlideAnimation.css';
import ParentFinancialServices from '../FinancialServices/ParentFinancialServices';
import ParentFinancialSectors from '../FinancialServices/ParentFinancialSectors';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 7);
    };

    const AutoScroll = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 7);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            handleNext();
        } else {
            handlePrev();
        }
    };

    useEffect(() => {
        if (activeIndex < 0) {
            const autoMoveTimer = setTimeout(() => {
                AutoScroll();
            }, 3000);

            return () => {
                clearTimeout(autoMoveTimer);
            };
        }
    }, [activeIndex]);

    useEffect(() => {
        // Add event listener for wheel scroll
        window.addEventListener('wheel', handleWheel);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [activeIndex]);

    return (
        <div>


            {activeIndex === 0 && <Hero />}
            {activeIndex === 1 && <Home />}
            <CSSTransition
                in={activeIndex === 2}
                timeout={{ enter: 1000, exit: 1000 }}
                classNames={{
                    enter: 'overlay-enter',
                    enterActive: 'overlay-enter-active',
                    exit: 'overlay-exit',
                    exitActive: 'overlay-exit-active',
                }}
                unmountOnExit
            >
                <ParentFinancialServices />
            </CSSTransition>
            <CSSTransition
                in={activeIndex === 3}
                timeout={{ enter: 1000, exit: 1000 }}
                classNames={{
                    enter: 'overlay-enter',
                    enterActive: 'overlay-enter-active',
                    exit: 'overlay-exit',
                    exitActive: 'overlay-exit-active',
                }}
                unmountOnExit
            >
                <ParentFinancialSectors />
            </CSSTransition>
            {activeIndex === 5 && <Partners />}
            {activeIndex === 6 && <FAQS />}

            <div className={styles.arrows}>
                <button className={styles.TopArrow} onClick={handlePrev}></button>
                <div className={styles.dots}>
                    {[0, 1, 2, 3, 5, 6].map((index) => (
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
