import React from 'react'
import Typewriter from 'typewriter-effect';

function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
        <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 
       text-indigo-600 font-semibold dark:text-indigo-500'>
         <Typewriter 
              options={{
                strings: [
                  // '<b>Hi, my name is Geoffrey.<b>',
                  // '<b>Welcome to my website!',
                  // '<b>Click the top right corner'
                  '<b>Serial Entrepreneur<b>',
                  '<b>Product Manager',
                  '<b>Software Engineer',
                  '<b>Product Designer',
                  '<b>Growth Hacker',
                  '<b>VC Enthusiast<b>',
                ],
                delay: 50,
                deleteSpeed: 22,
                autoStart: true,
                loop: true,
                pauseFor: 1500,
                cursor: "|"
              }}
              >
                </Typewriter>
         </h1>
        <p className='text-md md:text-xl max-w-md mb-5 text-gray-600 dark:text-gray-300'>I'm Geoffrey, a 
        CS + Stats major at Carleton College pursuing internship opportunities for Summer 2024 and Fall 2024. Feel free to hang around
        and check out my work!</p>
        <div className='space-x-8'>
            <a href="#works" className='inline-block px-5 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>seeProjects()</a>
            {/* <a href="https://docdro.id/2VGQtwf" target='blank' className='inline-block px-5 py-3 border-transparent text-base */}
            <a href="https://www.docdroid.net/2VGQtwf/resume-pdf" target='blank' className='inline-block px-5 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>seeResume()</a>
          </div>
        </div>
   </div>
  )
}
export default HeroSection