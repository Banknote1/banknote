import React, { useEffect, useRef } from 'react';
import styles from './Exporting.module.css';
import '../../index.css';

const Exporting = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength();
        const images = document.querySelectorAll('.movingImage');

        images.forEach((image, index) => {
            const initialOffset = -index * 150;
            const initialPosition = path.getPointAtLength(initialOffset);
            image.style.transform = `translate(${initialPosition.x}px, ${initialPosition.y}px)`;
            image.style.opacity = 0;

            let distance = initialOffset;
            let speed = 0.9;
            const animate = () => {
                distance += speed;
                if (distance >= pathLength) {
                    distance = -100;
                }
                const point = path.getPointAtLength(distance);
                let opacity;
                if (distance < pathLength / 2) {
                    opacity = 2 * (distance / pathLength);
                } else {
                    opacity = 2 * (1 - distance / pathLength);
                }

                image.style.transform = `translate(${point.x}px, ${point.y}px)`;
                image.style.opacity = opacity;
                requestAnimationFrame(animate);
            };

            animate();
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.bg}></div>
            <div className={styles.bg}></div>
            <div className='overlay' style={{ height: '120vh' }}>
                <div className={styles.content}>
                    <div className={styles.finance}>
                        <h1 className={styles.mainTitleWhite}>Exporting &</h1>
                        <h1 className={styles.mainTitleYellow}>Trading</h1>
                        <p>
                            We offer a comprehensive suite of services to streamline your import and export operations in various trades.
                        </p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Discover our products</button>
                        <div className={styles.childButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <g clipPath="url(#clip0_813_6584)">
                                    <path d="M Your_SVG_Path_Data_Here " />
                                </g>
                                <defs>
                                    <clipPath id="clip0_813_6584">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exporting;
