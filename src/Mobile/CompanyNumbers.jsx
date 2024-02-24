import React from 'react'
import styles from './Landing.module.css'
function CompanyNumbers() {
    return (
        <div className="row justify-content-start ">
            <div className="col-3 pr-5">
                <div className={styles.Num}>
                    <h1 >
                        <span className={styles.YellowNum}>+</span><span className={styles.WhiteNum}>14</span>
                    </h1>
                    <h2>Years</h2>
                </div>

            </div>
            <div className="col-4">
                <div className={styles.Num}>
                    <h1 >
                        <span className={styles.YellowNum}>+</span><span className={styles.WhiteNum}>500</span>
                    </h1>
                    <h2>Happy Clients</h2>
                </div>
            </div>
            <div className="col-3">
                <div className={styles.Num}>
                    <h1 >
                        <span className={styles.YellowNum}>+</span><span className={styles.WhiteNum}>80</span>
                    </h1>
                    <h2>Partners</h2>
                </div>
            </div>

        </div>
    )
}

export default CompanyNumbers