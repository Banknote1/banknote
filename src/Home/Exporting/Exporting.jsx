/* eslint import/no-unresolved: off */
import React from 'react';
import styles from './Exporting.module.css';
import IconsSocial from '../Social-icons/IconsSocial';
import '../../index.css'

const Exporting = () => {
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
                                we offer a comprehensive suite of services to streamline your import and export operations in various trads.
                            </p>
                            <div className={styles.buttonContainer}  >
                                <button className={styles.button} > Discover our products</button>
                            </div>
                            <div className='d-flex justify-content-start align-items-start'>
                                {/* Add your content here if needed */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.Exportingicons}>
                        <img src="/Exporting items.png" alt="" />
                    </div>
                </div>

                <div className={styles.ContRibbon}>
                    <a class={styles.ribbon}>Wood <span>Animal Feeds  </span>Food <span>Oil  </span> <span>Hernández  </span>Wilmer <span>Hernández - </span></a>
                    <a clss={styles.ribbon}> Banknote<span>banknote<span>Food</span></span></a>
                    <a class={styles.ribbon2}>icons icons icons</a>

                </div>

            </div>
            <div>
                <IconsSocial />
            </div>


        </div>
    );
};

export default Exporting;
