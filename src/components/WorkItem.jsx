import React from 'react'

function WorkItem({imgUrl, title, tech, workUrl, text}) {
  return (
    <a href={workUrl} target="_blank" className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg overflow-hidden'>
        <img src={imgUrl} alt={title} className="w-full h-36 md:h-48 object-cover" />
        <div className='text-gray-600 dark:text-gray-300 p-5 w-full'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start pb-4
            text-xs md:text-sm'>
                {tech.map(item => (
                    <span key={item}
                    className='inline-block px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded-md'
                    >
                        {item}
                    </span>
                ))}
            </p>
            <p className='text-md text-gray-600 dark:text-gray-300'>{text}</p>
        </div>
    </a>
  )
}

export default WorkItem