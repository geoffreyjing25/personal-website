import React, { useState, useEffect } from 'react';
// import React from 'react'
import SectionTitle from './SectionTitle'

const Age1 = () => {
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

const Age2 = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-05-09T09:19:00');
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

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center 
    justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>I'm an undergraduate at Carleton College passionate 
            about computer science and currently interested in ML and Web Development. 
            I'm a quick and curious learner who loves solving difficult and challenging 
            problems, and a critical thinker with a results-driven, initiative mindset. 
            I'm also a committed Division III student-athlete with extensive experience 
            in time management, leadership, and collaborative teamwork. Feel free to 
            reach out and connect with me!</p>
            <a href="mailto:jinggeoffrey@gmail.com"
            className='block mt-3 text-md md:text-lg
             text-gray-700 dark:text-gray-300 underline hover:text-indigo-500
            dark:hover:text-indigo-500'
            >jinggeoffrey@gmail.com</a>
            <br></br>
            <p className='text-l text-gray-600 dark:text-gray-300'> Some Fun Facts:</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>My current age: <Age1/></p> 
            <p className='text-md text-gray-600 dark:text-gray-300'> I have a twin brother. His current age: <Age2/></p>
            <p className='text-md text-gray-600 dark:text-gray-300'> Hobbies: reading, learning new things, playing basketball, sketching/painting, working out, trying different foods</p> 
        </div>
        <img src="https://avatars.githubusercontent.com/u/96399544?v=4" 
        alt="Geoffrey Jing" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About