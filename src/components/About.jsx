import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle'

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

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center 
    justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>👋 I'm Geoffrey Jing, an incoming junior at Carleton College studying CS and Statistics.</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            I'm interested in entrepreneurship and startups, and am also exploring product management and venture capital. I've interned at 3 early stage startups in the past year, in a variety of tech sectors including EdTech (B2B SaaS), Healthcare, and Global Logistics. 
            </p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            Last fall I spent a semester abroad taking advanced CS courses
            in Budapest, Hungary, while exploring Europe: (Here's a photo of me in front of the Big Ben in London!) </p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            This summer, I'm working at <a href="https://www.3m.com/" target="_blank" className='text-grey-700 dark:text-grey-300
            text-red-500 dark:text-red-500'><b>3M</b></a> as a SWE + DS intern for their Corporate Research Systems Lab. </p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            At college, I found and lead VCarl, Carleton's first and premier VC organization, as well as serving
            on the board of 3 other student organizations.</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            Aside from academics, I'm a D3 college athlete (golf), avid explorer of new foods and sports, and am working on becoming
            trilingual someday (fluent in English and Mandarin, and working towards Spanish!)</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            I love meeting new people, so don't hesitate to get in touch either by email below, or just book a short meeting with me by pressing the button right button! 👊</p>
            <br/>
            <a href="mailto: jinggeoffrey@gmail.com" className="inline-block px-6 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md">
              <button className="outline-button-sm">Contact Me 👈</button>
          </a>
                <br/>
            <br></br>
            <p className='text-l text-gray-600 dark:text-gray-300'>Fun Stats About Me:</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Current age: <Age1/></p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Fastest Typing Speed: 125 wpm</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Number of sports I play: 6</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>I have a brother who is 1 minute older (identical twin 😉)</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Most chicken mcnuggets ordered at once: 300 for my 13th birthday</p>
        </div>
        {/* <img src="http://drive.google.com/uc?export=view&id=1RFg0RarI8Sm1wbH1VNJw6lTTqqOuXLQt" */}
        <img src="https://lh5.googleusercontent.com/gom5AuCSe5rpXi3fshPSTOQtOAYqKgBVKK6ANcYj38BsRUC59EfTBUvZlaP_ogeK1KU=w2400"
        alt="Geoffrey Jing" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About