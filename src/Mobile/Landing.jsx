import React, { useState, useEffect } from 'react'
import styles from './Landing.module.css'
import HeroCarousel from './HeroCarousel';
import Header from '../Home/NavBar/NavBar';
import FAQs from '../Home/FAQs/FAQs';
import FinancialSectorsMob from './FinancialSectorsMob';
import FinancialServicesMob from './FinancialServicesMob';
import './styles.css'
function Landing() {


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
            <div>
                <FAQs />
            </div>

        </div>
    )

}

export default Landing;