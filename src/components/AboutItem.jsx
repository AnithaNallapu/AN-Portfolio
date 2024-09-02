// src/components/AboutItem.jsx
import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const AboutItem = ({ title, items }) => {
  const icon = title === "Education" ? <FaGraduationCap className="text-blue-500 mr-2" /> : <FaBriefcase className="text-green-500 mr-2" />;

  return (
    <div className="w-full lg:w-1/3">
      <h3 className="text-2xl font-bold text-purple-700 flex items-center mb-6 justify-center">
        {icon} {title}
      </h3>
      <div className="relative border-l-4 border-purple-100 pl-6">
        {items.map((item, index) => (
          <div key={index} className="mb-10">
            <div className="absolute w-4 h-4 bg-purple-300 rounded-full -left-2.5"></div>
            <p className="text-sm text-black">{item.time}</p>
            <h4 className="text-lg font-semibold text-purple-800 mb-1">{item.role}</h4>
            <p className="text-0.5g text-black font-semibold ">{item.institution}</p>
            <p className="text-sm text-black">{item.place}</p>
            <p className="text-black my-4 ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutItem;
