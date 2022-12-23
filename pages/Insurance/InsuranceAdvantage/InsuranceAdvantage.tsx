import React from "react";
import styles from './InsuranceAdvantage.module.css'
function InsuranceAdvantage(){
    return(
        <div className={styles.InsuranceAdvantage + ' ' + 'row'}>
                <div className={styles.Text + ' ' + "row"}>
                TVS Insurance Advantage
                </div>
                <div className={styles.Retails + ' ' + 'col-sm'}>
                    Text
                </div>
                <div className={styles.Corporate + ' ' + 'col-sm'}>
                    Text
                </div>
            </div>

    )
}

export default InsuranceAdvantage