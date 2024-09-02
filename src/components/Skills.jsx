// src/components/Skills.jsx

import React from 'react';
import SkillsItem from './Skillsitem';

// List of skills
const skillsList = [
  'Excel',
  'Power BI',
  'SQL',
  'Python',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tableau'
];

const Skills = () => {
  return (
    <section id='skills' className="py-12 text-center">
      <h2 className="text-4xl text-purple-900 font-bold mb-16 tracking-wide">Key Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-center">
        {skillsList.map((skill, index) => (
          <SkillsItem key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
