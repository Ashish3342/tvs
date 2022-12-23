import React from 'react'
import styles from './MyTvsBenefits.module.css'

const MyTvsBenefits = () => {
  return (
    <div className={styles.MyTvs}>
        {/* MyTVS benefits */}

        <div className={styles.MyTvsRow+" " +'row'}>
            <div className={styles.MyTvsCol1+' '+"col-sm-6"}>
                MyTVS workshops near you
            </div>
            <div className={styles.MyTvsCol+' '+"col-sm"}>
                Image1
            </div>
            <div className={styles.MyTvsCol+' '+"col-sm"}>
                Image2
            </div>
            <div className={styles.MyTvsCol+' '+"col-sm"}>
                Image3
            </div>
            <div className={styles.MyTvsCol+' '+"col-sm"}>
                Image4
            </div>
        </div>

      
    </div>
  )
}

export default MyTvsBenefits
