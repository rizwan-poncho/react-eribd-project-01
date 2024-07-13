import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Img1 from "../assets/01.webp"
import Img2 from "../assets/02.webp"

const HomePage = () => {

    const sliderImage = [Img1,Img2]
   
  return (
    <>
    <Swiper
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className='w-full'
    >

      {sliderImage.map((element)=>{
        return(
            <SwiperSlide  className='!w-full'>
            <img src={element} className='!w-full !h-96 object-cover' alt="Slide 1" />
          </SwiperSlide>
        )
      })}
    </Swiper>
    </>
  );
};

export default HomePage;