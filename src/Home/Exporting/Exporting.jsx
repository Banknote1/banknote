import React, { useEffect, useRef } from 'react';
import styles from './Exporting.module.css';
import IconsSocial from '../Social-icons/IconsSocial';
import '../../index.css'
import { useNavigate } from 'react-router-dom';

const Exporting = () => {
    const navigate = useNavigate();
    const pathRef = useRef(null);
    const handleClick = () => {
        navigate(`/Comingsoon`);
    };
    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength();
        const images = document.querySelectorAll('.movingImage');

        images.forEach((image, index) => {
            const initialOffset = -index * 150; // Adjust the initial offset as needed for increased distance
            const initialPosition = path.getPointAtLength(initialOffset);
            image.style.transform = `translate(${initialPosition.x}px, ${initialPosition.y}px)`;
            image.style.opacity = 0;

            let distance = initialOffset;
            let speed = 0.55; // Adjust the speed as needed
            const animate = () => {
                distance += speed;
                if (distance >= pathLength) {
                    distance = -100; // Reset to the top for looping
                }
                const point = path.getPointAtLength(distance);
                let opacity;

                // Opacity increases to 1 at 50% of the path and resets to 0 at 100% of the path
                if (distance < pathLength / 2) {
                    opacity = 2 * (distance / pathLength);
                } else {
                    opacity = 2 * (1 - distance / pathLength);
                }

                // Calculate scale based on distance along the path
                const minScale = 0.4; // Minimum scale
                const maxScale = 0.9; // Maximum scale
                const scale = minScale + (maxScale - minScale) * (distance / pathLength);

                image.style.transform = `translate(${point.x}px, ${point.y}px) scale(${scale})`;
                image.style.opacity = opacity;
                requestAnimationFrame(animate);
            };

            animate();


            animate();
        });
        return () => {
            // Clean up if needed
        };
    }, []);
    return (
        <div>

            <div className={styles.bg}></div>
            <div className='overlay'>
                <div className={styles.Cont}>
                    <div className={styles.financeCont}>
                        <div className={styles.finance}>
                            <h1 className={styles.mainTitleWhite}>Exporting &</h1>
                            <h1 className={styles.mainTitleYellow}>Trading</h1>
                            {/* <h1 className={styles.mainTitleYellow}>solutions</h1> */}
                            <p>
                                We offer a comprehensive variety of products to streamline your exporting & trading operations
                            </p>

                            <div className='d-flex justify-content-start align-items-start'>
                                {/* Add your content here if needed */}
                            </div>
                        </div>
                        <div className={styles.buttonContainer}  >
                            <button className={styles.button} onClick={handleClick}>
                                Discover our products
                            </button>                            <div className={styles.childButton}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <g clip-path="url(#clip0_813_6584)">
                                    <path d="M17.8 7H7L14.2 16L7 25H17.8L25 16L17.8 7Z" stroke="#E4C78B" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_813_6584">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                        </div>
                    </div>
                    <div className={styles.Exportingicons}>
                        <svg display={`none`} width={400} height={100}>
                            <path
                                ref={pathRef}
                                d="M3.6111 2.37207C2.59966 30.6922 0.0927818 60.3646 3.82817 88.5498C5.42808 100.622 14.3791 108.93 21.411 118.072C30.4745 129.854 43.2859 138.207 54.9487 147.268C68.7954 158.025 85.7165 166.612 101.077 175.053C118.995 184.9 138.695 193.764 154.802 206.529C182.377 228.38 204.1 254.49 214.66 288.148C219.019 302.045 222.084 316.034 221.389 330.64C220.985 339.126 219.852 347.637 218.296 355.983C216.806 363.974 209.514 373.193 205.5 380C201.258 387.194 192.552 393.592 186.5 399.5C180.908 404.959 154.646 438.24 124 456.5C99.5646 471.06 85.111 481.2 80.5 485.5C67.2881 498.355 54 527.16 54 544C54 556.807 54 588.693 54 601.5"
                                strokeWidth={3}
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                        <div style={{ height: `100px`, overflow: `hidden` }}>
                            <img style={{ position: 'absolute', width: `100px`, height: `100px` }} className="movingImage" src="./1.svg" alt="Moving Image 0" />
                            <img style={{ position: 'absolute', width: `100px`, height: `100px` }} className="movingImage" src="./2.svg" alt="Moving Image 1" />
                            <img style={{ position: 'absolute', width: `100px`, height: `100px` }} className="movingImage" src="./3.svg" alt="Moving Image 2" />
                            <img style={{ position: 'absolute', width: `100px`, height: `100px` }} className="movingImage" src="./4.svg" alt="Moving Image 3" />
                            <img style={{ position: 'absolute', width: `100px`, height: `100px` }} className="movingImage" src="./5.svg" alt="Moving Image 4" />
                            <img style={{ position: 'absolute', width: `100px`, height: `100px` }} className="movingImage" src="./6.svg" alt="Moving Image 5" />
                        </div>
                    </div>
                </div>

                <div className={styles.ContRibbon}>
                    <a className={styles.ribbon}>
                        <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Prining</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span>
                    </a>
                    <a className={styles.ribbon2}>
                        <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Prining</span> <span>Supplies</span> <span>Wood</span> <span>Animal</span> <span>Feeds</span> <span>Food</span> <span>Oil</span> <span>Metals</span> <span>Wheels</span> <span>Printing</span> <span>Supplies</span>
                    </a>
                </div>


            </div>
            <div>

            </div>


        </div>
    );
};

export default Exporting;