import React from 'react'
import styles from "./Services.module.css"

const Services = () => {
  return (
    <div>
      <div className={styles.SerRowhead +' '+'row'}>
        <div className={styles.SerRowcol +' '+'col-sm-2'}>Services</div>
        <div className={styles.SerRowcol +' '+'col-sm-2'}>Search</div>
      </div>
      <div className={styles.SerRowImage+' '+'row'}>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image1</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image2</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image3</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image4</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image5</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image6</div>
      </div>
      <div className={styles.SerRowImage+' '+'row'}>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image1</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image2</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image3</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image4</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image5</div>
        <div className={styles.SerRowcolImage +' '+'col-sm'}>Image6</div>
      </div>
    </div>
  )
}

export default Services
