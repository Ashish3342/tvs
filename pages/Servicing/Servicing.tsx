import React from 'react';
import InsurancePatner from '../Insurance/InsurancePatner/InsurancePatner';
import Blog from '../../Component/Common/Blog/Blog';
import CommonQuestions from '../../Component/Common/CommonQuestions/CommonQuestions';
import DiscountBar from '../../Component/Common/DiscountBanner/DiscountBar';
import MyTvsBenefits from './MyTVSBenefits/MyTvsBenefits';
import RegisterServiceVehicle from './RegisterServiceVeichle/RegisterServiceVeichle'
import Services from './Services/Services';
import GetMonsoonReady from './GetMonSoonReady/GetMonsoonReady';

const Servicing = () => {
  return (
    <div>

    <DiscountBar/>
    <RegisterServiceVehicle/>
    <Services/>
    <GetMonsoonReady/>
    <MyTvsBenefits/>
    <Blog/>

    <CommonQuestions/>

    </div>
  )

}

export default Servicing