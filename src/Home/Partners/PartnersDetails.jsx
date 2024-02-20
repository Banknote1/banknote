import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './PartnersDetails.module.css';
import './slider.css'
import { useNavigate } from 'react-router-dom';

const Slider = ({ img1, img2, video, videoThumbnail }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        // If on the last slide, loop back to the first slide
        if (currentSlide === slides.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        // If on the first slide, loop to the last slide
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    // Define your slides array
    const slides = [
        { type: 'img', content: <img src={img1} alt="1" onClick={handleClick} style={{ width: '100%', height: '41vh' }} />, thumbnail: img1 },
        { type: 'img', content: <img src={img2} alt="2" onClick={handleClick} style={{ width: '100%', height: '41vh' }} />, thumbnail: img2 },
        { type: 'video', content: <video alt="3" style={{ width: '100%' }} autoPlay loop muted controls><source src={video} type="video/mp4" /></video>, thumbnail: videoThumbnail }
    ];

    // Render only the current slide
    return (
        <div>

            {slides[currentSlide].content}

            {/* Navigation buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <button style={{ color: 'blanchedalmond' }} onClick={handlePrev}>Prev</button>
                <button style={{ color: 'blanchedalmond' }} onClick={handleClick}>Next</button>
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', }}>
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                            width: '30%',
                            marginRight: '5px',
                            border: index === currentSlide ? '2px solid blue' : 'none',
                            filter: 'brightness(50%)' // Adjust the brightness value as needed (e.g., 50%)
                        }}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};
const PartnersDetails = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const location = useLocation();
    const { partnerName, LogoimageSrc, image1Src, image2Src, videoSrc, videoThumbnail, info } = location.state;
    const navigate = useNavigate();
    console.log(LogoimageSrc);
    useEffect(() => {

        if (!location.state) {
            navigate(`/partners`);
        }
    });


    const handleButtonClick = () => {
        navigate(`/partners`);
    };


    return (
        <div className={styles.pageContainer}>

            <div className={styles.homecontiner}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <button className={styles.iconButton} onClick={handleButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clipPath="url(#clip0_1270_1888)">
                                <path d="M18 4.5C28.8 4.5 31.5 7.2 31.5 18C31.5 28.8 28.8 31.5 18 31.5C7.2 31.5 4.5 28.8 4.5 18C4.5 7.2 7.2 4.5 18 4.5Z" fill="#DDB96E" />
                                <path d="M18 12L12 18L18 24" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24 18H12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1270_1888">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                    <div className={styles.text}>
                        <h1>{partnerName}</h1>
                    </div>
                </div>

                <div className={styles.mobileContainer} style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10vw', marginTop: '2vw' }}>
                    <div className={styles.leftCont}>
                        <img src={LogoimageSrc} alt="" style={{ width: '20vw' }} />
                    </div>
                    <div className={styles.rightCont}>
                        <Slider img1={image1Src} img2={image2Src} video={videoSrc} videoThumbnail={videoThumbnail} />                    </div>
                </div>

            </div>        </div>

    );
};

export default PartnersDetails;
