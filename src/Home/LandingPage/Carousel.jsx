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
function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    };

    const AutoScroll = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
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
        if (activeIndex < 1) {
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

        // Remove the event listener when component unmounts
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [activeIndex]);

    return (
        <div className='overlay'>

            {activeIndex === 0 && <Hero />}
            {activeIndex === 1 && <Home />}

        </div>
    );
}

export default Carousel;