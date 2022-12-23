import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image';
// import SocialMedia from './socialMedia'
export default function Footer() {
  return (
   
    <div className="container" >
     
      
      <div className="row">
        
        <div className={styles.col1 + ' ' + "col-sm"}>
          
          <h6 className="fw-bold mb-4">
            <Image src="/logo.png" height="70" width="170" alt=""></Image>
          </h6>
             
          <h6 className="text-uppercase fw-bold mb-4">
            <br/>
          </h6>
          <p>
            <a className={styles.colour} href="#!" >Home</a>
          </p>
          <p>
            <a className={styles.colour} href="#!" >Common Questions</a>
          </p>
          <p>
            <a className={styles.colour} href="#!">Refund& Cancellation</a>
          </p>
          <p>
            <a className={styles.colour} href="#!" >Terms and Condition</a>
          </p>
        
        </div>
        

        
        <div className={styles.col2 + ' ' + "col-sm"}>
          
          <h6 className="text-uppercase fw-bold mb-4">
          <br/><br/><br/><br/><br/><br/>
          </h6>
          <p>
            <a className={styles.colour} href="#!" >Blogs</a>
          </p>
          <p>
            <a className={styles.colour} href="#!">Find MYTVS WORKSHOP</a>
          </p>
          <p>
            <a className={styles.colour} href="#!" >CONTACT US</a>
          </p>
          <p>
            <a className={styles.colour} href="#!" >MYTVS LEGACY</a>
          </p>
        </div>
        

       
        

        
        <div className={styles.col3+' '+ "col-sm"}>
          
          <h6 className={styles.location }>MUMBAI <button className="btn btn-light">˅</button></h6>
         <br/><br/><br/>
          <p className={styles.colour}>📞&nbsp;1800-260-0301</p>
          <p className={styles.colour}> (Mon-Sat) 9:30AM TO 6:30PM</p>
          <p className={styles.colour}>Social Media</p>
          <p className={styles.colour}>Google Play Buttons</p>
          {/* <SocialMedia/>
          */}
       
        </div>
      
      </div>
      
  
  
<hr/>
  
  <div className={styles.copyright + ' ' + "text-left p-4"} >
    Copyright @ 2022 myTVS ALL Rights Reserved: &nbsp;&nbsp;&nbsp;
    <a className={styles.copy + ' ' + "text-reset fw-bold"} href="">Privacy Policy</a>
  </div>
  
</div>
  )
};
