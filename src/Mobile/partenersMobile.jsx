import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './partnersMobile.module.css';


const MobModal = ({ partner, onClose }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            const modalContent = document.querySelector('.modal-content');
            if (modalContent && !modalContent.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={styles.modaloverlay}>
            <div className='modal-content' style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <div className={`${styles.modalmob}`}>
                    <Slider2 img1={partner['Image1Url']} img2={partner['Image2Url']} video={partner['videoUrl']} videoThumbnail={partner['Image3Url']} />                    </div>
            </div>
        </div>

    );
};

function Card({ logoImageUrl, Image1Url, Image2Url, Image3Url }) {
    return (
        <div className={styles.Card}>
            <img className={styles.cardLogo} src={logoImageUrl} alt="partner logo" />
            <div className={styles.cardDownImgs}>
                <img className={styles.cardImg1} src={Image1Url} alt="partner image 1" />
                <img className={styles.cardFrame1} src='/Partners/bgImgs.svg' alt="frame 1" />
                <img className={styles.cardImg2} src={Image2Url} alt="partner image 2" />
                <img className={styles.cardFrame2} src='/Partners/bgImgs.svg' alt="frame 2" />
                <img className={styles.cardImg3} src={Image3Url} alt="partner image 3" />
            </div>
        </div>
    );
}

