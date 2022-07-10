import React from 'react'
// import Typewriter from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-05-09T09:20:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};


function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
        {/* <h2 className="hidden sm:block">
                  I like&nbsp;
                </h2>
                <h1 className="hidden sm:block">
                  <Typewriter
                      options={{
                        strings: [
                          '<b>making cool stuff.</b>',
                          '<b>solving problems.</b>', 
                          '<b>learning new things.</b>', 
                          '<b>meeting people.</b>',
                          '<b>developing apps.</b>', 
                          '<b>eating good food.</b>',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 20,
                        pauseFor: 1500,
                        cursor: "|"
                      }}
                    >
                    </Typewriter>
                </h1> */}
        <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 
       text-indigo-600 font-semibold dark:text-indigo-500'>
         <Typewriter 
              options={{
                strings: [
                  '<b>Hi, my name is Geoffrey.<b>',
                  '<b>Welcome to my website!',
                  '<b>Click the top right corner'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 22,
                pauseFor: 1500,
                cursor: "|"
              }}
              >
                </Typewriter>
         </h1>
        <p className='text-md md:text-xl max-w-md mb-5 text-gray-600 dark:text-gray-300'>I'm a 
        computer science major at Carleton College pursuing internship opportunities for Fall 2022 and Summer 2023. Feel free to take a look around
        and check out my work!</p>
        {/* <p className='text-md md:text-xl max-w-md mb-5 text-gray-600 dark:text-gray-300'> Current Age: <Age /></p> */}
            <a href="#works" className='inline-block px-8 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>See Projects</a>
        </div>
   </div>
  )
}

export default HeroSection