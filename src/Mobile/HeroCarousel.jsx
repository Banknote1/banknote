import React, { useState } from 'react'
import styles from './Landing.module.css'
import './styles.css'
function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };
    return (
        <div id="carouselExampleFade" className="carousel carousel-fade" data-bs-ride="carousel" style={{ height: '410px' }}>
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>

                    <div className="row justify-content-center">
                        <div className={`col-11 ${styles.coin} `}>
                            <div className='mb-3'>
                                <h1 className={styles.MainTitleWhite}> Your Best</h1>

                                <h1 className={styles.MainTitleYellow}> Financial Solutions</h1>
                            </div>
                            <div className='mb-3'>
                                <p className={styles.subParagraph}> We are Financial Consulting Company offers essential methods for both large and small projects, aiding companies and institutions.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <div className="row justify-content-center ms-1">
                        <div className={`col-11 ${styles.coin} `}>
                            <div className='mb-3'>
                                <h1 className={styles.MainTitleWhite}> Exporting <br />&  <span className={styles.MainTitleYellow}>Trading</span></h1>


                            </div>
                            <div className='mb-3'>
                                <p className={styles.subParagraph}>we offer a comprehensive suite of services to streamline your importing operations in various trads. </p>
                            </div>

                            <div className="mb-3">
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

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
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
                                            <h1>Oils </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="row justify-content-around ">
                <div className="col-3">
                    <div className={styles.Num}>
                        <h1 >
                            <span className={styles.YellowNum}>+</span><span className={styles.WhiteNum}>14</span>
                        </h1>
                        <h2>Years</h2>
                    </div>

                </div>
                <div className="col-3">
                    <div className={styles.Num}>
                        <h1 >
                            <span className={styles.YellowNum}>+</span><span className={styles.WhiteNum}>500</span>
                        </h1>
                        <h2>Happy Clients</h2>
                    </div>
                </div>
                <div className="col-3">
                    <div className={styles.Num}>
                        <h1 >
                            <span className={styles.YellowNum}>+</span><span className={styles.WhiteNum}>80</span>
                        </h1>
                        <h2>Partners</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroCarousel