import React, { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import Home from './Home';


function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // const handleNext = () => {
    //     setActiveIndex(1);
    // };

    // const handlePrev = () => {
    //     setActiveIndex(0);
    // };

    // const handleWheel = (event) => {
    //     if (event.deltaY > 0) {
    //         handleNext();
    //     } else {
    //         handlePrev();
    //     }
    // };

    useEffect(() => {
        // Add event listener for wheel scroll
        // window.addEventListener('wheel', handleWheel);

        // Auto-scroll to the second page after 5 seconds
        const autoScrollTimer = setTimeout(() => {
            setActiveIndex(1);
        }, 2000);

        // Remove the event listener and clear the timer when component unmounts
        return () => {
            // window.removeEventListener('wheel', handleWheel);
            clearTimeout(autoScrollTimer);
        };
    }, []);

    return (
        <div className='overlay'>
            {activeIndex === 0 && <Hero />}
            {activeIndex === 1 && <Home />}
        </div>
    );
}

export default Carousel;
