import React from 'react'

const Workitem = ({duration, role, employer, location, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-purple-500'>
      <li className='mb-5 ml-14'>
        <div className='absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-bold text-white bg-purple-900 rounded-md'>{duration}</span>
          <span className='text-lg font-bold text-purple-900'>{role}</span>
        </p>
        <p className='my-2 flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm'>
        <span className='text-lg font-bold text-purple-900'>{employer}</span>
        </p>
        <p><span className='font-semibold text-purple-900'>{location}</span></p>
        <p className='my-4 text-base font-normal text-black'>{details}</p>
      </li>
    </ol>
  )
}

export default Workitem