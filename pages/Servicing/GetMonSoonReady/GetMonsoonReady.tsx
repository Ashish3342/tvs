import React from 'react'
import styles from './GetMonsoonReady.module.css'

const GetMonsoonReady = () => {
  return (
    <div>
       <div className={styles.GetMonsoonReadyRow+" " +'row'}>
            <div className={styles.GetMonsoonReadyRow1+' '+"col-sm-6"}>
               Get Monsoon Ready
            </div>
            <div className={styles.GetMonsoonReadyCol+' '+"col-sm"}>
                RSA SERVICES
            </div>
            <div className={styles.GetMonsoonReadyCol+' '+"col-sm"}>
                Monsoon Proof Windshiels
            </div>
            <div className={styles.GetMonsoonReadyCol+' '+"col-sm"}>
                Battery Services
            </div>
            
        </div>
    </div>
  )
}

export default GetMonsoonReady
