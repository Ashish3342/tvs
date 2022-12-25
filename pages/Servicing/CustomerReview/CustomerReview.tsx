import React from 'react'
import styles from './CustomerReview.module.css'

const CustomerReview = () => {
  return (
    <div>
      <div className={styles.row +' '+'row'}> 
      <div className={styles.col+ " "+'col-sm-10'}> What our customer say</div>
      <div className={styles.col1+ ' '+'col-sm-2'}>view all{'->'}</div>
      </div>
      <div className={styles.row1 +' '+'row'}> 
      <div className={styles.col2+ " "+'col-sm'}>Image1</div>
      <div className={styles.col2+ ' '+'col-sm'}>Image2</div>
      <div className={styles.col2+ ' '+'col-sm'}>Image3</div>
      </div>
    </div>
  )
}

export default CustomerReview
