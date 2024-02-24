import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import Hero from '../Hero/Hero';
import Home from './Home';
import FinancialServices from '../FinancialServices/FinancialServices';
import FinancialSectors from '../FinancialServices/FinancialSectors';
import Partners from '../Partners/Partners';

function MySlider() {
    const order = [Hero, Home, FinancialServices, FinancialSectors, Partners];
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setActiveIndex(index),
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        // Add event listener for wheel scroll
        const handleWheel = (event) => {
            if (event.deltaY > 0) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % order.length);
            } else {
                setActiveIndex((prevIndex) => (prevIndex - 1 + order.length) % order.length);
            }
        };

        window.addEventListener('wheel', handleWheel);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [order]);

    return (
        <div className="overlay">
            <Slider {...settings}>
                {order.map((Component, index) => (
                    <div key={index} className={styles.slide}>
                        <Component />
                    </div>
                ))}
            </Slider>

            <div className={styles.dots}>
                {order.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === activeIndex ? styles['active-dot'] : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default MySlider;
