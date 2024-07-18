import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Img1 from "../assets/01.webp";
import Img2 from "../assets/02.webp";

const HomePage = () => {
  const sliderImage = [Img1, Img2];

  return (
    <>
      {/* Slider */}
      <Swiper
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {sliderImage.map((element, index) => {
          return (
            <SwiperSlide key={index} className="!w-full">
              <img
                src={element}
                className="!w-full !h-96 object-cover"
                alt="Slide 1"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Section Two  */}

      <div className="w-full grid grid-cols-2 gap-10 px-20 py-20">
        <div className="w-full">
          <div className="px-10 py-10">
          <p className="text-3xl font-medium uppercase">
            Bangladesh Philippines Chamber of Commerce & Industry
          </p>
          <div className="border-t-4 border-green-600 w-40"></div>

          <p className="pt-4 text-base text-justify text-gray-700">
            In pursuance of the Bangladesh Government’s Policy for Regional
            Cooperation and Look-East Strategy, the business communities of
            Bangladesh and Philippines felt the necessity of creating a platform
            for the promotion of trade and business between the two countries.
            The Bangladesh Philippines Chamber of Commerce and Industry (BPCCI)
            was established in the year 2013 to that end.
          </p>
          <p className="pt-4 text-base text-justify text-gray-700">
            BPCCI Objectives:
          </p>


          <ul className="list-disc list-outside pl-5 mt-3">
            <li className="text-base text-justify text-gray-700 mt-3">To promote and develop investment, trade and commerce between Bangladesh and Philippines.</li>
            <li className="text-base text-justify text-gray-700 mt-3">To provide a forum for exchange of views between the various chambers, government agencies and business delegations.</li>
            <li className="text-base text-justify text-gray-700 mt-3">To provide support to businesbaseen of both the countries for the settlement of any dispute arising out of business transactions through arbitration or mediation.</li>
            <li className="text-base text-justify text-gray-700 mt-3">To collect and disseminate information relating to opportunities for investment, trade and commerce.</li>
            <li className="text-base text-justify text-gray-700 mt-3">To organize trade delegations, seminars, symposiums and trade fairs in each other’s country.</li>
          </ul>
          </div>


        </div>


        <div className="w-full bg-[#F2F2F2] flex justify-center ">
        <div className="px-10 py-10 ">
        <div className="flex justify-center">
       <div>
       <p className="text-3xl font-medium uppercase">
            Message from the President
          </p>
          <div className="flex justify-center" >
          <div className="border-t-4 border-green-600 w-40"></div>
          </div>
       </div>
        </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
