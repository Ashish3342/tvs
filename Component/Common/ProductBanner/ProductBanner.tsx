import React from "react";
import styles from './ProductBanner.module.css'

function ProductBanner(){
    return(
        <div className={styles.ProductBanner + ' ' + "row"}>
                <div className={styles.ProductImageBanner + ' ' + "col-sm"}>
                    Image
                </div>
                <div className={styles.ProductBrowser + ' ' + "col-sm"}>
                    Browse all Product with Text
                </div>
            </div>
    )
}

export default ProductBanner