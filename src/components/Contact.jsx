import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div id='contact' className='bg-purple-900 text-white py-16 px-8'>
      <div className='max-w-[1040px] m-auto'>
        <h1 className='text-5xl font-bold text-center mb-8'>Contact Me</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
          <a href='https://github.com/AnithaNallapu' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center text-center'>
            <FaGithub size={50} className='text-white mb-4' />
            <span className='bg-purple-700 py-2 px-4 rounded-lg text-xl font-semibold'>GitHub</span>
            <span className='text-gray-200 mt-2'>https://github.com/AnithaNallapu</span>
          </a>
          <a href='https://www.linkedin.com/in/anitha-nallapu-thamisetty/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center text-center'>
            <FaLinkedin size={50} className='text-white mb-4' />
            <span className='bg-purple-700 py-2 px-4 rounded-lg text-xl font-semibold'>LinkedIn</span>
            <span className='text-gray-200 mt-2'>https://www.linkedin.com/in/anitha-nallapu-thamisetty/</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
