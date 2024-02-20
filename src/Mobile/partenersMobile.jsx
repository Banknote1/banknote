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
            <div className=' modal-content' style={{ height: '50%', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                <div className={`${styles.modalmob}`}>
                    {/* Your modal content here */}
                </div>
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

function PartnersMobile() {
    const partners = [
        {
            logoImageUrl: '/Partners/Toy & Joy/logo.svg',
            Image1Url: '/Partners/Toy & Joy/1.jpg',
            Image2Url: '/Partners/Toy & Joy/2.jpg',
            Image3Url: '/Partners/Toy & Joy/videoThumbnail.jpg'
        },
        {
            logoImageUrl: '/Partners/2M Group/logo.svg',
            Image1Url: '/Partners/2M Group/1.jpg',
            Image2Url: '/Partners/2M Group/2.jpg',
            Image3Url: '/Partners/2M Group/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Al Eman/logo.svg',
            Image1Url: '/Partners/Al Eman/1.jpg',
            Image2Url: '/Partners/Al Eman/2.jpg',
            Image3Url: '/Partners/Al Eman/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Al Hosam/logo.svg',
            Image1Url: '/Partners/Al Hosam/1.jpg',
            Image2Url: '/Partners/Al Hosam/2.jpg',
            Image3Url: '/Partners/Al Hosam/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Al Masrya Foam/logo.svg',
            Image1Url: '/Partners/Al Masrya Foam/1.jpg',
            Image2Url: '/Partners/Al Masrya Foam/2.jpg',
            Image3Url: '/Partners/Al Masrya Foam/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Al Mostafa/logo.svg',
            Image1Url: '/Partners/Al Mostafa/1.jpg',
            Image2Url: '/Partners/Al Mostafa/2.jpg',
            Image3Url: '/Partners/Al Mostafa/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Al Shorouq/logo.svg',
            Image1Url: '/Partners/Al Shorouq/1.jpg',
            Image2Url: '/Partners/Al Shorouq/2.jpg',
            Image3Url: '/Partners/Al Shorouq/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Al Sonosy/logo.svg',
            Image1Url: '/Partners/Al Sonosy/1.jpg',
            Image2Url: '/Partners/Al Sonosy/2.jpg',
            Image3Url: '/Partners/Al Sonosy/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Arafa Truck/logo.svg',
            Image1Url: '/Partners/Arafa Truck/1.jpg',
            Image2Url: '/Partners/Arafa Truck/2.jpg',
            Image3Url: '/Partners/Arafa Truck/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Food Service/logo.svg',
            Image1Url: '/Partners/Food Service/1.jpg',
            Image2Url: '/Partners/Food Service/2.jpg',
            Image3Url: '/Partners/Food Service/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Hesham Tyres/logo.svg',
            Image1Url: '/Partners/Hesham Tyres/1.jpg',
            Image2Url: '/Partners/Hesham Tyres/2.jpg',
            Image3Url: '/Partners/Hesham Tyres/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Heslo/logo.svg',
            Image1Url: '/Partners/Heslo/1.jpg',
            Image2Url: '/Partners/Heslo/2.jpg',
            Image3Url: '/Partners/Heslo/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/International Textile/logo.svg',
            Image1Url: '/Partners/International Textile/1.jpg',
            Image2Url: '/Partners/International Textile/2.jpg',
            Image3Url: '/Partners/International Textile/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Metal tech/logo.svg',
            Image1Url: '/Partners/Metal tech/1.jpg',
            Image2Url: '/Partners/Metal tech/2.jpg',
            Image3Url: '/Partners/Metal tech/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Porsh/logo.svg',
            Image1Url: '/Partners/Porsh/1.jpg',
            Image2Url: '/Partners/Porsh/2.jpg',
            Image3Url: '/Partners/Porsh/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Power Pack/logo.svg',
            Image1Url: '/Partners/Power Pack/1.jpg',
            Image2Url: '/Partners/Power Pack/2.jpg',
            Image3Url: '/Partners/Power Pack/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Royal Palace/logo.svg',
            Image1Url: '/Partners/Royal Palace/1.jpg',
            Image2Url: '/Partners/Royal Palace/2.jpg',
            Image3Url: '/Partners/Royal Palace/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Al Sama/logo.svg',
            Image1Url: '/Partners/Al Sama/1.jpg',
            Image2Url: '/Partners/Al Sama/2.jpg',
            Image3Url: '/Partners/Al Sama/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Tyre Market/logo.svg',
            Image1Url: '/Partners/Tyre Market/1.jpg',
            Image2Url: '/Partners/Tyre Market/2.jpg',
            Image3Url: '/Partners/Tyre Market/videoThumbnail.jpg',
        },
        {
            logoImageUrl: '/Partners/Bon Alghandour/logo.svg',
            Image1Url: '/Partners/Bon Alghandour/1.jpg',
            Image2Url: '/Partners/Bon Alghandour/2.jpg',
            Image3Url: '/Partners/Bon Alghandour/videoThumbnail.jpg',
        }
    ];
    const [showModal, setShowModal] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);

    const handleCardClick = (partner) => {
        setSelectedPartner(partner);
        setShowModal(true);
    };


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.4,
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