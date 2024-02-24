import React, { useState } from 'react';
import styles from './NavBar.module.css'; // Correct import statement
import { Link, useNavigate } from 'react-router-dom';
function NavBar({ selectedPage }) {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePrev = () => {
        // Handle previous button click
        navigate(getPreviousRoute(selectedPage));
    };

    const handleNext = () => {
        // Handle next button click
        navigate(getNextRoute(selectedPage));
    };

    const handleDotClick = (index) => {
        // Handle dot click
        navigate(getDotRoute(index));
    };
    const getPreviousRoute = (currentPage) => {
        switch (currentPage) {
            case '/financialservices/':
                return '/';
            case '/financialSectors':
                return '/financialservices/';
            case '/Exporting':
                return '/financialSectors';
            case '/Products':
                return '/Exporting';
            case '/partners':
                return '/Products';
            case '/FAQs':
                return '/partners';
            default:
                return '/';
        }
    };
    const updateActiveIndex = (page) => {
        switch (page) {
            case '/':
                setActiveIndex(0);
                break;
            case '/financialservices/':
                setActiveIndex(1);
                break;
            case '/financialSectors':
                setActiveIndex(2);
                break;
            case '/Exporting':
                setActiveIndex(3);
                break;
            case '/Products':
                setActiveIndex(4);
                break;
            case '/partners':
                setActiveIndex(5);
                break;
            case '/FAQs':
                setActiveIndex(6);
                break;
            default:
                setActiveIndex(0);
        }
    };

    // Update active index when the location changes
    React.useEffect(() => {
        updateActiveIndex(selectedPage);
    }, [selectedPage]);

    const getNextRoute = (currentPage) => {
        switch (currentPage) {
            case '/':
                return '/financialservices/';
            case '/financialservices/':
                return '/financialSectors';
            case '/financialSectors':
                return '/Exporting';
            case '/Exporting':
                return '/Products';
            case '/Products':
                return '/partners';
            case '/partners':
                return '/FAQs';
            case '/FAQs':
                return '/';
            default:
                return '/';
        }
    };

    const getDotRoute = (index) => {
        switch (index) {
            case 0:
                return '/';
            case 1:
                return '/financialservices/';
            case 2:
                return '/financialSectors/';
            case 3:
                return '/Exporting';
            case 4:
                return '/Products';
            case 5:
                return '/Products';
            case 6:
                return '/FAQs';
            default:
                return '/';
        }
    };

    const isPageActive = (page) => page === selectedPage;
    const handleContactUsClick = () => {
        // Check if the user is not on the FAQs page
        if (window.location.pathname !== '/FAQs') {
            // Navigate to FAQs page without reloading
            navigate('/FAQs', { state: { setTriggerScroll: true } });
        }

        // Scroll to the contactForm div
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            {/* Tablet View */}
            <div className={styles.TabletNavBar}   >
                {/* Mobile menu */}

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '1.25rem', marginRight: ' 1.25rem', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a className="navbar-brand" href="/">
                        <img style={{ width: "4.875rem", }} src='/logo.png' alt="" />

                    </a>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '42%' }}>
                        <div className={styles.buttonContainer}  >
                            <button onClick={handleContactUsClick} className={styles.button}  > Contact Us</button>
                        </div>

                        <div className={styles.mobButtonCont}>
                            <button className={styles.mobBavButton}>
                                Our Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Navigation Bar */}
            <div className={styles.mobileNavBar}   >
                {/* Mobile menu */}

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '1.25rem', marginRight: ' 1.25rem', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a className="navbar-brand" href="/">
                        <img style={{ width: "4.875rem", }} src='/logo.png' alt="" />

                    </a>

                    <div className={styles.mobButtonCont}>
                        <button className={styles.mobBavButton}>
                            Our Products
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation Bar */}
            <div className={styles.desktopNavBar}>
                <div className={`d-flex justify-content-center align-items-center fixed-top ${styles.cont}`}>
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
                                            <Link className={`nav-link mx-2 ${isPageActive('/Products') ? `${styles.active} ${styles.navLink}` : styles.navLink}`} to="/Products">Products</Link>
                                            {isPageActive('/Products') && <div className={styles.dot}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none"><circle cx="4.2619" cy="4" r="4" fill="#DDB96E" /></svg></div>}
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
                    <div className={styles.arrows}>
                        <button className={styles.TopArrow} onClick={handlePrev}></button>
                        <div className={styles.arrowdots}>
                            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                                <span
                                    key={index}
                                    className={`${styles.arrowdot} ${index === activeIndex ? styles['active-dot'] : ''}`}
                                    onClick={() => handleDotClick(index)}
                                ></span>
                            ))}
                        </div>
                        <button className={styles.bottomArrow} onClick={handleNext}></button>
                    </div>
                    <div className={styles.buttonContainer}  >
                        <button onClick={handleContactUsClick} className={styles.button}  > Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
