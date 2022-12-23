import React from "react";
import styles from "./SubCatalogue.module.css"
function SubCatalogue (){
    return (
        <div>
            <div className={styles.SubCatalogueImage+" " +'row'}>
                <div className="col">
                <div className={styles.Image+' '+"col-sm"}>Image1 </div>
                <div><button className="button">Add To Cart</button></div>
                </div>

                <div className="col">
                <div className={styles.Image+' '+"col-sm"}>Image2 </div>
                <div><button className="button">Add To Cart</button></div>
                </div>
                <div className="col">
                <div className={styles.Image+' '+"col-sm"}>Image3 </div>
                <div><button className="button">Add To Cart</button></div>
                </div>
                <div className="col">
                <div className={styles.Image+' '+"col-sm"}>Image4 </div>
                <div><button className="button">Add To Cart</button></div>
                </div>
            </div>
        </div>
    )
}

export default SubCatalogue;