import React from 'react';
import styles from './NavBar.module.css'; // Correct import statement

function NavBar() {
    return (
        <>
            <div className={`d-flex justify-content-around align-items-center fixed-top   ${styles.cont}`}>
                <div>
                    <a className="navbar-brand" href="#">
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
                                        <a className={`nav-link mx-2 active ${styles.navLink}`} aria-current="page" href="#">Who we are</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link mx-2 active ${styles.navLink}`} href="#">Financial Services</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link mx-2 active ${styles.navLink}`} href="#">Sectors</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link mx-2 active ${styles.navLink}`} href="#">Exporting & Trading</a>
                                    </li> <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link mx-2 active ${styles.navLink}`} href="#">Products</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link mx-2 active ${styles.navLink}`} href="#">Partners</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link mx-2 active ${styles.navLink}`} href="#">FAQs</a>
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
