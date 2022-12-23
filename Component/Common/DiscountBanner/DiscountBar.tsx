import React from 'react'
import styles from './DiscountBar.module.css'

const DiscountBar = () => {
  return (
    <div>
       {/* Info component */}
       <div className={styles.InfoTitle}></div>
            <div className={styles.InfoBox+" " +'row'}>
                <div className={styles.Info+' '+"col-sm"}>Welcome to myTVS</div>
                <div className={styles.Info+' '+"col-sm"}>Extra 10% off</div>
                <div className={styles.Info+' '+"col-sm"}>Get monsoon ready</div>
                
               
            </div>
    </div>
  )
}

export default DiscountBar