const Slider2 = ({ img1, img2, video, videoThumbnail }) => {
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
        { type: 'img', content: <img src={img1} alt="1" onClick={handleClick} style={{ width: '100%', height: '25vh' }} />, thumbnail: img1 },
        { type: 'img', content: <img src={img2} alt="2" onClick={handleClick} style={{ width: '100%', height: '25vh' }} />, thumbnail: img2 },
        { type: 'video', content: <video alt="3" style={{ width: '100%', height: '25vh' }} autoPlay loop muted controls><source src={video} type="video/mp4" /></video>, thumbnail: videoThumbnail }
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
                {/* <button style={{ color: 'blanchedalmond' }} onClick={handlePrev}>Prev</button>
                <button style={{ color: 'blanchedalmond' }} onClick={handleClick}>Next</button> */}
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', }}>
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
function PartnersMobile() {
    const partners = [
        {
            logoImageUrl: '/Partners/Toy & Joy/logo.svg',
            Image1Url: '/Partners/Toy & Joy/1.jpg',
            Image2Url: '/Partners/Toy & Joy/2.jpg',
            Image3Url: '/Partners/Toy & Joy/videoThumbnail.jpg',
            videoUrl: '/Partners/Toy & Joy/video.mp4',
        },
        {
            logoImageUrl: '/Partners/2M Group/logo.svg',
            Image1Url: '/Partners/2M Group/1.jpg',
            Image2Url: '/Partners/2M Group/2.jpg',
            Image3Url: '/Partners/2M Group/videoThumbnail.jpg',
            videoUrl: '/Partners/2M Group/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Al Eman/logo.svg',
            Image1Url: '/Partners/Al Eman/1.jpg',
            Image2Url: '/Partners/Al Eman/2.jpg',
            Image3Url: '/Partners/Al Eman/videoThumbnail.jpg',
            videoUrl: '/Partners/Al Eman/video.mp4',


        },
        {
            logoImageUrl: '/Partners/Al Hosam/logo.svg',
            Image1Url: '/Partners/Al Hosam/1.jpg',
            Image2Url: '/Partners/Al Hosam/2.jpg',
            Image3Url: '/Partners/Al Hosam/videoThumbnail.jpg',
            videoUrl: '/Partners/Al Hosam/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Al Masrya Foam/logo.svg',
            Image1Url: '/Partners/Al Masrya Foam/1.jpg',
            Image2Url: '/Partners/Al Masrya Foam/2.jpg',
            Image3Url: '/Partners/Al Masrya Foam/videoThumbnail.jpg',
            videoUrl: '/Partners/Al Masrya Foam/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Al Mostafa/logo.svg',
            Image1Url: '/Partners/Al Mostafa/1.jpg',
            Image2Url: '/Partners/Al Mostafa/2.jpg',
            Image3Url: '/Partners/Al Mostafa/videoThumbnail.jpg',
            videoUrl: '/Partners/Al Mostafa/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Al Shorouq/logo.svg',
            Image1Url: '/Partners/Al Shorouq/1.jpg',
            Image2Url: '/Partners/Al Shorouq/2.jpg',
            Image3Url: '/Partners/Al Shorouq/videoThumbnail.jpg',
            videoUrl: '/Partners/Al Shorouq/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Al Sonosy/logo.svg',
            Image1Url: '/Partners/Al Sonosy/1.jpg',
            Image2Url: '/Partners/Al Sonosy/2.jpg',
            Image3Url: '/Partners/Al Sonosy/videoThumbnail.jpg',
            videoUrl: '/Partners/Al Sonosy/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Arafa Truck/logo.svg',
            Image1Url: '/Partners/Arafa Truck/1.jpg',
            Image2Url: '/Partners/Arafa Truck/2.jpg',
            Image3Url: '/Partners/Arafa Truck/videoThumbnail.jpg',
            videoUrl: '/Partners/Arafa Truck/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Food Service/logo.svg',
            Image1Url: '/Partners/Food Service/1.jpg',
            Image2Url: '/Partners/Food Service/2.jpg',
            Image3Url: '/Partners/Food Service/videoThumbnail.jpg',
            videoUrl: '/Partners/Food Service/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Hesham Tyres/logo.svg',
            Image1Url: '/Partners/Hesham Tyres/1.jpg',
            Image2Url: '/Partners/Hesham Tyres/2.jpg',
            Image3Url: '/Partners/Hesham Tyres/videoThumbnail.jpg',
            videoUrl: '/Partners/Hesham Tyres/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Heslo/logo.svg',
            Image1Url: '/Partners/Heslo/1.jpg',
            Image2Url: '/Partners/Heslo/2.jpg',
            Image3Url: '/Partners/Heslo/videoThumbnail.jpg',
            videoUrl: '/Partners/Heslo/video.mp4',

        },
        {
            logoImageUrl: '/Partners/International Textile/logo.svg',
            Image1Url: '/Partners/International Textile/1.jpg',
            Image2Url: '/Partners/International Textile/2.jpg',
            Image3Url: '/Partners/International Textile/videoThumbnail.jpg',
            videoUrl: '/Partners/International Textile/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Metal tech/logo.svg',
            Image1Url: '/Partners/Metal tech/1.jpg',
            Image2Url: '/Partners/Metal tech/2.jpg',
            Image3Url: '/Partners/Metal tech/videoThumbnail.jpg',
            videoUrl: '/Partners/Metal tech/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Porsh/logo.svg',
            Image1Url: '/Partners/Porsh/1.jpg',
            Image2Url: '/Partners/Porsh/2.jpg',
            Image3Url: '/Partners/Porsh/videoThumbnail.jpg',
            videoUrl: '/Partners/2M Group/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Power Pack/logo.svg',
            Image1Url: '/Partners/Power Pack/1.jpg',
            Image2Url: '/Partners/Power Pack/2.jpg',
            Image3Url: '/Partners/Power Pack/videoThumbnail.jpg',
            videoUrl: '/Partners/Power Pack/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Royal Palace/logo.svg',
            Image1Url: '/Partners/Royal Palace/1.jpg',
            Image2Url: '/Partners/Royal Palace/2.jpg',
            Image3Url: '/Partners/Royal Palace/videoThumbnail.jpg',
            videoUrl: '/Partners/Royal Palace/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Al Sama/logo.svg',
            Image1Url: '/Partners/Al Sama/1.jpg',
            Image2Url: '/Partners/Al Sama/2.jpg',
            Image3Url: '/Partners/Al Sama/videoThumbnail.jpg',
            videoUrl: '/Partners/Al Sama/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Tyre Market/logo.svg',
            Image1Url: '/Partners/Tyre Market/1.jpg',
            Image2Url: '/Partners/Tyre Market/2.jpg',
            Image3Url: '/Partners/Tyre Market/videoThumbnail.jpg',
            videoUrl: '/Partners/Tyre Market/video.mp4',

        },
        {
            logoImageUrl: '/Partners/Bon Alghandour/logo.svg',
            Image1Url: '/Partners/Bon Alghandour/1.jpg',
            Image2Url: '/Partners/Bon Alghandour/2.jpg',
            Image3Url: '/Partners/Bon Alghandour/videoThumbnail.jpg',
            videoUrl: '/Partners/Bon Alghandour/video.mp4',

        }
    ];
    const [showModal, setShowModal] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);

    const handleCardClick = (partner) => {
        setSelectedPartner(partner);
        setShowModal(true);
    };
    const [slidesToShow, setSlidesToShow] = useState(1.65);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const breakpoints = {
                300: 1.55,
                400: 1.65,
                500: 1.85,
                600: 2.5,
                700: 2.6,
                800: 3,
                900: 3.3,
                1000: 3.6,
            };

            // Find the matching breakpoint and set slidesToShow accordingly
            let calculatedSlidesToShow = 1;
            Object.keys(breakpoints).forEach(breakpoint => {
                if (screenWidth >= breakpoint) {
                    calculatedSlidesToShow = breakpoints[breakpoint];
                }
            });

            setSlidesToShow(calculatedSlidesToShow);
        };

        // Listen for window resize event
        window.addEventListener('resize', handleResize);

        // Initial call to set initial state
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    };

    return (
        <div>
            <h2 className={styles.mainTitle}>
                <span style={{ color: 'white' }}>Success</span> <span style={{ color: 'var(--White-100, #EBD5A8)' }}>Partners</span>
            </h2>

            <Slider {...settings} className={styles.cardSlider}>
                {partners.map((partner, index) => (
                    <div key={index} className={styles.cardItem} onClick={() => handleCardClick(partner)}>
                        <Card {...partner} />
                    </div>
                ))}
            </Slider>

            {showModal && <MobModal partner={selectedPartner} onClose={() => setShowModal(false)} />}
        </div>
    );
};



export default PartnersMobile;