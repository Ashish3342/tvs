import React from 'react';
import InsurancePatner from '../Insurance/InsurancePatner/InsurancePatner';
import Blog from '../../Component/Common/Blog/Blog';
import CommonQuestions from '../../Component/Common/CommonQuestions/CommonQuestions';
import DiscountBar from '../../Component/Common/DiscountBanner/DiscountBar';
import MyTvsBenefits from './MyTVSBenefits/MyTvsBenefits';
import RegisterServiceVehicle from './RegisterServiceVeichle/RegisterServiceVeichle'
import Services from './Services/Services';
import GetMonsoonReady from './GetMonSoonReady/GetMonsoonReady';
import Workshops from './Workshops/Workshops';
import Coupon from './Coupon/Coupon';
import CertifiedSpareParts from './CertifiedSparePart/CertifiedSpareParts';
import Professional from './Professionals/Professional';
import CustomerReview from './CustomerReview/CustomerReview';
import DownloadAppCoupon from './DownloadAppCoupon/DownloadAppCoupon';
import GetAccessories from './GetAccessories/GetAccessories';

const Servicing = () => {
  return (
    <div>

    <DiscountBar/>
    <RegisterServiceVehicle/>
    <Services/>
    <GetMonsoonReady/>
    <MyTvsBenefits/>
    <Coupon/>
    <Workshops/>
    <CertifiedSpareParts/>
    <Professional/>
    <CustomerReview/>
    <DownloadAppCoupon/>
    <GetAccessories/>
    <Blog/>

    <CommonQuestions/>

    </div>
  )

}

export default Servicing