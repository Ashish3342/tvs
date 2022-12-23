import React from "react";
import styles from './RegisterServiceVehicle.module.css'
function RegisterServiceVehicle(){
    return(
        <div className={styles.ServiceBanner + ' ' + "row"}>
                <div className={styles.ImageBanner + ' ' + "col-sm"}>
                    Image
                </div>
                <div className={styles.ServiceRegisration + ' ' + "col-sm"}>
                    Vechile Service registration Form
                </div>
            </div>
    )
}

export default RegisterServiceVehicle