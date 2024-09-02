// src/components/About.jsx
import React from 'react';
import AboutItem from './AboutItem';

const About = () => {
  return (
    <section id='about' className=" py-11 px-5 sm:px-10 lg:px-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-purple-900 mb-8 text-center">About Me</h2>
      <p className="text-lg text-black mb-12 text-center max-w-1xl">
      I am a highly motivated professional with a strong passion for technology and business management. With 2 years of experience as an Analyst, 
      I have honed my skills in problem-solving and data analysis.
       Currently seeking new opportunities to leverage my expertise and contribute to innovative projects.
      </p>

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-20 space-y-11 lg:space-y-0">
        <AboutItem 
          title="Education" 
          items={[
            {
                time: "Jan 2022 - Jan 2024", 
                role: "Master of Business Administration", 
                institution: "University of Central Lancashire", 
                place: "Preston, UK",
                description: "Grade: Merit"
            },
            {
              time: "Sep 2012 - May 2016", 
              role: "Bachelor's in Electrical and Electronics Engineering", 
              institution: "Dr.Paul Raj Engineering College", 
              place: "Bhadrachalam, India",
              description: "Grade: First Class with Distinction"
            },
           
          ]} 
        />
        <AboutItem 
          title="Work Experience" 
          items={[
            {
                time: "Mar 2022 - Present", 
                role: "Role : Garden Centre Operations Assistant", 
                institution: "Garden Centre Plants", 
                place: "Barton, UK",
                description: "Led a team in daily garden center operations, ensuring efficient planting, labeling, and production tasks while improving workflows and training new members."
              },
            {
              time: "Mar 2019 - Apr 2021", 
              role: "Role : Analyst", 
              institution: "Virtusa Systems Private Limited", 
              place: "Hyderabad, India",
              description: "Gather and analyse data using MS Excel to produce reports and support data migration, while presenting findings to stakeholders and providing training and support to new employees. Consistently meet and exceed performance goals in a target-driven role."
            },
          ]} 
        />
      </div>
    </section>
    
  );
};

export default About;
