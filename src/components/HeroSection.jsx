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
                  '<b>Hi, my name is Geoffrey.<b>',
                  '<b>Welcome to my website!',
                  '<b>Click the top right corner'
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
        <p className='text-md md:text-xl max-w-md mb-5 text-gray-600 dark:text-gray-300'>I'm a 
        CS major at Carleton College pursuing internship opportunities for Spring and Summer 2023. Feel free to take a look around
        and check out my work!</p>
        <div className='space-x-8'>
            <a href="#works" className='inline-block px-5 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>seeProjects()</a>
            <a href="https://docdro.id/XeV3lXK" target='blank' className='inline-block px-5 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>seeResume()</a>
          </div>
        </div>
   </div>
  )
}
export default HeroSection