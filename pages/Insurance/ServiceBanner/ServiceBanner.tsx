import React from "react";
import styles from './ServiceBanner.module.css'
function ServiceBanner(){
    return(
        <div className={styles.ServiceBanner + ' ' + "row"}>
                <div className={styles.ImageBanner + ' ' + "col-sm"}>
                    Image
                </div>
                <div className={styles.ServiceRegisration + ' ' + "col-sm"}>
                    Service registration Form
                </div>
            </div>
    )
}

export default ServiceBanner