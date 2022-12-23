import React from 'react'
import ProductBanner from '../../Component/Common/ProductBanner/ProductBanner'
import TopPicks from './TopPicks/TopPicks'
import CarEssential from './CarEssential/CarEssential'
import VehicleServicing from './VehicleService/VehicleServicing'
import OfferBanner from '../../Component/Common/OfferBanner/OfferBanner'
import Blog from '../../Component/Common/Blog/Blog'
import CommonQuestions from '../../Component/Common/CommonQuestions/CommonQuestions'
import DiscountBar from '../../Component/Common/DiscountBanner/DiscountBar'
import Catalogue from './AccessoriesCatalogue/Catalogue'
import SubCatalogue from './AccessoriesCatalogue/SubCatalogue'
const Accessories = () => {
  return (
    <div>
        <ProductBanner />


        <TopPicks />
      

        <CarEssential />


        <VehicleServicing />
        <Catalogue/>
        
        <SubCatalogue/><br/>

        <DiscountBar />

        <OfferBanner />

        <Blog />

        <CommonQuestions />
    </div>
  )
}

export default Accessories