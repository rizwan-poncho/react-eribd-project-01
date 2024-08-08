import React from "react";
import aboutUsBanner from "../assets/about-us-banner-photo.png";
import BoardOfDirector01 from "../assets/board-of-director-01.jpg";
import BoardOfDirector02 from "../assets/board-of-director-02.jpg";
import BoardOfDirector03 from "../assets/board-of-director-03.jpg";
import BoardOfDirector04 from "../assets/board-of-director-04.png";
import BoardOfDirector05 from "../assets/board-of-director-05.jpg";
import BoardOfDirector06 from "../assets/board-of-director-06.jpg";
import BoardOfDirector07 from "../assets/board-of-director-07.jpg";
import BoardOfDirector08 from "../assets/board-of-director-08.jpg";
import BoardOfDirector09 from "../assets/board-of-director-09.jpg";
import BoardOfDirector10 from "../assets/board-of-director-10.jpg";
import BoardOfDirector11 from "../assets/board-of-director-11.jpg";
import BoardOfDirector12 from "../assets/board-of-director-12.jpg";
import BoardOfDirector13 from "../assets/board-of-director-13.jpg";
import BoardOfDirector14 from "../assets/board-of-director-14.jpg";
import BoardOfDirector15 from "../assets/board-of-director-15.png";
import AdvisoryBoardMember01 from "../assets/Advisory-Board-Member-01.jpg";

const BoardOfDirector = () => {
  const members = [
    {
      name: "Akber (AL) Hakim",
      position: "President",
      photo: BoardOfDirector01,
    },
    {
      name: "Shams Mahmud",
      position: "Vice President",
      photo: BoardOfDirector02,
    },
    {
      name: "Jobayer Ahmed",
      position: "Director (Finance)",
      photo: BoardOfDirector03,
    },
    {
      name: "Maksuda Khan Misha",
      position: "Director (Operations)",
      photo: BoardOfDirector04,
    },
    {
      name: "Imran Ahmed",
      position: "President",
      photo: BoardOfDirector05,
    },
    {
      name: "Waqar Ahmed Chowdhury",
      position: "Director",
      photo: BoardOfDirector06,
    },
    {
      name: "Dato Dr. Mir Anisuzzaman",
      position: "Director",
      photo: BoardOfDirector07,
    },
    {
      name: "Tanvir Khan",
      position: "Director",
      photo: BoardOfDirector08,
    },
    {
      name: "Anisuzzaman",
      position: "Director",
      photo: BoardOfDirector09,
    },
    {
      name: "Khorshed Alam ",
      position: "Director",
      photo: BoardOfDirector10,
    },
    {
      name: "Dr. M. Masrur Reaz",
      position: "Director",
      photo: BoardOfDirector11,
    },
    {
      name: "N.K.A. Mobin FCA",
      position: "Director",
      photo: BoardOfDirector12,
    },
    {
      name: "Humayun Rashid",
      position: "Director",
      photo: BoardOfDirector13,
    },
    {
      name: "S. M. Rahman",
      position: "Director",
      photo: BoardOfDirector14,
    },
    {
      name: "Md. Salauddin Chowdhury",
      position: "Director",
      photo: BoardOfDirector15,
    },
  ];

  return (
    <div className="relative">
      {/* Banner Section */}
      <div className="relative mb-16">
        <img className="w-full" src={aboutUsBanner} alt="About Us Banner" />
        <h1
          className="text-2xl font-bold text-green-600 sm:text-3xl md:text-5xl lg:text-5xl"
          style={{
            position: "absolute",
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            margin: 0,
          }}
        >
          BOARD OF DIRECTORS
        </h1>
      </div>

      {/* Board of Directors Section */}
      <div className="container px-4 mx-auto mb-20 lg:px-48">
        <div className="grid grid-cols-1 gap-8 mb-24 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg group hover:shadow-xl"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="object-cover w-full h-56 transition-transform duration-300 rounded-t-lg md:h-72 lg:h-80 group-hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center h-32 p-2 text-center transition-colors duration-300 bg-white md:p-3 group-hover:bg-green-800 group-hover:text-white">
                <h3 className="text-sm font-semibold md:text-base lg:text-lg">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 md:text-sm group-hover:text-white">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board Section */}
        <div>
          <h1 className="text-center text-gray-600 lg:text-4xl md:text-3xl sm:text-xl">
            ADVISORY BOARD
          </h1>
          <div className="w-32 h-1 mx-auto mt-2 mb-5 bg-green-700 advisory-board-divider"></div>

          {/* New Advisory Board Member */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg group hover:shadow-xl">
              <img
                src={AdvisoryBoardMember01}
                alt="New Advisory Board Member"
                className="object-cover w-full h-56 transition-transform duration-300 rounded-t-lg md:h-72 lg:h-80 group-hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center h-32 p-2 text-center transition-colors duration-300 bg-white md:p-3 group-hover:bg-green-800 group-hover:text-white">
                <h3 className="text-sm font-semibold md:text-base lg:text-lg">
                Mahbubur Rahman
                </h3>
                <p className="text-xs text-gray-500 md:text-sm group-hover:text-white">
                Cheif Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirector;
