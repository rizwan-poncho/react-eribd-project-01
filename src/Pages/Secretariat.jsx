import React from "react";
import aboutUsBanner from "../assets/about-us-banner-photo.png";
import secretariatMember01 from "../assets/secretariat-mahmudul-hasan.jpg";
import secretariatMember02 from "../assets/secretariat-rafi.png";
import secretariatMember03 from "../assets/secretariat-syed.jpg";

const Secretariat = () => {
  const members = [
    {
      photo: secretariatMember01,
      name: "Mahmudul Hasan",
      position: "Manager, Finance & Admin",
    },
    {
      photo: secretariatMember02,
      name: "S. M. Rafi",
      position: "Manager, IT",
    },
    {
      photo: secretariatMember03,
      name: "Syed Rizwan Ahmed",
      position: "Program Officer",
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
          SECRETARIAT
        </h1>
      </div>

      {/* Secretariat Member Section */}
      <div className="container px-4 mx-auto mb-20 lg:px-48">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg group hover:shadow-xl"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="object-cover w-full h-64 transition-transform duration-300 rounded-t-lg md:h-80 lg:h-96 group-hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center h-48 p-2 text-center transition-colors duration-300 bg-white md:p-4 group-hover:bg-green-800 group-hover:text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 group-hover:text-white">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secretariat;
