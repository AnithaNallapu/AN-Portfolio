import React from 'react'
import myimage from './myimage.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen object-cover object-left bg-purple-100'>
        <img className='absolute top-1/2 right-60 -translate-y-1/2 w-96 h-96 rounded-full object-cover border-4 border-purple-500' src={myimage} alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 '>
        <div className='max-w-[700px]  m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '>I'm Anitha Nallapu</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 '> 
            I'm
            <TypeAnimation
              sequence={[ 
                ' an Analyst',
                2000,
                ' an MBA Graduate',
                2000,
                ' a Data Aspirant',
                2000,
                ' a Tech Enthusiast',
                2000
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}  // Corrected 'paddingleft' to 'paddingLeft'
              repeat={Infinity}
            /> 
          </h2>

            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <FaLinkedinIn className='cursor-pointer' size={20}/>
              <FaGithub className='cursor-pointer' size={20}/>
            </div>
        </div>
        </div>
        
    </div>

  )
}
export default Main
