import React from 'react'
import styles from './FinancialServices.module.css'
import FinancialSectors from './FinancialSectors'
function ParentFinancialSectors() {
    return (

        <div className={styles.Sectorbg}>
            <div className={styles.overlay}>
                <FinancialSectors />
            </div>
        </div>
    )
}

export default ParentFinancialSectors