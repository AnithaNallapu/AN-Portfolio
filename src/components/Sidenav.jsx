import React from 'react'
import { useState } from 'react'
import { AiOutlineMail, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { GrCertificate } from 'react-icons/gr'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { BsPerson } from 'react-icons/bs'

export default function Sidenav() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] '/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20} />
              <span className='pl-4'>about</span>
            </a>
            <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <RiLightbulbFlashLine size={20} />
              <span className='pl-4'>skills</span>
            </a>
            <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav} href="#certificates" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrCertificate size={20} />
              <span className='pl-4'>Certificates</span>
            </a>
            <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
           
          </div>
        )
        :(
          ''
        )
      }

    <div className='md:block hidden fixed top-[25%] z-10'>
      <div className='flex flex-col'>
      <a 
      href="#main" 
      title="Home"
      className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
      <AiOutlineHome size={20}/>
      </a>
      <a 
      href="#about" 
      title="About"
      className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
      <BsPerson size={20}/>
      </a>
      <a 
      href="#skills" 
      title="Skills"
      className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
      <RiLightbulbFlashLine size={20}/>
      </a>
      <a 
      href="#projects" 
      title="Projects"
      className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
      <AiOutlineProject size={20}/>
      </a>
      <a 
      href="#certificates" 
      title="Certificates"
      className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
      <GrCertificate size={20}/>
      </a>
      <a 
      href="#contact" 
      title="Contact"
      className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
      <AiOutlineMail size={20}/>
     </a>
    </div>
  </div>

    </div>
  )
}
