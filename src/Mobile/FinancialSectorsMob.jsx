import React from 'react'
import styles from './Landing.module.css';
import { useNavigate } from 'react-router-dom';

function FinancialSectorsMob() {
    const navigate = useNavigate(); // Access the history object

    const handleNavigation = (pageNumber) => {

        navigate(`/financialSectors/weserve?pagenumb=${pageNumber}`);
    };
    return (
        <div className={`ms-md-5 ms-3 ${styles.section}`}>
            <div className="row row-cols-md-3 row-cols-sm-2" style={{}}>
                <div className="col-xxl-4 col-md-6 col-sm-12">
                    <div className={styles.textContent}>
                        <span className={styles.mainTitleWhite}>Sectors </span>
                        <span className={styles.mainTitleYellow}>We Serve</span>
                    </div>
                </div>
                <div className="col-6 col-md-6 mb-3">
                    <div className={` ${styles.serBox}`} onClick={() => handleNavigation(5)} >

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <g clip-path="url(#clip0_3427_4230)">
                                    <path d="M5.47229 28.724C7.03172 23.2586 8.16832 17.8108 8.19143 12.4092H16.3489C16.372 17.8108 17.5086 23.2586 19.068 28.724" stroke="white" stroke-width="1.08766" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.0286 17.8477H23.1467C23.1807 21.3989 24.3621 25.0479 25.8658 28.7242" stroke="white" stroke-width="1.08766" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.2701 6.97161C12.579 6.54132 12.988 6.19268 13.4617 5.95581C13.9354 5.71894 14.4597 5.60095 14.9893 5.61204C15.5188 5.60095 16.0431 5.71894 16.5169 5.95581C16.9906 6.19268 17.3996 6.54132 17.7084 6.97161C18.0173 7.40191 18.4262 7.75055 18.9 7.98742C19.3737 8.22429 19.898 8.34228 20.4276 8.33119C20.9571 8.34228 21.4814 8.22429 21.9551 7.98742C22.4289 7.75055 22.8379 7.40191 23.1467 6.97161C23.4556 6.54132 23.8645 6.19268 24.3383 5.95581C24.812 5.71894 25.3363 5.60095 25.8658 5.61204C26.3954 5.60095 26.9197 5.71894 27.3934 5.95581C27.8672 6.19268 28.2761 6.54132 28.585 6.97161" stroke="white" stroke-width="1.08766" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.11267 28.7246H29.9445" stroke="white" stroke-width="1.08766" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3427_4230">
                                        <rect width="32.6297" height="32.6297" fill="white" transform="translate(0.0339966 0.173828)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <h5>Manufacturing </h5>
                        </div>

                    </div>

                </div>
                <div className="col-6 col-md-6 mb-3">

                    <div className={` ${styles.serBox}`} onClick={() => handleNavigation(3)} >
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g clip-path="url(#clip0_1074_540)">
                                <path d="M7.5 30H10M30 7.5V10M50 30H52.5M14 14L15.75 15.75M46 14L44.25 15.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.5 40C20.4012 38.4259 18.8508 36.2313 18.0686 33.7271C17.2863 31.2229 17.3118 28.5361 18.1415 26.0472C18.9711 23.5583 20.5628 21.3935 22.6911 19.8595C24.8194 18.3255 27.3765 17.5 30 17.5C32.6235 17.5 35.1806 18.3255 37.3089 19.8595C39.4372 21.3935 41.0289 23.5583 41.8585 26.0472C42.6882 28.5361 42.7137 31.2229 41.9314 33.7271C41.1492 36.2313 39.5988 38.4259 37.5 40C36.5239 40.9662 35.789 42.1486 35.3547 43.4516C34.9204 44.7545 34.7989 46.1414 35 47.5C35 48.8261 34.4732 50.0979 33.5355 51.0355C32.5979 51.9732 31.3261 52.5 30 52.5C28.6739 52.5 27.4021 51.9732 26.4645 51.0355C25.5268 50.0979 25 48.8261 25 47.5C25.2011 46.1414 25.0796 44.7545 24.6453 43.4516C24.211 42.1486 23.4761 40.9662 22.5 40Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.25 42.5H35.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1074_540">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></div>
                        <div>
                            <h5>
                                Technology &
                                Communication
                            </h5>
                        </div>
                    </div>

                </div>
                <div className="col-6 col-md-6 mb-3">

                    <div className={` ${styles.serBox}`} onClick={() => handleNavigation(5)} >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <g clip-path="url(#clip0_1074_229)">
                                    <path d="M15 52.5H30" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.5 52.5V7.5L7.5 22.5H52.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.5 7.5L47.5 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M42.5 22.5V32.5C43.4889 32.5 44.4556 32.7932 45.2779 33.3427C46.1001 33.8921 46.741 34.673 47.1194 35.5866C47.4978 36.5002 47.5969 37.5055 47.4039 38.4755C47.211 39.4454 46.7348 40.3363 46.0355 41.0355C45.3363 41.7348 44.4454 42.211 43.4755 42.4039C42.5055 42.5969 41.5002 42.4978 40.5866 42.1194C39.673 41.741 38.8921 41.1001 38.3427 40.2779C37.7932 39.4556 37.5 38.4889 37.5 37.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1074_229">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <h5> Construction </h5>
                        </div>
                    </div>


                </div>
                <div className="col-6 col-md-6 mb-3">
                    <div className={` ${styles.serBox}`} onClick={() => handleNavigation(2)} >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <g clip-path="url(#clip0_653_4045)">
                                    <path d="M7.5 30C7.5 32.9547 8.08198 35.8806 9.21271 38.6104C10.3434 41.3402 12.0008 43.8206 14.0901 45.9099C16.1794 47.9992 18.6598 49.6566 21.3896 50.7873C24.1194 51.918 27.0453 52.5 30 52.5C32.9547 52.5 35.8806 51.918 38.6104 50.7873C41.3402 49.6566 43.8206 47.9992 45.9099 45.9099C47.9992 43.8206 49.6566 41.3402 50.7873 38.6104C51.918 35.8806 52.5 32.9547 52.5 30C52.5 24.0326 50.1295 18.3097 45.9099 14.0901C41.6903 9.87053 35.9674 7.5 30 7.5C24.0326 7.5 18.3097 9.87053 14.0901 14.0901C9.87053 18.3097 7.5 24.0326 7.5 30Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 22.5H51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 37.5H51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28.7502 7.5C24.5385 14.249 22.3057 22.0447 22.3057 30C22.3057 37.9553 24.5385 45.751 28.7502 52.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M31.25 7.5C35.4616 14.249 37.6945 22.0447 37.6945 30C37.6945 37.9553 35.4616 45.751 31.25 52.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_653_4045">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <h5>
                                Trading
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 mb-3">

                    <div className={` ${styles.serBox}`} onClick={() => handleNavigation(4)} >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <g clip-path="url(#clip0_1074_952)">
                                    <path d="M10 42.5C10 43.8261 10.5268 45.0979 11.4645 46.0355C12.4021 46.9732 13.6739 47.5 15 47.5C16.3261 47.5 17.5979 46.9732 18.5355 46.0355C19.4732 45.0979 20 43.8261 20 42.5C20 41.1739 19.4732 39.9021 18.5355 38.9645C17.5979 38.0268 16.3261 37.5 15 37.5C13.6739 37.5 12.4021 38.0268 11.4645 38.9645C10.5268 39.9021 10 41.1739 10 42.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40 42.5C40 43.8261 40.5268 45.0979 41.4645 46.0355C42.4021 46.9732 43.6739 47.5 45 47.5C46.3261 47.5 47.5979 46.9732 48.5355 46.0355C49.4732 45.0979 50 43.8261 50 42.5C50 41.1739 49.4732 39.9021 48.5355 38.9645C47.5979 38.0268 46.3261 37.5 45 37.5C43.6739 37.5 42.4021 38.0268 41.4645 38.9645C40.5268 39.9021 40 41.1739 40 42.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 42.5H5V15C5 14.337 5.26339 13.7011 5.73223 13.2322C6.20107 12.7634 6.83696 12.5 7.5 12.5H42.5C45.8152 12.5 48.9946 14.3437 51.3388 17.6256C53.683 20.9075 55 25.3587 55 30V42.5H50M40 42.5H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M40 12.5L43.75 30H55" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 25H42.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.5 12.5V25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30 12.5V25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1074_952">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <h5> Transportation </h5>

                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 mb-3">
                    <div style={{ alignContent: 'center', display: 'flex', height: "100%" }}>

                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <span className={styles.NumYellow}> + </span> <span className={styles.NumWhite}>More</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FinancialSectorsMob