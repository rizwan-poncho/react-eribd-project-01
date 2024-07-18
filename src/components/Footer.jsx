import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#2A2A2A] py-10 px-40">
        <div className="grid grid-cols-7 gap-16">
          {/* About  */}
          <div className="col-span-3 w-full">
            <p className="pl-3 border-l-4  border-green-600 text-white font-medium text-xl">
              About
            </p>
            <p className="pt-5 text-gray-300 text-justify text-sm">
              In pursuance of the Bangladesh Government’s Policy for Regional
              Cooperation and Look-East Strategy, the business communities of
              Bangladesh and Philippines felt the necessity of creating a
              platform for the promotion of trade and business between the two
              countries. The Bangladesh Philippines Chamber of Commerce and
              Industry (BPCCI) was established in the year 2013 to that end.
            </p>
          </div>

          {/* Secretariat  */}
          <div className="col-span-2 w-full">
            <div className="w-full">
              <p className="pl-3 border-l-4  border-green-600 text-white font-medium text-xl">
                Secretariat
              </p>
            </div>

            {/* Address  */}

            <div className="w-full pt-5 grid grid-cols-10 gap-4">
              <div className="col-span-1 ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div className="col-span-9 ">
                <p className="text-gray-300 text-justify text-sm">
                  House 1238, Road 09, Avenue 02, Mirpur DOHS, Dhaka 1216
                </p>
              </div>
            </div>

            {/* Email  */}
            <div className="w-full pt-5 grid grid-cols-10 gap-4">
              <div className="col-span-1 ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div className="col-span-9 ">
                <p className="text-gray-300 text-justify text-sm">
                  secretariat@bpcci.org
                </p>
              </div>
            </div>

            {/* Phone  */}
            <div className="w-full pt-5 grid grid-cols-10 gap-4">
              <div className="col-span-1 ">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
              </div>
              <div className="col-span-9 ">
                <p className="text-gray-300 text-justify text-sm">
                  +880 1925 125 148
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact  */}
          <div className="col-span-2 w-full">
            <p className="pl-3 border-l-4  border-green-600 text-white font-medium text-xl">
              Quick Contact
            </p>

            <div className="relative  mt-3">
              <label className="leading-7 text-sm text-gray-300">Name</label>
              <input
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative ">
              <label className="leading-7 text-sm text-gray-300">Email</label>
              <input
                type="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative ">
              <label className="leading-7 text-sm text-gray-300">Message</label>
              <textarea class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"  rows={1}></textarea>
            </div>

            <div className="relative mt-1">
              <button className="px-5 py-2 bg-green-600 text-white rounded-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
