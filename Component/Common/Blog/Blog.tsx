import React from "react";
import styles from "./Blog.module.css"

function Blog(){
  return (
    <div className="container-fluid">
        <div className={styles.Text + ' ' + "row"}>Blogs</div>
        <div className={styles.Bolg + ' ' + 'row'}>
          <div className={styles.card + ' ' + 'col-sm'}>Blog A</div>
          <div className={styles.card + ' ' + 'col-sm'}>Blog B</div>
          <div className={styles.card + ' ' + 'col-sm'}>Blog C</div>
          <div className={styles.card + ' ' + 'col-sm'}>Blog D</div>
          <div className={styles.card + ' ' + 'col-sm'}>Blog E</div>
        </div>
    </div>
  );
};

export default Blog;