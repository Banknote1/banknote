import React, { useState, useEffect } from 'react'
import FinancialServices from '../Home/FinancialServices/FinancialServices';
import FinancialSectors from '../Home/FinancialServices/FinancialSectors';
import styles from './Landing.module.css'
import HeroCarousel from './HeroCarousel';
function Landing() {


    return (
        <div className={`${styles.MobileCont} ${styles.overlay}`}>
            <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HeroCarousel />
            </div>
            <div>
                <FinancialServices />
            </div>
            <div>
                <FinancialSectors />
            </div>

        </div>
    )

}

export default Landing;