import React from 'react'
import styles from "./TopPicks.module.css"

const TopPicks = () => {
  return (
    <div>
        {/* Top Picks for you  */}
      <div className={styles.TopPicksTitle}>Top picks for your car</div>
            <div className={styles.PicksImage+" " +'row'}>
                <div className={styles.Image+' '+"col-sm"}>Image1</div>
                <div className={styles.Image+' '+"col-sm"}>Image2</div>
                <div className={styles.Image+' '+"col-sm"}>Image3</div>
                <div className={styles.Image+' '+"col-sm"}>Image4</div>
               
            </div>
    </div>
  )
}

export default TopPicks
