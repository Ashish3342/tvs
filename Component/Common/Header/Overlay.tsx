import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import styles from './Navbar.module.css'

function OverLay() {
  return (
    <div>{['bottom'].map((placement) => (
      <OverlayTrigger
        trigger="click"
        key='bottom'
        placement='bottom'
        overlay={
          <Popover id={`popover-positioned-${placement}`}>
           
            <Popover.Body>
              <a href='/'>FAQs</a><br/>
              <a href='/'>Refund & Cancellation</a><br/>
              <a href='/'>Service Estimator</a><br/>
              <a href='/'>Terms & Condition</a><br/>
              <a href='/'>Privacy Policy</a><br/>
              <a href='/'>Blogs</a><br/>
              <a href='/'>Find my TVS Workshop</a><br/>
              <a href='/'>Customer Service</a><br/>
              <a href='/'>Contact us</a><br/>
              <hr/>
              <a href='/'>myTVS Leagacy</a><br/>
            </Popover.Body>
          </Popover>
        }
      >
            <button className={styles.button + ' ' + "btn btn-light"}>&#x2630;</button>
      </OverlayTrigger>
    ))}</div>
  );
}

export default OverLay