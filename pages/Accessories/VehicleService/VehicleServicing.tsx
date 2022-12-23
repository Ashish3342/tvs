import React from 'react'
import styles from './VehicleServicing.module.css'

const VehicleServicing = () => {
  return (
    <div>
      <div className={styles.VehicleSercicesTitle}>Get your vehicle serviced with us</div>
            <div className={styles.VehicleServiceImage+" " +'row'}>
                <div className={styles.Image+' '+"col-lg"}>Image1</div>
                <div className={styles.Image+' '+"col-lg"}>Image2</div>
                
               
            </div>
    </div>
  )
}

export default VehicleServicing
