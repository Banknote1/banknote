import React from 'react'
import styles from './FinancialServices.module.css'
import FinancialServices from './FinancialServices'
function ParentFinancialServices() {
    return (
        <div className={styles.servicesbg}>

            <div className={styles.overlay}>
                <FinancialServices />
            </div>
        </div>
    )
}

export default ParentFinancialServices;