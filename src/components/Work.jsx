import React from 'react'
import Workitem from './Workitem'
const data = [
    {
        duration: 'Mar 2022 - Present' ,
        role: 'PART-TIME JOB',
        employer : 'Acorn Recruitment Ltd',
        location: 'Preston, UK',
        details: 'Part-time Job'


    },
    {
      duration: 'Mar 2019 - Apr 2021' ,
      role: 'ANALYST',
      employer : 'Virtusa Systems Private Limited',
      location: 'Hyderabad, India',
      details: 'Collected data from multiple sources using MS Excel; analysed trends to produce insightful reports for administration.'
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='my-11 text-5xl font-bold text-center text-purple-900'>Work</h1>
    {data.map((item, idx) => (
        <Workitem 
        key={idx}
        duration={item.duration}
        role={item.role}
        employer={item.employer}
        location={item.location}
        details={item.details}
        />
    ))}</div>
  )
}

export default Work