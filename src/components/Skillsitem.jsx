// src/components/SkillsItem.jsx

import React from 'react';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTableau, SiMicrosoftsqlserver, SiPowerbi, SiMicrosoftexcel } from 'react-icons/si';

// Function to return the appropriate icon and color based on the skill
const getIcon = (skill) => {
  switch (skill) {
    case 'Excel':
      return <SiMicrosoftexcel className="text-green-500" />;
    case 'Power BI':
      return <SiPowerbi className="text-yellow-500" />;
    case 'SQL':
      return <SiMicrosoftsqlserver className="text-red-600" />;
    case 'Python':
      return <FaPython className="text-yellow-400" />;
    case 'React':
      return <FaReact className="text-blue-400" />;
    case 'JavaScript':
      return <FaJsSquare className="text-yellow-300" />;
    case 'HTML':
      return <FaHtml5 className="text-orange-600" />;
    case 'CSS':
      return <FaCss3Alt className="text-blue-500" />;
    case 'Tableau':
      return <SiTableau className="text-blue-300" />;
    default:
      return null;
  }
};

// Function to return a border color based on the skill
const getBorderColor = (skill) => {
  switch (skill) {
    case 'Excel':
      return 'border-green-500';
    case 'Power BI':
      return 'border-yellow-500';
    case 'SQL':
      return 'border-red-600';
    case 'Python':
      return 'border-yellow-400';
    case 'React':
      return 'border-blue-400';
    case 'JavaScript':
      return 'border-yellow-300';
    case 'HTML':
      return 'border-orange-600';
    case 'CSS':
      return 'border-blue-500';
    case 'Tableau':
      return 'border-blue-300';
    default:
      return 'border-gray-400';
  }
};

const SkillsItem = ({ skill }) => {
  return (
    <div className={`flex items-center bg-purple-600 p-3 rounded-lg shadow-lg border-4 ${getBorderColor(skill)} hover:shadow-xl transform hover:-translate-y-2 transition duration-300 max-w-xs mx-auto`}>
      <div className="text-4xl mr-4">
        {getIcon(skill)}
      </div>
      <p className="text-white text-xl font-bold">{skill}</p>
    </div>
  );
};

export default SkillsItem;
