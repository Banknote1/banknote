import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Partners1.module.css';

const Partners1 = () => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(!buttonClicked);
        // Additional logic or actions you want to perform on button click
        // ...
    };

    return (
        <div className={styles.homecontiner}>
            <div className={styles.leftContiner}>
                <div className={styles.fristleftContiner}>
                    <div>
                        <button className={styles.iconButton} onClick={handleButtonClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <g clipPath="url(#clip0_1270_1888)">
                                    <path d="M18 4.5C28.8 4.5 31.5 7.2 31.5 18C31.5 28.8 28.8 31.5 18 31.5C7.2 31.5 4.5 28.8 4.5 18C4.5 7.2 7.2 4.5 18 4.5Z" fill="#DDB96E" />
                                    <path d="M18 12L12 18L18 24" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M24 18H12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1270_1888">
                                        <rect width="36" height="36" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.text}>
                        <h1>All Partners</h1>
                    </div>
                </div>
                <div className={styles.secondleftContiner}></div>
                <div className={styles.thirdleftContiner}></div>
            </div>
            <div className={styles.rightContiner}></div>
        </div>
    );
};

export default Partners1;
