import React from 'react'
import styles from "./CarEssential.module.css"

const CarEssential = () => {
  return (
    <div>
        {/* Car Essentials  */}
      <div className={styles.CarEssentialTitle}>Car Essential</div>
            <div className={styles.PicksImage+" " +'row'}>
                <div className={styles.Image+' '+"col-sm"}>Image1</div>
                <div className={styles.Image+' '+"col-sm"}>Image2</div>
                <div className={styles.Image+' '+"col-sm"}>Image3</div>
                <div className={styles.Image+' '+"col-sm"}>Image4</div>
               
            </div>
    </div>
  )
}

export default CarEssential