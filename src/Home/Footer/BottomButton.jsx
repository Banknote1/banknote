import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

function BottomButton() {
    const [showButton, setShowButton] = useState(true); // Initialize to true
    const navigate = useNavigate();
    useEffect(() => {
        const contactForm = document.getElementById('contactFormMob2');

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                // If contactForm is intersecting (i.e., visible)
                // set showButton to false, otherwise set it to true
                setShowButton(!entry.isIntersecting);
            });
        };

        // Create an intersection observer
        const observer = new IntersectionObserver(handleIntersect, {
            root: null, // Use the viewport as the root
            threshold: 0.1, // Trigger when at least 50% of the contactForm is visible
        });

        // Start observing the contactForm element
        if (contactForm) {
            observer.observe(contactForm);
        }

        // Cleanup function to disconnect the observer when component unmounts
        return () => {
            if (contactForm) {
                observer.unobserve(contactForm);
            }
        };
    }, []);

    const scrollToContactForm = () => {
        const contactForm = document.getElementById('contactFormMob2');

        if (window.location.pathname !== '/') {
            // Navigate to FAQs page without reloading
            navigate('/', { state: { setTriggerScroll: true } });
            if (contactForm) {
                contactForm.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        }

        if (contactForm) {
            contactForm.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.bottombuttoncontainer}>
            {showButton && (
                <button className={styles.button} onClick={scrollToContactForm}>
                    Contact Us
                </button>
            )}
        </div>
    );
}

export default BottomButton;
