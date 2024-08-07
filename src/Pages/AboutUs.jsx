import React, { useState, useEffect } from "react";
import aboutUsBanner from "../assets/about-us-banner-photo.png";
import aboutUsMember from "../assets/about-us-member.jpg";
import aboutUsSlider01 from "../assets/about-us-slider-01.jpg";
import aboutUsSlider02 from "../assets/about-us-slider-02.jpg";
import aboutUsSlider03 from "../assets/about-us-slider-03.jpg";
import aboutUsSlider04 from "../assets/about-us-slider-04.jpg";
import aboutUsSlider05 from "../assets/about-us-slider-05.jpg";

const AboutUs = () => {
  const sliderImages = [
    aboutUsSlider01,
    aboutUsSlider02,
    aboutUsSlider03,
    aboutUsSlider04,
    aboutUsSlider05,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Banner Section */}
      <div className="relative mb-16">
        <img className="w-full" src={aboutUsBanner} alt="About Us Banner" />
        <h1 className='text-2xl font-bold text-green-600 sm:text-3xl md:text-5xl lg:text-5xl' style={{
        position: 'absolute',
        top: '50%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        margin: 0,
      }}>
        ABOUT BPCCI
      </h1>
      </div>

      {/* Main Content Container */}
      <div className="container px-4 mx-auto lg:px-8">
        {/* Member Image and Description */}
        <div className="flex flex-col items-center justify-center mb-20">
          <img
            className="w-full max-w-md mb-5 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-6xl rounded-xl"
            src={aboutUsMember}
            alt="About Us Member"
          />
          <h3 className="mb-10 text-sm text-center">
            The president of BPCCI Mr. Akber Hakim and its vice president Mr.
            Shams Mahmud call on the Hon. Commerce Minister of the People’s
            Republic of Bangladesh Mr. Tipu Munshi, MP.
          </h3>
        </div>

        {/* Text and Image Slider Section */}
        <div className="flex flex-col mb-20 lg:flex-row lg:items-start lg:justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-2xl font-bold text-left">ABOUT BPCCI</h1>
            <article className="mb-2 text-left">
              Bangladesh Philippines Chamber of Commerce & Industry
            </article>
            <div className="w-24 h-1 mb-5 bg-green-700"></div>
            <article className="mb-8 text-left">
              In pursuance of the Bangladesh Government’s Policy for Regional
              Cooperation and Look-East Strategy, the business communities of
              Bangladesh and Philippines felt the necessity of creating a
              platform for promotion of trade and business between the two
              countries. The Bangladesh Philippines Chamber of Commerce and
              Industry (BPCCI) was established in the year 2013 to that end.
            </article>
            <p className="mb-2 text-left">BPCCI Objectives:</p>
            <ul className="mb-4 text-left list-disc list-inside">
              <li>
                To promote and develop investment, trade and commerce between
                Bangladesh and Philippines.
              </li>
              <li>
                To provide a forum for exchange of views between the various
                chambers, government agencies and business delegations.
              </li>
              <li>
                To provide support to businessmen of both the countries for the
                settlement of any dispute arising out of business transactions
                through arbitration or mediation.
              </li>
              <li>
                To collect and disseminate information relating to opportunities
                for investment, trade and commerce.
              </li>
              <li>
                To organize trade delegations, seminars, symposiums and trade
                fairs in each other’s country.
              </li>
            </ul>
          </div>

          {/* Images Slider */}
          <div className="relative lg:w-1/2">
            <div className="relative flex overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {sliderImages.map((image, index) => (
                  <img
                    key={index}
                    className="flex-shrink-0 w-full rounded-xl"
                    src={image}
                    alt={`Slider Image ${index + 1}`}
                  />
                ))}
              </div>
              {/* Navigation Buttons */}
              <button
                className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 left-4"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 right-4"
                onClick={handleNext}
              >
                &gt;
              </button>
              
              {/* Indicators */}
              <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-green-600" : "bg-gray-400"
                    }`}
                    onClick={() => handleIndicatorClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
