import React from 'react'
import styles from './CertifiedSpareParts.module.css'

const CertifiedSpareParts = () => {
  return (
    <div>
        <div className={styles.row1+' '+'row'}>
            <div className={styles.col+' '+'col-sm-8'}>Certified Spare Parts</div>
            <div className={styles.col2+' '+'col-sm-2'}>logo1</div>
            <div className={styles.col2+' '+'col-sm-2'}>logo2</div>
        </div>
        <div className={styles.row1+' '+'row'}>
            <div className={styles.col1+' '+'col-sm'}>Image1</div>
            <div className={styles.col1+' '+'col-sm'}>Image2</div>
            <div className={styles.col1+' '+'col-sm'}>Image3</div>
            <div className={styles.col1+' '+'col-sm'}>Image4</div>
            <div className={styles.col1+' '+'col-sm'}>Image5</div>
        </div>
    </div>
  )
}

export default CertifiedSpareParts
