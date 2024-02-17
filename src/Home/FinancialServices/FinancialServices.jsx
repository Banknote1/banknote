import React, { useState, useEffect } from 'react'
import styles from './FinancialServices.module.css';
import IconsSocial from '../Social-icons/IconsSocial';
function FinancialServices() {
    const [animate, setAnimate] = useState(false);
    console.log(animate);
    useEffect(() => {

        setAnimate(true);

    }, [setAnimate]);
    return (

        <div className={styles.section} style={{ marginTop: '0%' }}>
            <div className="container">
                <div className="row row-cols-xxl-4  row-cols-md-4 row-cols-xs-2 justify-content-center">

                    <div className="col-xxl-6 col-md-6 mb-3 ">
                        <div className={styles.textContent}>

                            <h1 className={styles.mainTitleWhite}>Financial </h1>
                            <h1 className={styles.mainTitleYellow}>Services</h1>
                        </div>

                    </div>
                    <div class="col mb-3">
                        <div className={` ${styles.serBox}`} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <g clip-path="url(#clip0_1058_43)">
                                        <path d="M7.5 52.5H52.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 25H52.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5 15L30 7.5L47.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 25V52.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M50 25V52.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 35V42.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M30 35V42.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M40 35V42.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1058_43">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h5> Banking Facilities</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col mb-3">
                        <div className={` ${styles.serBox}`}>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <g clip-path="url(#clip0_1058_241)">
                                        <path d="M10 12.5C10 11.1739 10.5268 9.90215 11.4645 8.96447C12.4021 8.02678 13.6739 7.5 15 7.5H45C46.3261 7.5 47.5979 8.02678 48.5355 8.96447C49.4732 9.90215 50 11.1739 50 12.5V47.5C50 48.8261 49.4732 50.0979 48.5355 51.0355C47.5979 51.9732 46.3261 52.5 45 52.5H15C13.6739 52.5 12.4021 51.9732 11.4645 51.0355C10.5268 50.0979 10 48.8261 10 47.5V12.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 20C20 19.337 20.2634 18.7011 20.7322 18.2322C21.2011 17.7634 21.837 17.5 22.5 17.5H37.5C38.1631 17.5 38.7989 17.7634 39.2678 18.2322C39.7366 18.7011 40 19.337 40 20V22.5C40 23.163 39.7366 23.7989 39.2678 24.2678C38.7989 24.7366 38.1631 25 37.5 25H22.5C21.837 25 21.2011 24.7366 20.7322 24.2678C20.2634 23.7989 20 23.163 20 22.5V20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 35V35.0188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M30 35V35.0188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M40 35V35.0188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 42.5V42.5188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M30 42.5V42.5188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M40 42.5V42.5188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1058_241">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h5>Accounting Advisory Services
                                    (AAS) </h5>
                            </div>

                        </div>
                    </div>
                    {/* <div className="col"></div> */}
                    <div class="col">
                        <div className={` ${styles.serBox}`} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <g clip-path="url(#clip0_653_4040)">
                                        <path d="M35 7.5V17.5C35 18.163 35.2634 18.7989 35.7322 19.2678C36.2011 19.7366 36.837 20 37.5 20H47.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M42.5 52.5H17.5C16.1739 52.5 14.9021 51.9732 13.9645 51.0355C13.0268 50.0979 12.5 48.8261 12.5 47.5V12.5C12.5 11.1739 13.0268 9.90215 13.9645 8.96447C14.9021 8.02678 16.1739 7.5 17.5 7.5H35L47.5 20V47.5C47.5 48.8261 46.9732 50.0979 46.0355 51.0355C45.0979 51.9732 43.8261 52.5 42.5 52.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.5 42.5H37.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.5 32.5H37.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_653_4040">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h5>
                                    Financial Planning
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className={` ${styles.serBox}`} >

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <g clip-path="url(#clip0_1058_130)">
                                        <path d="M27.8575 51.8575C20.5349 49.3627 14.459 44.1356 10.8986 37.2677C7.33813 30.3998 6.56837 22.422 8.75 15C16.5388 15.3564 24.1604 12.6664 30 7.5C35.8396 12.6664 43.4612 15.3564 51.25 15C52.51 19.29 52.785 23.7625 52.1075 28.0925" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M44.5 52.0424L39.07 54.8874C38.9089 54.9713 38.7276 55.0087 38.5464 54.9955C38.3652 54.9824 38.1913 54.9191 38.044 54.8127C37.8967 54.7064 37.7818 54.5613 37.7123 54.3934C37.6427 54.2256 37.6211 54.0418 37.65 53.8624L38.6875 47.8349L34.295 43.5674C34.1639 43.4407 34.0711 43.2796 34.0271 43.1027C33.9831 42.9257 33.9898 42.7399 34.0464 42.5666C34.103 42.3932 34.2071 42.2392 34.347 42.1223C34.4869 42.0053 34.6569 41.93 34.8375 41.9049L40.9075 41.0249L43.6225 35.5424C43.7037 35.3791 43.8288 35.2418 43.9839 35.1457C44.1389 35.0497 44.3176 34.9988 44.5 34.9988C44.6824 34.9988 44.8611 35.0497 45.0161 35.1457C45.1712 35.2418 45.2963 35.3791 45.3775 35.5424L48.0925 41.0249L54.1625 41.9049C54.3426 41.9308 54.5119 42.0066 54.6511 42.1237C54.7904 42.2408 54.8941 42.3946 54.9506 42.5675C55.007 42.7405 55.0139 42.9258 54.9705 43.1025C54.9271 43.2793 54.8352 43.4403 54.705 43.5674L50.3125 47.8349L51.3475 53.8599C51.3786 54.0396 51.3586 54.2244 51.2899 54.3933C51.2213 54.5622 51.1066 54.7085 50.959 54.8155C50.8113 54.9225 50.6367 54.9859 50.4548 54.9987C50.2729 55.0114 50.0911 54.9729 49.93 54.8874L44.5 52.0424Z" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1058_130">
                                            <rect width="60" height="60" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h5>
                                    Assurance & Advisory
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col"></div> */}
                </div>
            </div>
        </div >

    )
}

export default FinancialServices