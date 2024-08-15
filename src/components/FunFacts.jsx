import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const Age1 = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 365.2421897 * 1000 * 60 * 60 * 24;
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

function FunFacts() {
  return (
      <div className='py-12'>
      <SectionTitle>If you're still here...</SectionTitle>
      {/* <p className='text-l text-gray-600 dark:text-gray-300'>Congrats!</p> */}
      <p className='text-l text-gray-600 dark:text-gray-300'>Fun Stats About Me:</p>
        <p className='text-md text-gray-600 dark:text-gray-300'>Current age: <Age1 /></p>
        <p className='text-md text-gray-600 dark:text-gray-300'>Fastest Typing Speed: 125 wpm</p>
        {/* <p className='text-md text-gray-600 dark:text-gray-300'>Number of sports I play: 12</p> */}
        <p className='text-md text-gray-600 dark:text-gray-300'>Intermediate+ level in: 15 sports + 3 languages</p>
        <p className='text-md text-gray-600 dark:text-gray-300'>I have a <a href="https://www.linkedin.com/in/albert-jing/" target="_blank" className='text-grey-700 dark:text-grey-300 text-blue-400 dark:text-blue-400'><b>brother</b></a> who is 1 minute older (identical twin 😉)</p>
        <p className='text-md text-gray-600 dark:text-gray-300'>Most chicken mcnuggets ordered at once: 300 for my 13th birthday</p>
      </div>
  )
}

export default FunFacts