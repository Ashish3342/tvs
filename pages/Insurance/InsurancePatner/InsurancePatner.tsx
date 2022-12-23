import React from "react";
import styles from "./InsurancePatner.module.css"
function InsurancePatner (){
    return (
        <div>
            <div className={styles.InsuranceParteneTitle}>Our Partners</div>
            <div className={styles.PartnerImage+" " +'row'}>
                <div className={styles.Image+' '+"col-sm"}>Image1</div>
                <div className={styles.Image+' '+"col-sm"}>Image2</div>
                <div className={styles.Image+' '+"col-sm"}>Image3</div>
                <div className={styles.Image+' '+"col-sm"}>Image4</div>
                <div className={styles.Image+' '+"col-sm"}>Image5</div>
                <div className={styles.Image+' '+"col-sm"}>Image6</div>
            </div>
        </div>
    )
}

export default InsurancePatner