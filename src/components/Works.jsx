import React from 'react'
import SectionTitle from './SectionTitle'
import WorkItem from './WorkItem'
import works from '../data/works'

function Works() {
  return (
    <div className='py-12'>
        <SectionTitle id='works'>My Projects</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            {works.map(work => (
                <WorkItem 
                key={work.title}
                imgUrl={work.imgUrl}
                title={work.title}
                tech={work.tech}
                text={work.text}
                workUrl={work.workUrl}
                ></WorkItem>
            ))}
        </div>
    </div>
  )
}

export default Works