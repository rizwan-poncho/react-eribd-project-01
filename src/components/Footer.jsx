import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='w-full bg-[#2A2A2A] py-10 px-20'>
        <div className="grid grid-cols-7 gap-16">

            {/* About  */}
            <div className="col-span-3 w-full">
                <p className='pl-3 border-l-4  border-green-600 text-white font-medium text-xl'>About</p>
                <p className='pt-5 text-gray-300 text-justify text-sm'>In pursuance of the Bangladesh Government’s Policy for Regional Cooperation and Look-East Strategy, the business communities of Bangladesh and Philippines felt the necessity of creating a platform for the promotion of trade and business between the two countries. The Bangladesh Philippines Chamber of Commerce and Industry (BPCCI) was established in the year 2013 to that end.</p>
            </div>


            {/* Secretariat  */}
            <div className="col-span-2 w-full">
           
                <p className='pl-3 border-l-4  border-green-600 text-white font-medium text-xl'>Secretariat</p>
                
                <p className='pt-5 text-gray-300 text-justify text-sm'>In pursuance of the Bangladesh Government’s Policy for Regional Cooperation and Look-East Strategy, the business communities of Bangladesh and Philippines felt the necessity of creating a platform for the promotion of trade and business between the two countries. The Bangladesh Philippines Chamber of Commerce and Industry (BPCCI) was established in the year 2013 to that end.</p>
            </div>


            {/* Quick Contact  */}
            <div className="col-span-2 w-full">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#ffffff",}} />
                <p className='pl-3 border-l-4  border-green-600 text-white font-medium text-xl'>Quick Contact</p>
                <p className='pt-5 text-gray-300 text-justify text-sm'>In pursuance of the Bangladesh Government’s Policy for Regional Cooperation and Look-East Strategy, the business communities of Bangladesh and Philippines felt the necessity of creating a platform for the promotion of trade and business between the two countries. The Bangladesh Philippines Chamber of Commerce and Industry (BPCCI) was established in the year 2013 to that end.</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;