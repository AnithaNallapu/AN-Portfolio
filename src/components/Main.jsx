import React from 'react';
import myimage from './myimage.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen bg-purple-100 flex justify-center items-center'>
      
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        
        {/* Image Section */}
        <div className='flex-shrink-0'>
          <img 
            className='lg:w-96 lg:h-96s w-96 h-96 rounded-full object-cover border-4 border-purple-500'
            src={myimage} 
            alt="Anitha Nallapu" 
          />
        </div>
        
        {/* Text and Animation Section */}
        <div className='lg:ml-10 mt-8 lg:mt-0 text-center lg:text-left'>
          <h1 className='text-4xl lg:text-5xl font-bold text-gray-800'>I'm Anitha Nallapu</h1>
          <h2 className='flex text-2xl lg:text-3xl pt-5 text-gray-800 justify-center lg:justify-start'>
            I'm
            <TypeAnimation
              sequence={[
                ' an Analyst',
                2000,
                ' an MBA Graduate',
                2000,
                ' Aspiring to Work in Data',
                2000,
                ' a Tech Enthusiast',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>

          <div className='flex justify-between pt-8 max-w-[500px] w-full'>
              <a href="https://www.linkedin.com/in/anitha-nallapu-thamisetty/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='cursor-pointer' size={20}/></a>
              <p className='text-lg text-purple-800 font-bold' >Data Aspirant</p>
              <a href="https://github.com/AnithaNallapu" target="_blank" rel="noopener noreferrer"><FaGithub className='cursor-pointer' size={20}/></a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Main;
