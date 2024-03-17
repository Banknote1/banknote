import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Landing.module.css';
import './styles.css';
import CompanyNumbers from './CompanyNumbers';

function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const handleOurProductClick = () => {

        navigate('/Comingsoon');
    }
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const interval = setInterval(() => {
            const nextIndex = activeIndex === 0 ? 1 : 0;
            setActiveIndex(nextIndex);
        }, 5000); // Change slide every 5 seconds

        window.addEventListener('resize', handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeIndex]);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <div id="carouselExampleFade" className="carousel" data-bs-ride="carousel" style={{ height: '500px' }}>
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''} `}>

                    <div className="row justify-content-center ms-2 ms-md-5 ml-2 ml-md-5">

                        <div className={`col-8 `} style={{ width: '60%' }}>
                            <div className='mb-3'>
                                <h1 className={styles.MainTitleWhite}> Your Best</h1>
                                <h1 className={styles.MainTitleYellow}> Financial Solutions</h1>
                            </div>
                            <div className='mb-3'>
                                <p className={styles.subParagraph}> We are Financial Consulting Company offers essential methods for both large and small projects, aiding companies and institutions.</p>
                            </div>


                        </div>
                        <div className="col-4" style={{ width: '40%' }}>
                            <img src="/MobileCoin.png" alt="" style={{ height: '18rem' }} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '1.5rem' }}>
                        {windowWidth > 360 && windowWidth <= 1024 && (
                            <div className="company-numbers-wrapper ">
                                <CompanyNumbers />
                            </div>
                        )}
                    </div>
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <div className="row justify-content-center ms-2 ms-md-5 ml-2 ml-md-5">
                        <div className={`col-8 `}>
                            <div className='mb-3'>
                                <h1 className={styles.MainTitleWhite}> Exporting &  <span className={styles.MainTitleYellow}>Trading</span></h1>
                            </div>
                            <div className='mb-3'>
                                <p className={styles.subParagraph}>we offer a comprehensive suite of services to streamline your importing operations in various trads. </p>
                            </div>
                            <div className="mb-3" onClick={handleOurProductClick}>
                                <a href="" className='discover'> Discover our Products   </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 18 17" fill="none">
                                    <g clip-path="url(#clip0_1112_3956)">
                                        <path d="M9.74063 3.85938H4.17188L7.88438 8.5L4.17188 13.1406H9.74063L13.4531 8.5L9.74063 3.85938Z" stroke="#DDB96E" stroke-width="0.515625" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1112_3956">
                                            <rect width="16.5" height="16.5" fill="white" transform="translate(0.5625 0.25)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="col-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-5">
                                <div className={styles.SliderCont}>
                                    <div className={styles.SliderTracker}>
                                        <div className={styles.SlideELe}>
                                            <h1>Medical Supplies</h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Woods</h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Metals</h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Wheels</h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Food</h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Printing Supplies</h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Animals Feeds </h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Medical Supplies </h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Woods </h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Metals </h1>
                                        </div>
                                        <div className={styles.SlideELe}>
                                            <h1>Wheels </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: '1.5rem' }}>
                        {windowWidth > 360 && windowWidth <= 1024 && (
                            <div className="company-numbers-wrapper ">
                                <CompanyNumbers />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="carousel-indicators ms-md-5 ml-md-5">
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className={activeIndex === 0 ? "active" : ""} aria-current={activeIndex === 0 ? "true" : "false"} aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" className={activeIndex === 1 ? "active" : ""} aria-current={activeIndex === 1 ? "true" : "false"} aria-label="Slide 2"></button>
            </div>


            {windowWidth < 360 && windowWidth <= 1024 && (
                <div>
                    <CompanyNumbers />
                </div>
            )}
        </div>
    );
}

export default HeroCarousel;
