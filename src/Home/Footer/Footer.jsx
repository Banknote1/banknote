import React from 'react'
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '3%', marginRight: '3%' }}>
                    <div className={styles.mobFooterrow} style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src="/footericons/location.svg" alt="" />
                        <h1>106 Nile, 5th Floor, Dokki, Giza, Egypt</h1>
                    </div>
                    <div className={styles.mobFooterrow} style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src="/footericons/clock.svg" alt="" />
                        <h1>Saturday - Thursday 08:00 am - 06:00 pm</h1>
                    </div>
                    <div className={styles.mobFooterrow} style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src="/footericons/mail.svg" alt="" />
                        <h1>info@banknote-consult.com</h1>
                    </div>
                    <div className={styles.mobFooterrow} style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src="/footericons/phone.svg" alt="" />
                        <h1>(+20) 1000558282 or (+20) 01069269754</h1>
                    </div>
                    <div className={styles.mobFooterrow} style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src="/footericons/telephone.svg" alt="" />
                        <h1>0233365177</h1>
                    </div>
                    <div className={styles.mobFooterrow} style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src="/footericons/people.svg" alt="" />
                        <h1>Careers</h1>
                    </div>
                </div>
            </div>
            <div className={styles.socialicons}>
                <a className="Linkedin" href="https://eg.linkedin.com/company/banknoteeg">

                    <img src="/socialicons/Linkedin.svg" alt="" />
                </a>
                <a className="Whatsupp" href="https://api.whatsapp.com/send?phone=01154440599">

                    <img src="/socialicons/Whatsupp.svg" alt="" />
                </a>
                <a className="Facebook" href="https://www.facebook.com/Banknoteeg">

                    <img src="/socialicons/Facebook.svg" alt="" />
                </a>
                <a className="insta" href="https://www.instagram.com/banknoteeg/">

                    <img src="/socialicons/insta.svg" alt="" />
                </a>
            </div>
        </>
    )
}

export default Footer