import React from 'react'
import styles from './MyTvsBenefits.module.css'

const MyTvsBenefits = () => {
  return (
    <div className={styles.MyTvs}>
        {/* MyTVS benefits */}
       

        <div className={styles.MyTvsRow+" " +'row'}>
            <h5>My TVS benefits</h5>
            <div className={styles.MyTvsCol1+' '+"col-sm-6"}>
                Offerings 
            </div>
            <div className={styles.MyTvsCol+' '+"col-sm-6"}>
                Save upto 40%
            </div>
           
        </div>

      
    </div>
  )
}

export default MyTvsBenefits
