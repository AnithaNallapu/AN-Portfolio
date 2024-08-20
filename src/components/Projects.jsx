import React from 'react'
import excelimg from '../assets/excel.png'
import powerbiimg from '../assets/powerbi.png'
import ProjectsItem from './ProjectsItem'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-5xl font-bold text-center text-purple-900'>Projects</h1>
        <p className='text-center py-11'>This collection showcases a range of personal projects developed using diverse data sources and tools. 
          Each project highlights my ability to independently analyse, design, and implement solutions across various domains. 
          These projects reflect my commitment to continuous learning and experimentation with new technologies.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectsItem img={excelimg} title='Excel Project'/>
          <ProjectsItem img={powerbiimg} title='PowerBI Project'/>
        </div>
    </div>
  )
}

export default Projects