import React from "react";
import styles from "./Catalogue.module.css"
function Catalogue (){
    return (
        <div>
            <div className={styles.CatalogueTitle}>myTVS Accessories Catalogue</div>
            <div className={styles.CatalogueImage+" " +'row'}>
                <div className={styles.Image1+' '+"col-sm"}>Image1</div>
                <div className={styles.Image+' '+"col-sm"}>Image2</div>
                <div className={styles.Image+' '+"col-sm"}>Image3</div>
                <div className={styles.Image+' '+"col-sm"}>Image4</div>
            </div>
        </div>
    )
}

export default Catalogue;