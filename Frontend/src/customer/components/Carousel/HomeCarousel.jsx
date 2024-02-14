import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';
 
const HomeCarousel = () => {

 

    const items = HomeCarouselData.map(item =>
        <img className='cursor_pointer z-0' role='presentation' src={item.imageUrl} alt="" />
        
        
)

  return (
    <AliceCarousel
    items={items}
    className="z-1"
    autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        disableButtonsControls
        infinite
    />
     
  )
}

export default HomeCarousel