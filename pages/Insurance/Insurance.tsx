import React from "react";
import styles from './Insurance.module.css';
import Blogs from "../../Component/Common/Blog/Blog";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import InsuranceCareWork from "./InsuranceCareWork/InsuranceCareWork";
import InsuranceAdvantage from "./InsuranceAdvantage/InsuranceAdvantage";
import InsurancePatner from "./InsurancePatner/InsurancePatner";
import CommonQuestions from "../../Component/Common/CommonQuestions/CommonQuestions";
import NavbarScroll from "../../Component/Common/Header/Navbar";
import Footer from "../../Component/Common/Footer/Footer";

function Insurance(){
    return(
        <div className={styles.InsuranceMain + ' ' + 'container-fluid'}>
           
            <ServiceBanner />

            {/* How TVS Insurance Care Works */}
            <InsuranceCareWork />

            {/* TVS Insurance Advantage */}
            <InsuranceAdvantage />

            {/* Insurance Patner */}
            <InsurancePatner />

            {/* Blogs */}
            <Blogs />

            {/* Common Question */}
            <CommonQuestions />


        </div>
    )
}

export default Insurance;