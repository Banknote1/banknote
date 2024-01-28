import React from 'react';
import styles from './NavBar.module.css'; // Correct import statement
import { Link } from 'react-router-dom';
function NavBar({ selectedPage }) {
    const isPageActive = (page) => page === selectedPage;

    return (
        <>
            <div className={`d-flex justify-content-center align-items-center fixed-top   ${styles.cont}`}>
                <div>
                    <a className="navbar-brand" href="/">
                        <img src='/logo.png' width="89" height="82" alt="" />
                    </a>
                </div>
                <nav className={`navbar navbar-expand-lg navbar-light p-3 d-flex justify-content-around align-items-center  ${styles.nav}`}>
                    <div className={styles.backgroundOverlay}></div>
                    <div className={styles.container}>
                        <div className={styles.navbarContent}>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={`collapse navbar-collapse ${styles.navbarContent}`} id="navbarNavDropdown">
                                <ul className='navbar-nav ms-auto'>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <Link className={`nav-link mx-2 ${isPageActive('/') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="/">Who we are</Link>
                                        {isPageActive('/') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <Link className={`nav-link mx-2 ${isPageActive('/financialservices/') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="/financialservices/">Financial Services</Link>
                                        {isPageActive('/financialservices/') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <Link className={`nav-link mx-2 ${isPageActive('/financialSectors') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="/financialSectors">Sectors</Link>
                                        {isPageActive('/financialSectors') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <Link className={`nav-link mx-2 ${isPageActive('/Exporting') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="/Exporting">Exporting & Trading</Link>
                                        {isPageActive('/Exporting') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <Link className={`nav-link mx-2 ${isPageActive('/products') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="#">Products</Link>
                                        {isPageActive('/products') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <Link className={`nav-link mx-2 ${isPageActive('/partners') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="/partners">Partners</Link>
                                        {isPageActive('/partners') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <Link className={`nav-link mx-2 ${isPageActive('/FAQs') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="/FAQs">FAQs</Link>
                                        {isPageActive('/FAQs') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className={styles.buttonContainer}  >
                    <button className={styles.button} > Contact Us</button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
