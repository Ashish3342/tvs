import React from 'react'
import styles from './OfferBanner.module.css'

const OfferBanner = () => {
  return (
    <div>
            <div className={styles.OfferBannerImage+" " +'row'}>
                <div className={styles.Image+' '+"col-lg"}>Image1</div>
                <div className={styles.Image+' '+"col-lg"}>Image2</div>
            </div>
    </div>
  )
}

export default OfferBanner
