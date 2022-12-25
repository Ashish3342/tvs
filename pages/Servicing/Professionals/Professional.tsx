import React from 'react'
import styles from './Professional.module.css'

const Professional = () => {
  return (
    <div>
      <div className={styles.row1+' '+'row'}>
        <div className={styles.col +' '+'col-sm-8'}> Featured Service Professional</div>
        <div className={styles.col1 +' '+'col-sm-2'}>240hours</div>
        <div className={styles.col1 +' '+'col-sm-2'}>{'->'}</div>
       
      </div>
      <div className={styles.row2+ ' '+ 'row'}>
        <div className={styles.col2+ ' ' +'col-sm'} >Image1</div>
        <div className={styles.col2+ ' ' +'col-sm'} >Image1</div>
        <div className={styles.col2+ ' ' +'col-sm'} >Image1</div>
        
      </div>
    </div>
  )
}

export default Professional
