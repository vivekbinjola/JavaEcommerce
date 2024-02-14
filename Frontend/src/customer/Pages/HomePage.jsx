 import React from 'react'
import HomeCarousel from '../components/Carousel/HomeCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import { Mens_kurta } from './../../data/Mens_kurta';
 
 const HomePage = () => {
   return (
     <div>
        <HomeCarousel />
        <div className='space-y-10 py-20 flex-col'>
        <HomeSectionCarousel data={Mens_kurta} sectionName={"Men's_Kurta"}/>
        <HomeSectionCarousel data={Mens_kurta} sectionName={"Men's_Shoes"}/>
        <HomeSectionCarousel data={Mens_kurta} sectionName={"Men'_Shirt"}/>
        <HomeSectionCarousel data={Mens_kurta} sectionName={"Women's_Top"}/>
        <HomeSectionCarousel data={Mens_kurta} sectionName={"Women's_Pajama"}/>
        
        </div>
      
     </div>
   )
 }
 
 export default HomePage