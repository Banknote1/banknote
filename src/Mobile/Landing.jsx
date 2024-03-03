import React, { useState, useEffect } from 'react'
import styles from './Landing.module.css'
import HeroCarousel from './HeroCarousel';
import Header from '../Home/NavBar/NavBar';
import FAQs from '../Home/FAQs/FAQs';
import FinancialSectorsMob from './FinancialSectorsMob';
import FinancialServicesMob from './FinancialServicesMob';
import PartnersMobile from './partenersMobile'
import './styles.css'
import { useLocation } from 'react-router-dom';

function Landing() {
    const location = useLocation();

    let setTriggerScroll = location.state?.setTriggerScroll || false;
    console.log(setTriggerScroll);
    useEffect(() => {

        if (setTriggerScroll) {
            // Scroll to the contactForm div
            const contactForm = document.getElementById('contactFormMob2');
            if (contactForm) {
                contactForm.scrollIntoView({
                    behavior: 'smooth',
                });
                setTriggerScroll = false;
            }
            // Reset triggerScroll after scrolling
            setTriggerScroll = false;
        }
    }, [setTriggerScroll]);

    return (
        <div className={`${styles.MobileCont}`}>

            <div className={styles.hero}>
                <HeroCarousel />
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FinancialServicesMob />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <FinancialSectorsMob />
            </div>
            <div style={{ marginBottom: '3rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <PartnersMobile />
            </div>
            <div>
                <FAQs />
            </div>

        </div>
    )

}

export default Landing;